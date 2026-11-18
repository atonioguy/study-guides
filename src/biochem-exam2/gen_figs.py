# Generates figs.js (question figures for Exam 2). Run: python3 gen_figs.py
# Question figures: "q-" prefix, viewBox 480 wide, 14 to 16 px text so they read at 390 px.
# Each run also writes /tmp/fig_<name>.svg for render checks.
# ladder() draws any run of glycolysis steps; make new variants by changing its arguments, not by copying it.
import json, os
FG="#1c1c1c"; MUT="#666"; ACC="#1f4b8f"; LINE="#ccc"; RED="#b42318"; GRN="#1a7f37"
def T(x,y,s,**k):
    a=" ".join('%s="%s"'%(n.replace("_","-"),v) for n,v in k.items())
    return '<text x="%.1f" y="%.1f" %s>%s</text>'%(x,y,a,s)
def _q(w,h,fs=15):
    return ['<svg viewBox="0 0 %d %d" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif" font-size="%d">'%(w,h,fs),'<rect width="%d" height="%d" fill="#fff"/>'%(w,h)]
def _ah(id,col):
    return '<defs><marker id="%s" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="%s"/></marker></defs>'%(id,col)
def _num(x,y,n,col=FG,fill="#fff",tc=None):
    return '<circle cx="%s" cy="%s" r="12" fill="%s" stroke="%s" stroke-width="1.6"/>'%(x,y,fill,col)+T(x,y+5,n,text_anchor="middle",fill=tc or col,font_weight="700",font_size="14")
def _blank(x,y,w=120,h=26,s="?"):
    return '<rect x="%s" y="%s" width="%s" height="%s" rx="5" fill="#fff" stroke="%s" stroke-width="1.6" stroke-dasharray="5 4"/>'%(x,y,w,h,FG)+T(x+w/2,y+h/2+5,s,text_anchor="middle",fill=FG,font_weight="700")

# ---------- glycolysis ladder ----------
ROWS=["Glucose","Glucose 6-phosphate","Fructose 6-phosphate","Fructose 1,6-bisphosphate",
      "Glyceraldehyde 3-phosphate + DHAP","(2) Glyceraldehyde 3-phosphate","(2) 1,3-Bisphosphoglycerate",
      "(2) 3-Phosphoglycerate","(2) 2-Phosphoglycerate","(2) Phosphoenolpyruvate","(2) Pyruvate"]
ENZ={1:"hexokinase",2:"phosphoglucose isomerase",3:"phosphofructokinase-1",4:"aldolase",5:"triose phosphate isomerase",
     6:"G3P dehydrogenase",7:"phosphoglycerate kinase",8:"phosphoglycerate mutase",9:"enolase",10:"pyruvate kinase"}
SIDE={1:("ATP","ADP"),3:("ATP","ADP"),6:("2 NAD⁺","2 NADH"),7:("2 ADP","2 ATP"),10:("2 ADP","2 ATP")}
def ladder(first=1,last=10,enz=True,side=True,nums=True,marks=None,blank_enz=(),blank_row=(),pitch=58):
    """Steps first..last of glycolysis, top to bottom.
    enz/side/nums: show enzyme names, the ATP/NAD side arrows, the step numbers.
    marks {step: letter}: a filled letter badge on that step (use with nums=False).
    blank_enz (steps) and blank_row (row index, 0 = glucose): draw a dashed "?" box instead of the name."""
    marks=marks or {}; n=last-first+1; H=44+n*pitch; cx=176 if (enz or blank_enz) else 240
    o=_q(480,H,16 if (enz or blank_enz) else 17)+[_ah("la",FG),_ah("ls",MUT)]
    for i in range(n+1):
        r=first-1+i; y=30+i*pitch
        if r in blank_row: o.append(_blank(cx-75,y-18,150,26))
        else: o.append(T(cx,y,ROWS[r],text_anchor="middle",fill=FG,font_weight="600"))
        if i==n: break
        s=r+1; y1=y+9; y2=y+pitch-20; ym=(y1+y2)/2
        o.append('<line x1="%s" y1="%s" x2="%s" y2="%s" stroke="%s" stroke-width="2" marker-end="url(#la)"/>'%(cx,y1,cx,y2,FG))
        if side and s in SIDE:
            a,b=SIDE[s]
            o.append('<path d="M%s %s Q%s %s %s %s" fill="none" stroke="%s" stroke-width="1.5" marker-end="url(#ls)"/>'%(cx-62,ym-9,cx-8,ym,cx-62,ym+11,MUT))
            o.append(T(cx-68,ym-5,a,text_anchor="end",fill=MUT,font_size="14")+T(cx-68,ym+16,b,text_anchor="end",fill=MUT,font_size="14"))
        x=cx+26
        if s in marks: o.append(_num(x,ym,marks[s],FG,FG,"#fff")); x+=22
        elif nums: o.append(_num(x,ym,s,ACC)); x+=22
        if s in blank_enz: o.append(_blank(x,ym-14,150,28))
        elif enz: o.append(T(x,ym+5,ENZ[s],fill=ACC,font_size="15"))
    o.append('</svg>'); return "".join(o)

# ---------- cellular respiration boxes ----------
def q_resp():
    o=_q(480,330,16)+[_ah("ra",FG)]
    o.append(T(130,24,"Glucose",text_anchor="middle",fill=FG,font_weight="600"))
    ys=[44,114,184,254]
    for i,y in enumerate(ys):
        o.append('<line x1="130" y1="%s" x2="130" y2="%s" stroke="%s" stroke-width="2" marker-end="url(#ra)"/>'%(y-14,y-2,FG))
        o.append('<rect x="30" y="%s" width="200" height="52" rx="6" fill="#f3f5f9" stroke="%s" stroke-width="1.5"/>'%(y,FG)+_num(130,y+26,i+1))
    def brace(y1,y2,s):
        return '<path d="M244 %s h10 v%s h-10" fill="none" stroke="%s" stroke-width="1.5"/>'%(y1,y2-y1,MUT)+"".join(T(264,(y1+y2)/2+5+20*(j-(len(s)-1)/2),t,fill=FG,font_size="16") for j,t in enumerate(s))
    o.append(brace(48,92,["Cytoplasm"])+brace(118,232,["Mitochondrial","matrix"])+brace(258,302,["Inner mitochondrial","membrane"]))
    o.append('</svg>'); return "".join(o)

# ---------- hexokinase / glucokinase curves ----------
def q_hkgk():
    o=_q(480,300,16); L,R,Tp,B=58,440,24,236
    X=lambda g:L+(R-L)*g/20; Y=lambda v:B-(B-Tp)*v
    o.append('<line x1="%s" y1="%s" x2="%s" y2="%s" stroke="%s"/><line x1="%s" y1="%s" x2="%s" y2="%s" stroke="%s"/>'%(L,B,R,B,FG,L,Tp,L,B,FG))
    for g in (5,10,15,20): o.append('<line x1="%.1f" y1="%s" x2="%.1f" y2="%s" stroke="%s"/>'%(X(g),B,X(g),B+5,FG)+T(X(g),B+20,g,text_anchor="middle",fill=MUT,font_size="15"))
    o.append(T((L+R)/2,B+46,"Glucose concentration (mmol/L)",text_anchor="middle",fill=MUT))
    o.append('<text x="%s" y="%s" text-anchor="middle" fill="%s" transform="rotate(-90 %s %s)">Enzyme activity</text>'%(L-24,(Tp+B)/2,MUT,L-24,(Tp+B)/2))
    a=lambda g:0.36*g/(0.15+g); b=lambda g:0.95*g**1.7/(8**1.7+g**1.7)
    for f,col in ((a,ACC),(b,RED)):
        o.append('<polyline fill="none" stroke="%s" stroke-width="3" points="%s"/>'%(col," ".join("%.1f,%.1f"%(X(i/10),Y(f(i/10))) for i in range(0,196))))
    o.append(T(X(19.5)+8,Y(a(19.5))+5,"A",fill=ACC,font_weight="700",font_size="17")+T(X(19.5)+8,Y(b(19.5))+5,"B",fill=RED,font_weight="700",font_size="17"))
    o.append('</svg>'); return "".join(o)

# ---------- PFK-1 regulators ----------
def q_pfk(inh=("ATP","citrate",1),act=("AMP",2)):
    """PFK-1 reaction with its regulators. A number in inh/act draws a numbered blank instead of the name."""
    o=_q(480,250,16)+[_ah("pa",FG)]
    for x,a,b in ((70,"Fructose","6-phosphate"),(410,"Fructose 1,6-","bisphosphate")):
        o.append(T(x,120,a,text_anchor="middle",fill=FG,font_weight="600")+T(x,139,b,text_anchor="middle",fill=FG,font_weight="600"))
    o.append('<line x1="130" y1="125" x2="342" y2="125" stroke="%s" stroke-width="2.5" marker-end="url(#pa)"/>'%FG)
    def row(items,y,ly,col,sym):
        xs=[236+ (i-(len(items)-1)/2)*84 for i in range(len(items))]
        for x,s in zip(xs,items):
            o.append('<line x1="%s" y1="%s" x2="%s" y2="%s" stroke="%s" stroke-width="1.5" stroke-dasharray="4 4"/>'%(x,y,x,125+(-13 if y<125 else 13),col))
            o.append('<circle cx="%s" cy="%s" r="10" fill="#fff" stroke="%s" stroke-width="2"/>'%(x,125+(-22 if y<125 else 22),col)+T(x,125+(-22 if y<125 else 22)+5.5,sym,text_anchor="middle",fill=col,font_weight="700",font_size="16"))
            if isinstance(s,int): o.append(_num(x,ly-5,s))
            else: o.append(T(x,ly,s,text_anchor="middle",fill=FG))
    row(inh,70,60,RED,"×"); row(act,180,200,GRN,"+")
    o.append(T(14,24,"× inhibits",fill=RED, font_size="15",font_weight="600")+T(14,238,"+ activates",fill=GRN, font_size="15",font_weight="600"))
    o.append('</svg>'); return "".join(o)

figs={
 # all ten steps, no enzyme names or cofactors, five lettered steps (1, 3, 4, 7, 10)
 "q-gly10":ladder(1,10,enz=False,side=False,nums=False,marks={1:"A",3:"B",4:"C",7:"D",10:"E"},pitch=50),
 # Phase I with one enzyme blanked
 "q-ph1-e3":ladder(1,5,blank_enz=(3,)),
 "q-resp":q_resp(),
 "q-hkgk":q_hkgk(),
 "q-pfk":q_pfk(),
}
here=os.path.dirname(os.path.abspath(__file__))
open(os.path.join(here,"figs.js"),"w",encoding="utf-8").write("const FIGS="+json.dumps(figs,ensure_ascii=False)+";\n")
for k,v in figs.items(): open("/tmp/fig_%s.svg"%k,"w",encoding="utf-8").write(v)
print("ok",len(figs),"figures")
