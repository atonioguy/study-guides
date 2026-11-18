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
SIDE={1:("ATP","ADP"),3:("ATP","ADP"),6:("2 NAD⁺","2 NADH"),7:("2 ADP","2 ATP"),9:("","2 H₂O"),10:("2 ADP","2 ATP")}
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

# ---------- glycolysis phase summary ----------
def q_phases(rows=("Glucose (6 carbons)","2 trioses (3 carbons each)","2 Pyruvate"),atp=("2 ATP used","4 ATP produced"),phase=("Phase I","Phase II")):
    """Glycolysis as two phase boxes. A number in rows, atp or phase draws a numbered blank instead of the text."""
    o=_q(480,300,16)+[_ah("ga",FG)]; cx=190
    for i,r in enumerate(rows):
        y=26+i*124
        if isinstance(r,int): o.append(_num(cx,y-5,r))
        else: o.append(T(cx,y,r,text_anchor="middle",fill=FG,font_weight="600"))
        if i==2: break
        o.append('<line x1="%s" y1="%s" x2="%s" y2="%s" stroke="%s" stroke-width="2" marker-end="url(#ga)"/>'%(cx,y+10,cx,y+28,FG))
        o.append('<rect x="%s" y="%s" width="180" height="50" rx="6" fill="#f3f5f9" stroke="%s" stroke-width="1.5"/>'%(cx-90,y+32,FG))
        o.append(T(cx,y+63,"Steps %s"%("1 to 5" if i==0 else "6 to 10"),text_anchor="middle",fill=FG))
        o.append('<line x1="%s" y1="%s" x2="%s" y2="%s" stroke="%s" stroke-width="2" marker-end="url(#ga)"/>'%(cx,y+84,cx,y+106,FG))
        o.append('<path d="M%s %s h26" stroke="%s" stroke-width="1.5"/>'%(cx+92,y+57,MUT))
        a=atp[i]
        if isinstance(a,int): o.append(_num(cx+132,y+57,a))
        else: o.append(T(cx+124,y+62,a,fill=FG))
        p=phase[i]
        if isinstance(p,int): o.append(_num(cx-118,y+57,p))
        else: o.append(T(cx-104,y+62,p,text_anchor="end",fill=ACC,font_weight="700"))
    o.append('</svg>'); return "".join(o)

# ---------- monosaccharide chains (Fischer style, like the lecture's linear structures) ----------
SUG={"glucose":["CHO",("H","OH"),("HO","H"),("H","OH"),("H","OH"),"CH2OH"],
     "galactose":["CHO",("H","OH"),("HO","H"),("HO","H"),("H","OH"),"CH2OH"],
     "fructose":["CH2OH","CO",("HO","H"),("H","OH"),("H","OH"),"CH2OH"],
     "ribose":["CHO",("H","OH"),("H","OH"),("H","OH"),"CH2OH"],
     "glyceraldehyde":["CHO",("H","OH"),"CH2OH"],
     "dihydroxyacetone":["CH2OH","CO","CH2OH"]}
def fischer(spec,cx,y0,step=38,mirror=False):
    """One sugar chain, top carbon at y0. Rows: "CHO" aldehyde carbon, "CO" ketone carbon, "CH2OH", or (left,right).
    mirror=True swaps every left and right group (the mirror image). Returns (svg, y of the last row)."""
    o=[];m=-1 if mirror else 1;y=y0
    ln=lambda x1,y1,x2,y2:'<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f" stroke="%s" stroke-width="1.6"/>'%(x1,y1,x2,y2,FG)
    side=lambda x,y,t,d:T(x,y,t,text_anchor="end" if d<0 else "start",fill=FG)
    for i,r in enumerate(spec):
        y=y0+i*step
        if i: o.append(ln(cx,y-step+6,cx,y-17))
        if r=="CH2OH": o.append(T(cx,y,"CH₂OH",text_anchor="middle",fill=FG)); continue
        o.append(T(cx,y,"C",text_anchor="middle",fill=FG))
        if r=="CHO":
            o.append(ln(cx-m*9,y-5,cx-m*24,y-5)+side(cx-m*28,y,"H",-m))
            for d in (-2.5,2.5): o.append(ln(cx+m*(7+d),y-13+d,cx+m*(19+d),y-25+d))
            o.append(side(cx+m*20,y-26,"O",m))
        elif r=="CO":
            for d in (-2.5,2.5): o.append(ln(cx+m*9,y-5+d,cx+m*24,y-5+d))
            o.append(side(cx+m*28,y,"O",m))
        else:
            a,b=(r[1],r[0]) if mirror else r
            a={"OH":"HO"}.get(a,a);b={"HO":"OH"}.get(b,b)
            o.append(ln(cx-9,y-5,cx-24,y-5)+side(cx-28,y,a,-1)+ln(cx+9,y-5,cx+24,y-5)+side(cx+28,y,b,1))
    return "".join(o),y
def q_sugars(names,labels,w=480,mirror=()):
    """Sugars side by side, bottoms aligned, each with a badge (number or letter) underneath."""
    n=len(names);rows=max(len(SUG[k]) for k in names);step=38;top=50;H=top+rows*step+36
    o=_q(w,H,16)
    for i,k in enumerate(names):
        cx=w*(2*i+1)/(2*n);y0=top+(rows-len(SUG[k]))*step
        svg,yb=fischer(SUG[k],cx,y0,step,mirror=i in mirror);o.append(svg)
        o.append(_num(cx,top+(rows-1)*step+34,labels[i]))
    if mirror: o.append('<line x1="%s" y1="18" x2="%s" y2="%s" stroke="%s" stroke-width="1.5" stroke-dasharray="6 5"/>'%(w/2,w/2,H-50,MUT))
    o.append('</svg>'); return "".join(o)

# ---------- disaccharides ----------
def q_disacc(rows=(("Glucose",1,"Sucrose"),("Glucose",2,"Lactose"))):
    """Monosaccharide + monosaccharide -> disaccharide. A number draws a numbered dashed box."""
    o=_q(480,len(rows)*90+14,16)+[_ah("da",FG)]
    for i,(a,b,c) in enumerate(rows):
        y=30+i*90
        for x,t in ((24,a),(196,b)):
            if isinstance(t,int): o.append('<rect x="%s" y="%s" width="140" height="44" rx="8" fill="#fff" stroke="%s" stroke-width="1.6" stroke-dasharray="5 4"/>'%(x,y,FG)+_num(x+70,y+22,t))
            else: o.append('<rect x="%s" y="%s" width="140" height="44" rx="8" fill="#f3f5f9" stroke="%s" stroke-width="1.5"/>'%(x,y,FG)+T(x+70,y+27,t,text_anchor="middle",fill=FG,font_weight="600"))
        o.append(T(180,y+29,"+",text_anchor="middle",fill=FG,font_size="22",font_weight="700"))
        o.append('<line x1="346" y1="%s" x2="380" y2="%s" stroke="%s" stroke-width="2" marker-end="url(#da)"/>'%(y+22,y+22,FG))
        o.append(T(390,y+27,c,fill=FG,font_weight="700"))
    o.append('</svg>'); return "".join(o)

# ---------- lactose in the gut ----------
def q_lact(enz=1):
    o=_q(480,330,15)+[_ah("lc",FG)]
    box=lambda x,y,w,lines,fill="#f3f5f9":'<rect x="%s" y="%s" width="%s" height="%s" rx="7" fill="%s" stroke="%s" stroke-width="1.5"/>'%(x,y,w,14+20*len(lines),fill,FG)+"".join(T(x+w/2,y+24+20*j,t,text_anchor="middle",fill=FG) for j,t in enumerate(lines))
    arr=lambda x1,y1,x2,y2:'<line x1="%s" y1="%s" x2="%s" y2="%s" stroke="%s" stroke-width="2" marker-end="url(#lc)"/>'%(x1,y1,x2,y2,FG)
    o.append(box(150,12,180,["Lactose","(small intestine)"]))
    o.append(arr(200,68,120,128)+arr(280,68,360,128))
    if isinstance(enz,int): o.append(_num(146,92,enz))
    else: o.append(T(150,98,enz,text_anchor="end",fill=ACC,font_weight="600"))
    o.append(T(338,96,"too little",text_anchor="start",fill=MUT,font_size="14"))
    o.append(box(20,132,200,["Glucose + galactose","absorbed"]))
    o.append(box(260,132,200,["Lactose not absorbed,","reaches large intestine"]))
    o.append(arr(360,188,360,218))
    o.append(box(260,222,200,["Bacteria metabolize it"]))
    o.append(arr(360,258,360,280))
    o.append(box(260,284,200,["Gas, abdominal pain"],"#fff"))
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
def q_reg(sub,prod,inh,act):
    """One reaction with its allosteric regulators. sub/prod: two-line labels.
    A number in inh/act draws a numbered blank instead of the name."""
    o=_q(480,250,16)+[_ah("pa",FG)]
    for x,(a,b) in ((70,sub),(410,prod)):
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
    if inh: o.append(T(14,24,"× inhibits",fill=RED, font_size="15",font_weight="600"))
    if act: o.append(T(14,238,"+ activates",fill=GRN, font_size="15",font_weight="600"))
    o.append('</svg>'); return "".join(o)
def q_pfk(inh=("ATP","citrate",1),act=("AMP",2)):
    """PFK-1 and its regulators."""
    return q_reg(("Fructose","6-phosphate"),("Fructose 1,6-","bisphosphate"),inh,act)
def q_pk(inh=("ATP","citrate","alanine"),act=("F1,6BP","PEP")):
    """Pyruvate kinase and its regulators."""
    return q_reg(("Phosphoenol-","pyruvate"),("Pyruvate",""),inh,act)

# ---------- fate of pyruvate ----------
def q_fork(left=(1,"Lactate"),right=("Pyruvate dehydrogenase",2)):
    """Pyruvate splits: no oxygen (left) or oxygen (right). Each side is (enzyme, product); a number draws a blank."""
    o=_q(480,250,16)+[_ah("fa",FG)]
    o.append('<rect x="180" y="14" width="120" height="38" rx="7" fill="#f3f5f9" stroke="%s" stroke-width="1.5"/>'%FG+T(240,39,"Pyruvate",text_anchor="middle",fill=FG,font_weight="600"))
    for cx,head,(e,pr) in ((120,"No oxygen",left),(360,"Oxygen",right)):
        o.append('<path d="M240 52 V72 H%s V98" fill="none" stroke="%s" stroke-width="2" marker-end="url(#fa)"/>'%(cx,FG))
        o.append(T(cx,90 if False else 120,head,text_anchor="middle",fill=MUT,font_size="15"))
        if isinstance(e,int): o.append(_num(cx,150,e))
        else:
            ws=e.split(" ");o.append("".join(T(cx,148+18*j,w,text_anchor="middle",fill=ACC,font_size="15") for j,w in enumerate(ws)))
        o.append('<line x1="%s" y1="182" x2="%s" y2="200" stroke="%s" stroke-width="2" marker-end="url(#fa)"/>'%(cx,cx,FG))
        if isinstance(pr,int): o.append('<rect x="%s" y="204" width="140" height="38" rx="7" fill="#fff" stroke="%s" stroke-width="1.6" stroke-dasharray="5 4"/>'%(cx-70,FG)+_num(cx,223,pr))
        else: o.append('<rect x="%s" y="204" width="140" height="38" rx="7" fill="#f3f5f9" stroke="%s" stroke-width="1.5"/>'%(cx-70,FG)+T(cx,229,pr,text_anchor="middle",fill=FG,font_weight="600"))
    o.append('</svg>'); return "".join(o)

# ---------- pyruvate dehydrogenase, three steps ----------
def q_pdh(side=(1,("NAD⁺","NADH"),("CoA",)),rows=("Pyruvate","2-carbon molecule","Acetyl group","Acetyl CoA"),names=("Decarboxylation","Oxidation","Transfer")):
    """Three steps top to bottom. side per step: a number (blank leaving the chain), (in,out) curve, (in,) joining arrow, or None.
    A number in names or rows draws a numbered blank instead of the text. Also used for glycogenesis (L4)."""
    o=_q(480,330,16)+[_ah("pd",FG),_ah("ps",MUT)];cx=230;pitch=96
    for i,r in enumerate(rows):
        y=30+i*pitch
        if isinstance(r,int): o.append(_blank(cx-75,y-18,150,26,"")+_num(cx,y-5,r))
        else: o.append(T(cx,y,r,text_anchor="middle",fill=FG,font_weight="600"))
        if i==3: break
        y1,y2=y+9,y+pitch-20;ym=(y1+y2)/2
        o.append('<line x1="%s" y1="%s" x2="%s" y2="%s" stroke="%s" stroke-width="2" marker-end="url(#pd)"/>'%(cx,y1,cx,y2,FG))
        n=names[i]
        if isinstance(n,int): o.append(_num(cx-30,ym,n))
        else: o.append(T(cx-14,ym+5,n,text_anchor="end",fill=ACC,font_size="15"))
        sd=side[i]
        if sd is None: pass
        elif isinstance(sd,int):
            o.append('<path d="M%s %s Q%s %s %s %s" fill="none" stroke="%s" stroke-width="1.5" marker-end="url(#ps)"/>'%(cx+6,ym-4,cx+40,ym-4,cx+62,ym+10,MUT)+_num(cx+80,ym+14,sd))
        elif len(sd)==2:
            o.append('<path d="M%s %s Q%s %s %s %s" fill="none" stroke="%s" stroke-width="1.5" marker-end="url(#ps)"/>'%(cx+62,ym-9,cx+8,ym,cx+62,ym+11,MUT))
            o.append(T(cx+68,ym-5,sd[0],fill=MUT,font_size="14")+T(cx+68,ym+16,sd[1],fill=MUT,font_size="14"))
        else:
            o.append('<path d="M%s %s Q%s %s %s %s" fill="none" stroke="%s" stroke-width="1.5" marker-end="url(#ps)"/>'%(cx+62,ym-6,cx+30,ym-6,cx+8,ym+6,MUT)+T(cx+68,ym-1,sd[0],fill=MUT,font_size="14"))
    o.append('</svg>'); return "".join(o)

# ---------- anaerobic NAD+ loop ----------
def q_nadloop(nad=1):
    """Glucose -> glycolysis -> 2 pyruvate -> lactate dehydrogenase -> 2 lactate, with NAD+ looped back to glycolysis.
    nad as a number draws that numbered blank at both NAD+ positions."""
    o=_q(480,300,16)+[_ah("na",FG),_ah("nm",MUT)];cx=270
    lab=lambda x,y,t:(_num(x-12,y-5,t) if isinstance(t,int) else T(x,y,t,text_anchor="end",fill=MUT,font_size="14"))
    for y,t in ((26,"Glucose"),(146,"2 Pyruvate"),(266,"2 Lactate")):
        o.append(T(cx,y,t,text_anchor="middle",fill=FG,font_weight="600"))
    for y1,name,a,b in ((36,"Glycolysis",nad,"2 NADH"),(156,"Lactate dehydrogenase","2 NADH",nad)):
        y2=y1+92;ym=(y1+y2)/2
        o.append('<line x1="%s" y1="%s" x2="%s" y2="%s" stroke="%s" stroke-width="2" marker-end="url(#na)"/>'%(cx,y1,cx,y2-18,FG))
        o.append(T(cx+14,ym+5,name,fill=ACC,font_size="15"))
        o.append('<path d="M%s %s Q%s %s %s %s" fill="none" stroke="%s" stroke-width="1.5" marker-end="url(#nm)"/>'%(cx-70,ym-12,cx-8,ym,cx-70,ym+14,MUT))
        o.append(lab(cx-76,ym-8,a)+lab(cx-76,ym+19,b))
    x0=cx-76-30 if isinstance(nad,int) else cx-76-58
    o.append('<path d="M%s 215 H80 V69 H%s" fill="none" stroke="%s" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#na)"/>'%(x0,x0,FG))
    o.append('</svg>'); return "".join(o)

# ---------- L4: glycogen branch ----------
def q_glybond(lin=1,br=2):
    """A stretch of glycogen: a linear chain of glucose with one branch. lin/br: label (number = badge, text = name)
    pointing at a bond in the linear chain and at the branch point."""
    o=_q(480,250,16); r=13; y=170; xs=[44+i*44 for i in range(10)]
    bx=[xs[4]+30*(j+1) for j in range(4)]; by=[y-38*(j+1) for j in range(4)]
    o.append('<line x1="%s" y1="%s" x2="%s" y2="%s" stroke="%s" stroke-width="2.5"/>'%(xs[0],y,xs[-1],y,FG))
    o.append('<line x1="%s" y1="%s" x2="%s" y2="%s" stroke="%s" stroke-width="2.5"/>'%(xs[4],y,bx[-1],by[-1],FG))
    for x in xs: o.append('<circle cx="%s" cy="%s" r="%s" fill="#f3f5f9" stroke="%s" stroke-width="1.6"/>'%(x,y,r,FG))
    for x,yy in zip(bx,by): o.append('<circle cx="%s" cy="%s" r="%s" fill="#f3f5f9" stroke="%s" stroke-width="1.6"/>'%(x,yy,r,FG))
    o.append('<circle cx="%s" cy="%s" r="%s" fill="#f3f5f9" stroke="%s" stroke-width="1.6"/>'%(32,30,r,FG)+T(54,35,"= one glucose",fill=MUT,font_size="15"))
    def lab(x,y,tx,ty,s):
        o.append('<line x1="%s" y1="%s" x2="%s" y2="%s" stroke="%s" stroke-width="1.5"/>'%(x,y,tx,ty,MUT))
        o.append(_num(tx,ty,s) if isinstance(s,int) else T(tx,ty+5,s,text_anchor="middle",fill=FG,font_size="15"))
    lab((xs[1]+xs[2])/2,y+4,(xs[1]+xs[2])/2,y+48,lin)
    lab(xs[4]+15,y-19,xs[4]-40,y-80,br)
    o.append(T(xs[-1],y+40,"…",text_anchor="middle",fill=MUT)+T(bx[-1]+20,by[-1],"…",fill=MUT))
    o.append('</svg>'); return "".join(o)

# ---------- L4: hormones and glycogen in liver cells ----------
def q_horm(hor=("Insulin","Glucagon"),proc=("Glycogenesis","Glycogenolysis")):
    """Glucose -> glycogen (top arc) under the top hormone, glycogen -> glucose (bottom arc) under the bottom hormone.
    A number in hor or proc draws a numbered blank."""
    o=_q(480,310,16)+[_ah("ha",FG),_ah("hg",GRN)]
    o.append(T(110,160,"Glycogen",text_anchor="middle",fill=FG,font_weight="700",font_size="18")+T(370,160,"Glucose",text_anchor="middle",fill=FG,font_weight="700",font_size="18"))
    o.append(T(240,160,"Liver cell",text_anchor="middle",fill=MUT,font_size="14"))
    o.append('<path d="M340 134 Q240 92 140 134" fill="none" stroke="%s" stroke-width="2.2" marker-end="url(#ha)"/>'%FG)
    o.append('<path d="M140 176 Q240 218 340 176" fill="none" stroke="%s" stroke-width="2.2" marker-end="url(#ha)"/>'%FG)
    def put(x,y,s,bold=False,box=False):
        if isinstance(s,int): return _num(x,y-5,s)
        r=T(x,y,s,text_anchor="middle",fill=FG,font_weight="700" if bold else "400")
        if box: r='<rect x="%s" y="%s" width="120" height="30" rx="5" fill="#f3f5f9" stroke="%s" stroke-width="1.4"/>'%(x-60,y-21,FG)+r
        return r
    o.append(put(240,84,proc[0])+put(240,248,proc[1]))
    o.append(put(240,30,hor[0],True,True)+put(240,298,hor[1],True,True))
    for y1,y2,yp in ((40,66,53),(282,256,269)):
        o.append('<line x1="240" y1="%s" x2="240" y2="%s" stroke="%s" stroke-width="2" marker-end="url(#hg)"/>'%(y1,y2,GRN))
        o.append(T(258,yp+5,"+",fill=GRN,font_weight="700",font_size="18"))
    o.append('</svg>'); return "".join(o)

# ---------- L4/L5: sources of glucose over time (lecture graph, hours then days) ----------
def q_gsrc(curves=("Ingested glucose","Glycogenolysis","Gluconeogenesis"),states=("Fed","Fasting","Starved")):
    """Glucose oxidized over time. curves/states: text, or a letter/number badge (str of length 1 or int)."""
    o=_q(480,320,15); L,R,Tp,B=62,462,18,206; XB=L+0.56*(R-L)
    def X(h=None,d=None): return L+(XB-L-8)*h/30 if h is not None else XB+8+(R-XB-8)*(d-1)/39
    Y=lambda v:B-(B-Tp)*v/44
    o.append('<line x1="%s" y1="%s" x2="%s" y2="%s" stroke="%s"/><line x1="%s" y1="%s" x2="%s" y2="%s" stroke="%s"/>'%(L,B,R,B,FG,L,Tp,L,B,FG))
    o.append('<path d="M%.1f %s l6 -12 M%.1f %s l6 -12" stroke="%s" stroke-width="1.5"/>'%(XB-6,B+6,XB,B+6,FG))
    for v in (20,40): o.append('<line x1="%s" y1="%.1f" x2="%s" y2="%.1f" stroke="%s"/>'%(L-5,Y(v),L,Y(v),FG)+T(L-9,Y(v)+5,v,text_anchor="end",fill=MUT,font_size="16"))
    for h in (8,16,24): o.append(T(X(h),B+19,h,text_anchor="middle",fill=MUT,font_size="16"))
    for d in (8,16,24,32,40): o.append(T(X(d=d),B+19,d,text_anchor="middle",fill=MUT,font_size="16"))
    o.append(T((L+XB)/2,B+40,"Hours",text_anchor="middle",fill=MUT,font_size="16")+T((XB+R)/2,B+40,"Days",text_anchor="middle",fill=MUT,font_size="16"))
    o.append('<text x="18" y="%s" text-anchor="middle" fill="%s" font-size="15" transform="rotate(-90 18 %s)">Glucose oxidized (g/hr)</text>'%((Tp+B)/2,MUT,(Tp+B)/2))
    ing=[(0,40),(1,38),(1.6,20),(2.4,4),(3.2,0)]
    gly=[(2,0),(4,6),(7,9),(10,8.6),(14,6.4),(18,4),(22,2),(26,0.6),(29,0)]
    gnh=[(4,0),(30,10)]; gnd=[(1,10),(3,7.5),(8,5.5),(16,5.4),(30,6),(40,6.2)]
    pl=lambda pts,day=False:" ".join("%.1f,%.1f"%((X(d=a) if day else X(a)),Y(b)) for a,b in pts)
    o.append('<polyline fill="none" stroke="%s" stroke-width="2.6" stroke-dasharray="3 4" points="%s"/>'%(FG,pl(ing)))
    o.append('<polyline fill="none" stroke="%s" stroke-width="3" points="%s"/>'%(ACC,pl(gly)))
    for pts,day in ((gnh,False),(gnd,True)): o.append('<polyline fill="none" stroke="%s" stroke-width="2.6" stroke-dasharray="10 4 2 4" points="%s"/>'%(RED,pl(pts,day)))
    for s,(x,y),col in zip(curves,((X(1.6)+12,Y(36)),(X(9)+4,Y(9)-14),(X(d=12),Y(5.5)-18)),(FG,ACC,RED)):
        if isinstance(s,int) or len(s)==1: o.append(_num(x+10,y-4,s,col))
        else: o.append(T(x,y,s,fill=col,font_weight="600",font_size="16"))
    # state bands under the axis
    yb=B+62; spans=((X(0),X(2)),(X(2),XB),(XB,R))
    for (a,b),s in zip(spans,states):
        o.append('<path d="M%.1f %s v-8 M%.1f %s v-8 M%.1f %s H%.1f" stroke="%s" stroke-width="1.4"/>'%(a,yb,b,yb,a,yb-4,b,FG))
        cx=(a+b)/2
        if isinstance(s,int): o.append(_num(cx if b-a>40 else a+2,yb+22,s))
        else: o.append(T(cx if b-a>40 else a,yb+22,s,text_anchor="middle" if b-a>40 else "start",fill=FG,font_size="16"))
    o.append('</svg>'); return "".join(o)

# ---------- L4: glycogen breakdown in liver vs skeletal muscle ----------
def q_tissue(e=("Glycogen|phosphorylase","Phosphoglucomutase","Glucose-6-|phosphatase")):
    """Glycogen -> G1P -> G6P in both columns (liver left, muscle right); the liver's G6P -> glucose -> blood,
    the muscle's step is crossed out. Enzyme names sit between the columns ("|" breaks the line); a number draws a numbered blank."""
    o=_q(480,350,16)+[_ah("ta",FG)]; xl,xr=88,392; ys=(56,136,216,296)
    o.append(T(xl,24,"LIVER",text_anchor="middle",fill=ACC,font_weight="700")+T(xr,24,"SKELETAL MUSCLE",text_anchor="middle",fill=ACC,font_weight="700"))
    rows=("Glycogen","Glucose 1-P","Glucose 6-P")
    for x in (xl,xr):
        for y,r in zip(ys,rows): o.append(T(x,y,r,text_anchor="middle",fill=FG,font_weight="600"))
        for i in range(2): o.append('<line x1="%s" y1="%s" x2="%s" y2="%s" stroke="%s" stroke-width="2" marker-end="url(#ta)"/>'%(x,ys[i]+10,x,ys[i+1]-22,FG))
    o.append('<line x1="%s" y1="%s" x2="%s" y2="%s" stroke="%s" stroke-width="2" marker-end="url(#ta)"/>'%(xl,ys[2]+10,xl,ys[3]-22,FG))
    o.append(T(xl,ys[3],"Glucose → blood",text_anchor="middle",fill=FG,font_weight="600"))
    o.append('<line x1="%s" y1="%s" x2="%s" y2="%s" stroke="%s" stroke-width="2" stroke-dasharray="5 4"/>'%(xr,ys[2]+10,xr,ys[3]-22,MUT))
    o.append(T(xr,ys[2]+50,"×",text_anchor="middle",fill=RED,font_weight="700",font_size="30"))
    o.append(T(xr,ys[3],"No glucose released",text_anchor="middle",fill=MUT,font_size="15"))
    for i,s in enumerate(e):
        ym=(ys[i]+ys[i+1])/2-4
        if isinstance(s,int): o.append(_num(240,ym-2,s))
        else:
            ws=s.split("|")
            o.append("".join(T(240,ym-6+18*j,w,text_anchor="middle",fill=ACC,font_size="15") for j,w in enumerate(ws)))
    o.append('</svg>'); return "".join(o)

# ---------- L5: lactate from muscle to liver ----------
def q_loop(proc=(1,"Glycolysis"),mol=("Glucose","Lactate")):
    """Liver (left) and muscle (right). Liver: lactate up to glucose by proc[0]. Muscle: glucose down to lactate by proc[1].
    Glucose crosses to muscle on top, lactate back to the liver below, both through the blood. A number draws a blank."""
    o=_q(480,290,16)+[_ah("lo",FG)]; xl,xr,yt,yb=110,370,90,230
    o.append('<rect x="20" y="40" width="190" height="236" rx="10" fill="#f3f5f9" stroke="%s"/>'%LINE+'<rect x="270" y="40" width="190" height="236" rx="10" fill="#f3f5f9" stroke="%s"/>'%LINE)
    o.append(T(xl,28,"LIVER",text_anchor="middle",fill=ACC,font_weight="700")+T(xr,28,"MUSCLE",text_anchor="middle",fill=ACC,font_weight="700"))
    for x in (xl,xr):
        for y,m in ((yt,mol[0]),(yb,mol[1])):
            o.append(_num(x,y-5,m) if isinstance(m,int) else T(x,y,m,text_anchor="middle",fill=FG,font_weight="600"))
    o.append('<line x1="%s" y1="%s" x2="%s" y2="%s" stroke="%s" stroke-width="2" marker-end="url(#lo)"/>'%(xl,yb-20,xl,yt+14,FG))
    o.append('<line x1="%s" y1="%s" x2="%s" y2="%s" stroke="%s" stroke-width="2" marker-end="url(#lo)"/>'%(xr,yt+10,xr,yb-24,FG))
    for (x,anchor,dx),pr in zip(((xl,"start",10),(xr,"start",10)),proc):
        ym=(yt+yb)/2
        o.append(_num(x+26,ym-2,pr) if isinstance(pr,int) else T(x+dx,ym+5,pr,text_anchor=anchor,fill=ACC,font_size="15"))
    o.append('<line x1="%s" y1="%s" x2="%s" y2="%s" stroke="%s" stroke-width="2" marker-end="url(#lo)"/>'%(xl+52,yt-6,xr-52,yt-6,FG))
    o.append('<line x1="%s" y1="%s" x2="%s" y2="%s" stroke="%s" stroke-width="2" marker-end="url(#lo)"/>'%(xr-50,yb-6,xl+50,yb-6,FG))
    o.append(T(240,yt-14,"blood",text_anchor="middle",fill=MUT,font_size="14")+T(240,yb+14,"blood",text_anchor="middle",fill=MUT,font_size="14"))
    o.append('</svg>'); return "".join(o)

# ---------- L5: glycolysis vs gluconeogenesis bypass steps ----------
def q_bypass(gly=("hexokinase","phosphofructokinase-1","pyruvate kinase"),gng=(1,2,3,4),mid="A"):
    """Glycolysis goes down on the left (red), gluconeogenesis up on the right (blue) at the three irreversible steps.
    gng = (G6P->glucose, F1,6BP->F6P, pyruvate->oxaloacetate, oxaloacetate->PEP). mid labels the shared PEP..F1,6BP stretch.
    A number (or one letter) draws a badge instead of the name."""
    o=_q(480,470,16)+[_ah("bg",RED),_ah("bn",ACC),_ah("bf",FG)]; cx=230
    ys={"glc":40,"g6p":110,"f6p":180,"fbp":250,"pep":350,"pyr":450}
    lab={"glc":"Glucose","g6p":"Glucose 6-phosphate","f6p":"Fructose 6-phosphate","fbp":"Fructose 1,6-bisphosphate","pep":"Phosphoenolpyruvate","pyr":"Pyruvate"}
    for k,y in ys.items(): o.append(T(cx,y,lab[k],text_anchor="middle",fill=FG,font_weight="600"))
    o.append(T(14,22,"Glycolysis",fill=RED,font_weight="700",font_size="15")+T(466,22,"Gluconeogenesis",text_anchor="end",fill=ACC,font_weight="700",font_size="15"))
    def put(x,y,s,col,anchor):
        if isinstance(s,int) or len(s)==1: return _num(x+(12 if anchor=="start" else -12),y-5,s)
        return T(x,y,s,text_anchor=anchor,fill=col,font_size="15")
    def down(a,b,name):
        y1,y2=ys[a]+10,ys[b]-22; o.append('<line x1="%s" y1="%s" x2="%s" y2="%s" stroke="%s" stroke-width="2" marker-end="url(#bg)"/>'%(cx-36,y1,cx-36,y2,RED)); o.append(put(cx-46,(y1+y2)/2+5,name,RED,"end"))
    def up(a,b,name):
        y1,y2=ys[a]-22,ys[b]+10; o.append('<line x1="%s" y1="%s" x2="%s" y2="%s" stroke="%s" stroke-width="2" marker-end="url(#bn)"/>'%(cx+36,y1,cx+36,y2,ACC)); o.append(put(cx+46,(y1+y2)/2+5,name,ACC,"start"))
    down("glc","g6p",gly[0]); up("g6p","glc",gng[0])
    o.append('<line x1="%s" y1="%s" x2="%s" y2="%s" stroke="%s" stroke-width="2" marker-start="url(#bf)" marker-end="url(#bf)"/>'%(cx,ys["g6p"]+10,cx,ys["f6p"]-22,FG))
    down("f6p","fbp",gly[1]); up("fbp","f6p",gng[1])
    o.append('<line x1="%s" y1="%s" x2="%s" y2="%s" stroke="%s" stroke-width="2" stroke-dasharray="4 5" marker-start="url(#bf)" marker-end="url(#bf)"/>'%(cx,ys["fbp"]+10,cx,ys["pep"]-22,FG))
    o.append(put(cx+12,(ys["fbp"]+ys["pep"])/2+5,mid,FG,"start"))
    down("pep","pyr",gly[2])
    ox,oy=390,400
    o.append(T(ox,oy+5,"Oxaloacetate",text_anchor="middle",fill=FG,font_weight="600"))
    o.append('<path d="M%s %s Q%s %s %s %s" fill="none" stroke="%s" stroke-width="2" marker-end="url(#bn)"/>'%(cx+44,ys["pyr"]-6,ox-10,ys["pyr"]-6,ox,oy+14,ACC))
    o.append('<path d="M%s %s Q%s %s %s %s" fill="none" stroke="%s" stroke-width="2" marker-end="url(#bn)"/>'%(ox,oy-16,ox-6,ys["pep"]+12,cx+100,ys["pep"]+8,ACC))
    o.append(put(ox+28,ys["pyr"]-4,gng[2],ACC,"start")+put(ox+28,ys["pep"]+16,gng[3],ACC,"start"))
    o.append('</svg>'); return "".join(o)

# ================= Module 5 =================
import math
def _chain(x0,y0,n,dbl=None,seg=20,bend=32):
    """Zigzag carbon chain of n carbons from C1 at (x0,y0), heading right. dbl {bond: "c"|"t"}, bond k joins C_k and C_k+1.
    A cis bond kinks the chain by `bend` degrees (alternating up/down so several stay in the row); a trans bond keeps it straight."""
    dbl=dbl or {}; o=[]; x,y=x0,y0; axis=0; kink=-1
    for k in range(1,n):
        a=math.radians(axis+(30 if k%2 else -30)); x2,y2=x+seg*math.cos(a),y+seg*math.sin(a)
        o.append('<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f" stroke="%s" stroke-width="1.8" stroke-linecap="round"/>'%(x,y,x2,y2,FG))
        if k in dbl:
            s=-1 if k%2 else 1; px,py=-math.sin(a)*4*s,math.cos(a)*4*s; dx,dy=(x2-x)*0.18,(y2-y)*0.18
            o.append('<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f" stroke="%s" stroke-width="1.8"/>'%(x+dx+px,y+dy+py,x2-dx+px,y2-dy+py,FG))
            if dbl[k]=="c": axis+=kink*bend; kink=-kink
        x,y=x2,y2
    return "".join(o)
def _acid(x,y):
    """Carboxyl head at C1 (x,y): C=O up, HO to the left."""
    return ('<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f" stroke="%s" stroke-width="1.8"/>'%(x-3,y,x-3,y-18,FG)+
            '<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f" stroke="%s" stroke-width="1.8"/>'%(x+3,y,x+3,y-18,FG)+T(x,y-22,"O",text_anchor="middle",fill=FG,font_size="15")+
            '<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f" stroke="%s" stroke-width="1.8"/>'%(x,y,x-17,y+10,FG)+T(x-19,y+16,"HO",text_anchor="end",fill=FG,font_size="15"))

# ---------- L1: fatty acid chains ----------
def q_fa(rows=(("A",{9:"t"}),("B",{}),("C",{9:"c",12:"c",15:"c"}),("D",{9:"c"}))):
    """18-carbon fatty acids, one per row, each with a badge (letter or number) and its double bonds (see _chain)."""
    o=_q(480,len(rows)*84+16,15)
    for i,(lab,d) in enumerate(rows):
        y=58+i*84
        o.append(_num(22,y,lab,FG,FG,"#fff") if isinstance(lab,str) and len(lab)==1 else _num(22,y,lab))
        o.append(_acid(104,y)+_chain(104,y,18,d))
    o.append('</svg>'); return "".join(o)

# ---------- L1: triglyceride ----------
def q_tg(bb=1,es=2):
    """Glycerol (left column) with three fatty acids attached through O. bb labels the glycerol backbone, es the ester bond
    of the bottom chain (number = badge, text = name)."""
    o=_q(480,262,15); ys=(52,122,192)
    for i,y in enumerate(ys):
        o.append(T(70,y+5,"HC" if i==1 else "H₂C",text_anchor="middle",fill=FG,font_size="15"))
        if i<2: o.append('<line x1="70" y1="%s" x2="70" y2="%s" stroke="%s" stroke-width="1.8"/>'%(y+10,ys[i+1]-12,FG))
        o.append('<line x1="88" y1="%s" x2="102" y2="%s" stroke="%s" stroke-width="1.8"/>'%(y,y,FG)+T(111,y+5,"O",text_anchor="middle",fill=FG,font_size="15"))
        o.append('<line x1="120" y1="%s" x2="136" y2="%s" stroke="%s" stroke-width="1.8"/>'%(y,y,FG))
        o.append('<line x1="137" y1="%s" x2="137" y2="%s" stroke="%s" stroke-width="1.8"/><line x1="143" y1="%s" x2="143" y2="%s" stroke="%s" stroke-width="1.8"/>'%(y,y-17,FG,y,y-17,FG)+T(140,y-21,"O",text_anchor="middle",fill=FG,font_size="15"))
        o.append(_chain(140,y,16,{9:"c"} if i==1 else None))
    o.append('<path d="M46 40 h-8 v164 h8" fill="none" stroke="%s" stroke-width="1.5"/>'%MUT)
    o.append(_num(20,122,bb) if isinstance(bb,int) else T(30,127,bb,text_anchor="end",fill=FG))
    o.append('<line x1="111" y1="202" x2="111" y2="226" stroke="%s" stroke-width="1.5"/>'%MUT)
    o.append(_num(111,240,es) if isinstance(es,int) else T(111,246,es,text_anchor="middle",fill=FG))
    o.append('</svg>'); return "".join(o)

# ---------- L1: complex lipids (the lecture's block schematic) ----------
def q_cplx(heads=(1,2,3),sugar="Sugar"):
    """Glycerophospholipid, sphingophospholipid, glycolipid side by side. heads: column titles ("|" breaks a line;
    a number draws a badge). sugar: the glycolipid's extra group (a number draws a dashed numbered blank)."""
    o=_q(480,300,15)
    rect=lambda x,y,w,h,f:'<rect x="%s" y="%s" width="%s" height="%s" rx="3" fill="%s" stroke="%s" stroke-width="1.4"/>'%(x,y,w,h,f,FG)
    vt=lambda x,y,s:'<text x="%s" y="%s" text-anchor="middle" fill="%s" font-size="14" transform="rotate(-90 %s %s)">%s</text>'%(x,y,FG,x,y,s)
    ln=lambda x,y1,y2:'<line x1="%s" y1="%s" x2="%s" y2="%s" stroke="%s" stroke-width="1.8"/>'%(x,y1,x,y2,FG)
    for i,cx in enumerate((84,240,396)):
        hd=heads[i]
        if isinstance(hd,int): o.append(_num(cx,24,hd))
        else: o.append("".join(T(cx,22+17*j,w,text_anchor="middle",fill=ACC,font_weight="700",font_size="14") for j,w in enumerate(hd.split("|"))))
        if i<2:
            o.append(rect(cx-32,52,64,24,"#fff")+T(cx,69,"Alcohol",text_anchor="middle",fill=FG,font_size="14")+ln(cx,76,84))
            o.append('<circle cx="%s" cy="100" r="16" fill="#fdecea" stroke="%s" stroke-width="1.4"/>'%(cx,FG)+T(cx,105,"PO₄",text_anchor="middle",fill=FG,font_size="13"))
        elif isinstance(sugar,int):
            o.append('<path d="M%s 72 l26 28 l-26 28 l-26 -28 z" fill="#fff" stroke="%s" stroke-width="1.6" stroke-dasharray="5 4"/>'%(cx,FG)+_num(cx,100,sugar))
        else:
            o.append('<path d="M%s 72 l26 28 l-26 28 l-26 -28 z" fill="#f3f5f9" stroke="%s" stroke-width="1.4"/>'%(cx,FG)+T(cx,105,sugar,text_anchor="middle",fill=FG,font_size="13"))
        o.append(ln(cx,116 if i<2 else 128,132))
        if i==0:
            o.append(rect(cx-42,132,84,24,"#f3f5f9")+T(cx,149,"Glycerol",text_anchor="middle",fill=FG,font_size="14"))
            for fx in (cx-34,cx+8): o.append(rect(fx,156,26,128,"#fff")+vt(fx+13,220,"Fatty acid"))
        else:
            o.append(rect(cx-28,132,62,24,"#eaf3ec")+rect(cx+8,132,26,152,"#eaf3ec")+'<rect x="%s" y="133.5" width="23" height="21" fill="#eaf3ec"/>'%(cx+9.5))
            o.append(vt(cx+21,214,"Sphingosine")+rect(cx-24,156,26,128,"#fff")+vt(cx-11,220,"Fatty acid"))
    o.append('</svg>'); return "".join(o)

# ---------- L1: steroid rings ----------
def _rings(r):
    """Steroid core (three six-carbon rings and one five-carbon ring) centered near the origin, as polygon point lists."""
    hexa=lambda cx,cy:[(cx+r*math.cos(math.radians(-90+60*k)),cy+r*math.sin(math.radians(-90+60*k))) for k in range(6)]
    s3=math.sqrt(3)*r; A=hexa(-s3,0); B=hexa(0,0); C=hexa(s3/2,-1.5*r)
    p1,p2=C[1],C[2]  # right edge of C (top-right, bottom-right)
    ex,ey=p2[0]-p1[0],p2[1]-p1[1]; P=[p1,p2]
    for k in range(3):
        a=math.radians(-72); ex,ey=ex*math.cos(a)-ey*math.sin(a),ex*math.sin(a)+ey*math.cos(a); P.append((P[-1][0]+ex,P[-1][1]+ey))
    return [A,B,C,P]
def _poly(pts,fill,dx=0,dy=0,sw=1.8):
    return '<polygon points="%s" fill="%s" stroke="%s" stroke-width="%s" stroke-linejoin="round"/>'%(" ".join("%.1f,%.1f"%(x+dx,y+dy) for x,y in pts),fill,FG,sw)
def q_ster():
    o=_q(480,200,15)
    for pts in _rings(36): o.append(_poly(pts,"#f3f5f9",226,124))
    o.append('</svg>'); return "".join(o)

# ---------- L1: membrane with its three common lipids ----------
def q_mem(lab=(1,2,3)):
    """Bilayer. lab = badges for a phospholipid, cholesterol and a glycolipid (with its sugar chain) in the outer leaflet."""
    o=_q(480,300,15); xs=[24+36*i for i in range(13)]; ht,hb=118,240
    o.append(T(12,24,"Outside the cell",fill=MUT,font_size="14")+T(12,290,"Inside the cell",fill=MUT,font_size="14"))
    tail=lambda x,y1,y2:'<line x1="%s" y1="%s" x2="%s" y2="%s" stroke="%s" stroke-width="2"/>'%(x,y1,x,y2,MUT)
    for i,x in enumerate(xs):
        o.append(tail(x-4,hb-9,hb-58)+tail(x+4,hb-9,hb-58)+'<circle cx="%s" cy="%s" r="9" fill="#f3f5f9" stroke="%s" stroke-width="1.4"/>'%(x,hb,FG))
        if i==4:
            g=[[(-yy,xx) for xx,yy in pts] for pts in _rings(8)]; top=ht-6  # rotated so the rings run down from the polar end
            X=[p[0] for q in g for p in q]; Y=[p[1] for q in g for p in q]; dx=x-(min(X)+max(X))/2; dy=top+6-min(Y)
            o.append('<circle cx="%s" cy="%s" r="4" fill="#fdecea" stroke="%s" stroke-width="1.2"/>'%(x,top,FG))
            for pts in g: o.append(_poly(pts,"#dfe7f3",dx,dy,1.3))
            o.append('<line x1="%s" y1="%s" x2="%s" y2="%s" stroke="%s" stroke-width="2"/>'%(x,max(Y)+dy,x,ht+56,MUT))
            continue
        o.append(tail(x-4,ht+9,ht+58)+tail(x+4,ht+9,ht+58)+'<circle cx="%s" cy="%s" r="9" fill="#f3f5f9" stroke="%s" stroke-width="1.4"/>'%(x,ht,FG))
        if i==9:
            for j in range(3):
                cy=ht-27-19*j; o.append('<line x1="%s" y1="%s" x2="%s" y2="%s" stroke="%s" stroke-width="1.6"/>'%(x,cy+10,x,cy+18 if j else ht-9,FG))
                o.append(_poly([(x+9*math.cos(math.radians(30+60*k)),cy+9*math.sin(math.radians(30+60*k))) for k in range(6)],"#fff",sw=1.4))
    for x,y,n,ty in ((xs[1],ht-12,lab[0],60),(xs[4],ht-12,lab[1],60),(xs[9]+12,ht-60,lab[2],None)):
        if ty is None: o.append('<line x1="%s" y1="%s" x2="%s" y2="%s" stroke="%s" stroke-width="1.5"/>'%(x,y,x+22,y-6,MUT)+_num(x+34,y-10,n))
        else: o.append('<line x1="%s" y1="%s" x2="%s" y2="%s" stroke="%s" stroke-width="1.5"/>'%(x,y,x,ty+12,MUT)+_num(x,ty,n))
    o.append('</svg>'); return "".join(o)

def _put(x,y,s,anchor="middle",col=FG,bold=True,fs="15"):
    """Text, or a numbered badge when s is an int."""
    return _num(x,y-5,s) if isinstance(s,int) else T(x,y,s,text_anchor=anchor,fill=col,font_weight="600" if bold else "400",font_size=fs)
def _arr(x1,y1,x2,y2,m="m5a",col=FG,dash=False):
    return '<line x1="%s" y1="%s" x2="%s" y2="%s" stroke="%s" stroke-width="2"%s marker-end="url(#%s)"/>'%(x1,y1,x2,y2,col,' stroke-dasharray="6 4"' if dash else "",m)

# ---------- L2: where glycerol and fatty acids go after lipolysis ----------
def q_lipo(proc="Lipolysis",liver=1):
    o=_q(480,250,15)+[_ah("m5a",FG)]; box=lambda x,y,w,h:'<rect x="%s" y="%s" width="%s" height="%s" rx="8" fill="#f3f5f9" stroke="%s" stroke-width="1.4"/>'%(x,y,w,h,FG)
    o.append(T(80,28,"FAT CELL",text_anchor="middle",fill=ACC,font_weight="700",font_size="14")+box(14,40,132,44)+T(80,67,"Triglyceride",text_anchor="middle",fill=FG,font_weight="600"))
    o.append(_arr(80,86,80,124)+_put(92,110,proc,"start",ACC,False,"14"))
    o.append(T(80,146,"Glycerol",text_anchor="middle",fill=FG,font_weight="600")+T(80,206,"Fatty acids",text_anchor="middle",fill=FG,font_weight="600"))
    o.append(T(80,180,"+",text_anchor="middle",fill=FG,font_weight="700",font_size="18"))
    o.append(_arr(124,141,262,76)+_arr(130,201,262,201))
    o.append(box(270,24,196,96)+(_num(368,48,liver) if isinstance(liver,int) else T(368,52,liver,text_anchor="middle",fill=ACC,font_weight="700",font_size="14")))
    o.append(T(368,82,"Phosphorylated, then",text_anchor="middle",fill=FG,font_size="14")+T(368,102,"pyruvate or glucose",text_anchor="middle",fill=FG,font_size="14"))
    o.append(box(270,164,196,72)+T(368,190,"OTHER TISSUES",text_anchor="middle",fill=ACC,font_weight="700",font_size="14")+T(368,216,"Acetyl CoA",text_anchor="middle",fill=FG,font_size="14"))
    o.append(T(196,224,"on albumin",text_anchor="middle",fill=MUT,font_size="14"))
    o.append('</svg>'); return "".join(o)

# ---------- L2: carnitine shuttle ----------
def q_shut(e=(1,2,3)):
    """Outer side (top): acyl CoA + carnitine -> acyl carnitine + CoA by e[0]. Translocase e[1] in the inner membrane.
    Matrix (bottom): acyl carnitine + CoA -> acyl CoA + carnitine by e[2]; carnitine returns (dashed). Numbers draw badges."""
    o=_q(480,330,15)+[_ah("m5a",FG)]; xl,xr,yt,yb=104,360,58,272
    o.append(T(12,22,"Intermembrane space",fill=MUT,font_size="14")+T(12,322,"Matrix",fill=MUT,font_size="14"))
    o.append('<rect x="0" y="140" width="480" height="50" fill="#f3f5f9"/><line x1="0" y1="140" x2="480" y2="140" stroke="%s"/><line x1="0" y1="190" x2="480" y2="190" stroke="%s"/>'%(LINE,LINE))
    o.append(T(124,170,"Inner membrane",fill=MUT,font_size="13"))
    for y,a,b in ((yt,("Acyl CoA","+ carnitine"),("Acyl carnitine","+ CoA")),(yb,("Acyl CoA","+ carnitine"),("Acyl carnitine","+ CoA"))):
        for x,(l1,l2) in ((xl,a),(xr,b)):
            o.append(T(x,y,l1,text_anchor="middle",fill=FG,font_weight="600")+T(x,y+19,l2,text_anchor="middle",fill=MUT,font_size="14"))
    o.append(_arr(xl+62,yt-5,xr-68,yt-5)+_arr(xr-68,yb-5,xl+62,yb-5))
    for (y,s) in ((yt+20,e[0]),(yb-30,e[2])):
        if isinstance(s,int): o.append(_num(232,y,s))
        else: o.append("".join(T(232,y-4+17*j,w,text_anchor="middle",fill=ACC,font_size="14") for j,w in enumerate(s.split("|"))))
    o.append('<rect x="%s" y="132" width="96" height="66" rx="12" fill="#fff" stroke="%s" stroke-width="1.6"/>'%(xr-48,FG))
    o.append(_num(xr,165,e[1]) if isinstance(e[1],int) else T(xr,170,e[1],text_anchor="middle",fill=ACC,font_size="14"))
    o.append(_arr(xr,yt+26,xr,130)+_arr(xr,200,xr,yb-20))
    o.append(_arr(xl,yb-22,xl,yt+30,dash=True)+T(xl+10,226,"carnitine",fill=MUT,font_size="14"))
    o.append('</svg>'); return "".join(o)

# ---------- L2: beta oxidation, four steps ----------
BETA_N=(("Oxidation","acyl-CoA dehydrogenase"),("Hydration","enoyl-CoA hydratase"),("Oxidation","hydroxyacyl-CoA dehydrogenase"),("Thiolysis","thiolase"))
BETA_S=(("FAD","FADH₂"),("H₂O",),("NAD⁺","NADH"),("CoA","Acetyl CoA"))
BETA_R=("Fatty acyl CoA","Double bond formed","Hydroxyl group added","Carbonyl group formed","Acyl CoA, 2 carbons shorter")
def q_beta(names=BETA_N,side=BETA_S,rows=BETA_R):
    """One round, top to bottom. names: (step, enzyme), enzyme as a number draws a badge. side per step: (in,out) curve, (in,)
    joining arrow or None; a number draws a badge. The dashed line back to the top is the next round. L3 elongation reuses it."""
    o=_q(480,384,16)+[_ah("bo",FG),_ah("bs",MUT)]; cx=262; p=84
    for i,r in enumerate(rows):
        y=30+i*p; o.append(T(cx,y,r,text_anchor="middle",fill=FG,font_weight="600"))
        if i==4: break
        y1,y2=y+9,y+p-20; ym=(y1+y2)/2
        o.append('<line x1="%s" y1="%s" x2="%s" y2="%s" stroke="%s" stroke-width="2" marker-end="url(#bo)"/>'%(cx,y1,cx,y2,FG))
        st,en=names[i]; o.append(T(cx-14,ym-3,st,text_anchor="end",fill=ACC,font_weight="700",font_size="15"))
        o.append(_num(cx-30,ym+14,en) if isinstance(en,int) else T(cx-14,ym+15,en,text_anchor="end",fill=FG,font_size="14"))
        sd=side[i]
        lab=lambda x,y,s:_num(x+12,y-5,s) if isinstance(s,int) else T(x,y,s,fill=MUT,font_size="14")
        if sd is None: continue
        if len(sd)==2:
            o.append('<path d="M%s %s Q%s %s %s %s" fill="none" stroke="%s" stroke-width="1.5" marker-end="url(#bs)"/>'%(cx+62,ym-9,cx+8,ym,cx+62,ym+11,MUT))
            o.append(lab(cx+68,ym-5,sd[0])+lab(cx+68,ym+16,sd[1]))
        else:
            o.append('<path d="M%s %s Q%s %s %s %s" fill="none" stroke="%s" stroke-width="1.5" marker-end="url(#bs)"/>'%(cx+62,ym-6,cx+30,ym-6,cx+8,ym+6,MUT)+lab(cx+68,ym-1,sd[0]))
    yl=30+4*p
    o.append('<path d="M%s %s H468 V25 H%s" fill="none" stroke="%s" stroke-width="1.6" stroke-dasharray="6 4" marker-end="url(#bo)"/>'%(cx+104,yl-5,cx+68,MUT))
    o.append('</svg>'); return "".join(o)

# ---------- L2: ketone bodies, liver to blood to other tissues ----------
def q_keto(hdr=("Liver","Blood","Other tissues"),ac="Acetone"):
    o=_q(480,320,15)+[_ah("m5a",FG)]; xs=(82,240,398)
    for i,x in enumerate(xs):
        o.append('<rect x="%s" y="40" width="152" height="270" rx="8" fill="#f3f5f9" stroke="%s"/>'%(x-76,LINE))
        h=hdr[i]; o.append(_num(x,24,h) if isinstance(h,int) else T(x,28,h.upper(),text_anchor="middle",fill=ACC,font_weight="700",font_size="14"))
    t=lambda x,y,s:T(x,y,s,text_anchor="middle",fill=FG,font_weight="600")
    o.append(t(xs[0],80,"Fatty acids")+_arr(xs[0],88,xs[0],140)+t(xs[0],160,"Acetyl CoA")+_arr(xs[0],168,xs[0],222)+t(xs[0],242,"Ketone bodies"))
    o.append(t(xs[1],242,"Ketone bodies")+_arr(xs[1],226,xs[1],178)+(_num(xs[1],160,ac) if isinstance(ac,int) else t(xs[1],164,ac))+_arr(xs[1],146,xs[1],98)+t(xs[1],80,"Lungs, urine"))
    o.append(_arr(xs[0]+62,237,xs[1]-62,237)+_arr(xs[1]+62,237,xs[2]-62,237))
    o.append(t(xs[2],242,"Ketone bodies")+_arr(xs[2],226,xs[2],178)+t(xs[2],164,"Acetyl CoA")+_arr(xs[2],146,xs[2],98)+t(xs[2],80,"Citric acid cycle"))
    o.append('</svg>'); return "".join(o)

# ---------- L3: citrate-malate shuttle ----------
def q_cit(cit=1,enz=2,nadph=3):
    """Mitochondrion (left) and cytosol (right). Citrate crosses out, ATP-citrate lyase splits it, oxaloacetate goes to malate
    (NADPH) and back in (dashed). cit, enz, nadph: a number draws a badge (cit blanks both citrates)."""
    o=_q(480,300,15)+[_ah("m5a",FG),_ah("m5s",MUT)]; xm,xc=100,300
    o.append(T(xm,24,"MITOCHONDRION",text_anchor="middle",fill=ACC,font_weight="700",font_size="14")+T(xc+40,24,"CYTOSOL",text_anchor="middle",fill=ACC,font_weight="700",font_size="14"))
    o.append('<rect x="174" y="36" width="30" height="256" fill="#f3f5f9"/><line x1="174" y1="36" x2="174" y2="292" stroke="%s"/><line x1="204" y1="36" x2="204" y2="292" stroke="%s"/>'%(LINE,LINE))
    t=lambda x,y,s:T(x,y,s,text_anchor="middle",fill=FG,font_weight="600")
    c=lambda x,y:(_blank(x-44,y-18,88,26,"")+_num(x,y-5,cit)) if isinstance(cit,int) else t(x,y,cit)
    o.append(c(xm,78)+c(xc,78)+_arr(xm+48,73,xc-50,73))
    o.append(t(xm,252,"Oxaloacetate")+_arr(xm,234,xm,94))
    o.append('<path d="M%s 172 Q%s 166 %s 152" fill="none" stroke="%s" stroke-width="1.5" marker-end="url(#m5s)"/>'%(xm-60,xm-22,xm-4,MUT)+T(8,186,"Acetyl CoA",fill=MUT,font_size="14"))
    o.append(_arr(xc,92,xc,148))
    o.append('<path d="M%s 112 Q%s 112 %s 124" fill="none" stroke="%s" stroke-width="1.5" marker-end="url(#m5s)"/>'%(xc-46,xc-16,xc-4,MUT)+T(xc-50,117,"ATP",text_anchor="end",fill=MUT,font_size="14"))
    o.append(_num(xc+30,120,enz) if isinstance(enz,int) else "".join(T(xc+14,116+17*j,w,fill=ACC,font_size="14") for j,w in enumerate(enz.split("|"))))
    o.append(t(xc,168,"Oxaloacetate")+T(xc+56,168,"+ acetyl CoA",fill=FG,font_size="14"))
    o.append(_arr(xc,176,xc,232)+t(xc,252,"Malate"))
    o.append('<path d="M%s 196 Q%s 210 %s 220" fill="none" stroke="%s" stroke-width="1.5" marker-end="url(#m5s)"/>'%(xc+4,xc+30,xc+60,MUT))
    o.append(_num(xc+76,222,nadph) if isinstance(nadph,int) else T(xc+66,226,nadph,fill=MUT,font_size="14"))
    o.append(_arr(xc-30,247,xm+52,247,dash=True))
    o.append('</svg>'); return "".join(o)

# ---------- L3: acetyl CoA to malonyl CoA ----------
def q_acc(enz=1,bic="HCO₃⁻"):
    """Acetyl CoA -> malonyl CoA with ATP and bicarbonate in, ADP + Pi out, enzyme in a box under the arrow. Numbers draw badges."""
    o=_q(480,190,15)+[_ah("m5a",FG),_ah("m5s",MUT)]; y=96
    o.append(T(66,y+5,"Acetyl CoA",text_anchor="middle",fill=FG,font_weight="600")+T(414,y+5,"Malonyl CoA",text_anchor="middle",fill=FG,font_weight="600"))
    o.append(_arr(124,y,350,y))
    o.append('<path d="M170 52 Q186 %s 212 %s" fill="none" stroke="%s" stroke-width="1.5" marker-end="url(#m5s)"/>'%(y,y-4,MUT))
    o.append(T(150,44,"ATP",fill=MUT,font_size="14")+T(186,44,"+",fill=MUT,font_size="14")+(_num(218,39,bic) if isinstance(bic,int) else T(204,44,bic,fill=MUT,font_size="14")))
    o.append('<path d="M262 %s Q292 %s 306 52" fill="none" stroke="%s" stroke-width="1.5" marker-end="url(#m5s)"/>'%(y-4,y,MUT)+T(292,44,"ADP + Pᵢ",fill=MUT,font_size="14"))
    o.append('<rect x="160" y="114" width="160" height="50" rx="6" fill="#eaf3ec" stroke="%s" stroke-width="1.4"/>'%FG)
    o.append(_num(240,139,enz) if isinstance(enz,int) else T(240,135,"Acetyl-CoA",text_anchor="middle",fill=FG,font_size="14")+T(240,153,"carboxylase 1",text_anchor="middle",fill=FG,font_size="14"))
    o.append('</svg>'); return "".join(o)

# ---------- L3: degradation and synthesis side by side ----------
VS_R=("Location","Crosses the|mitochondrial|membrane as","Electron|carriers","Key regulatory|enzyme")
VS_D=("Mitochondria","Acyl carnitine","FAD, NAD⁺|reduced","Carnitine acyl-|transferase I")
VS_S=("Cytosol","Citrate","NADPH|used","Acetyl-CoA|carboxylase 1")
def q_vs(deg=VS_D,syn=VS_S):
    """Grid: row labels, degradation column, synthesis column. "|" breaks a line; a number draws a badge."""
    rh=66; o=_q(480,44+rh*len(VS_R),14); xs=(70,226,384)
    o.append(T(xs[1],26,"DEGRADATION",text_anchor="middle",fill=ACC,font_weight="700")+T(xs[2],26,"SYNTHESIS",text_anchor="middle",fill=ACC,font_weight="700"))
    for i,lab in enumerate(VS_R):
        y0=38+i*rh; o.append('<line x1="0" y1="%s" x2="480" y2="%s" stroke="%s"/>'%(y0,y0,LINE))
        for x,s,col,b in ((xs[0],lab,MUT,False),(xs[1],deg[i],FG,True),(xs[2],syn[i],FG,True)):
            if isinstance(s,int): o.append(_blank(x-60,y0+rh/2-14,120,28,"")+_num(x,y0+rh/2,s)); continue
            ls=s.split("|"); yy=y0+rh/2+5-8.5*(len(ls)-1)
            o.append("".join(T(x,yy+17*j,w,text_anchor="middle",fill=col,font_weight="600" if b else "400",font_size="14") for j,w in enumerate(ls)))
    o.append('</svg>'); return "".join(o)

# ---------- L4: phosphatidate and where it branches ----------
def q_pab(gk="glycerol kinase",pa="Phosphatidate",pap="phosphatidic acid phosphatase",tag="Triacylglycerol",card="Cardiolipin,|phosphatidylinositol"):
    """Glycerol -> G3P -> phosphatidate; phosphatidate activated directly (right) or to diacylglycerol by PAP (down), then
    triacylglycerol or phosphatidylcholine. Any argument as a number draws a badge (molecules get a dashed box)."""
    o=_q(480,352,15)+[_ah("m5a",FG),_ah("m5s",MUT)]; x=150
    t=lambda x,y,s:T(x,y,s,text_anchor="middle",fill=FG,font_weight="600")
    mol=lambda x,y,s,w=124:(_blank(x-w/2,y-18,w,26,"")+_num(x,y-5,s)) if isinstance(s,int) else "".join(t(x,y+17*j-8.5*(len(s.split("|"))-1),w_) for j,w_ in enumerate(s.split("|")))
    enz=lambda y,s:_num(x+28,y-6,s) if isinstance(s,int) else T(x+14,y,s,fill=ACC,font_size="14")
    join=lambda y,s:'<path d="M96 %s Q130 %s %s %s" fill="none" stroke="%s" stroke-width="1.5" marker-end="url(#m5s)"/>'%(y,y,x-4,y+14,MUT)+T(92,y+5,s,text_anchor="end",fill=MUT,font_size="14")
    o.append(t(x,30,"Glycerol")+_arr(x,40,x,88)+enz(70,gk)+join(56,"ATP"))
    o.append(t(x,110,"Glycerol-3-phosphate")+_arr(x,120,x,168)+enz(150,"acyl transferase ×2")+join(136,"2 acyl CoA"))
    o.append(mol(x,190,pa)+_arr(x,202,x,248)+enz(230,pap))
    o.append(_arr(x+66,185,316,185)+T(266,177,"activated",text_anchor="middle",fill=MUT,font_size="13")+mol(392,190,card,140))
    o.append(t(x,270,"Diacylglycerol"))
    o.append(_arr(x-24,280,x-54,316)+T(10,300,"+ acyl CoA",fill=MUT,font_size="14")+mol(80,338,tag))
    o.append(_arr(x+24,280,290,316)+T(244,290,"+ activated alcohol",fill=MUT,font_size="14")+t(354,338,"Phosphatidylcholine"))
    o.append('</svg>'); return "".join(o)

# ---------- L4: ceramide and the sphingolipids made from it ----------
def q_cer(cer="Ceramide",sm="Sphingomyelin",gsl="Glycosphingolipids"):
    o=_q(480,222,15)+[_ah("m5a",FG)]; x=240
    t=lambda x,y,s:(_blank(x-64,y-18,128,26,"")+_num(x,y-5,s)) if isinstance(s,int) else T(x,y,s,text_anchor="middle",fill=FG,font_weight="600")
    o.append(t(x,34,"Palmitoyl CoA + serine")+_arr(x,44,x,90)+t(x,112,cer))
    o.append(_arr(x-30,124,130,176)+T(150,140,"+ phosphorylcholine",text_anchor="end",fill=MUT,font_size="14")+t(110,200,sm))
    o.append(_arr(x+30,124,350,176)+T(322,146,"+ sugar",fill=MUT,font_size="14")+t(370,200,gsl))
    o.append('</svg>'); return "".join(o)

figs={
 # ---- L1 ----
 "q-fis3":q_sugars(["glucose","glyceraldehyde","ribose"],[1,2,3]),
 "q-sugars3":q_sugars(["galactose","fructose","glucose"],[1,2,3]),
 "q-triose":q_sugars(["glyceraldehyde","dihydroxyacetone"],["A","B"]),
 "q-dl":q_sugars(["glucose","glucose"],["A","B"],mirror=(1,)),
 "q-disacc":q_disacc(),
 "q-lact":q_lact(),
 # ---- L2 ----
 # all ten steps, no enzyme names or cofactors, five lettered steps (1, 3, 4, 7, 10)
 "q-gly10":ladder(1,10,enz=False,side=False,nums=False,marks={1:"A",3:"B",4:"C",7:"D",10:"E"},pitch=50),
 # Phase I with one enzyme blanked
 "q-ph1-e3":ladder(1,5,blank_enz=(3,)),
 # Phase I with the step 1 product blanked
 "q-ph1-r1":ladder(1,5,blank_row=(1,)),
 # phase summary with the phases numbered instead of named
 "q-phases":q_phases(phase=(1,2)),
 "q-resp":q_resp(),
 "q-hkgk":q_hkgk(),
 "q-pfk":q_pfk(),
 # ---- L3 ----
 "q-ph2-r1":ladder(6,10,blank_row=(6,),pitch=68),
 "q-ph2-e10":ladder(6,10,blank_enz=(10,),pitch=68),
 "q-ph2-atp":ladder(6,10,enz=False,side=False,nums=False,marks={6:"A",7:"B",9:"C",10:"D"},pitch=62),
 "q-pk-a":q_pk(act=(1,"PEP")),
 "q-pk-i":q_pk(inh=("ATP","citrate",1)),
 "q-fork":q_fork(),
 "q-pdh":q_pdh(),
 "q-nadloop":q_nadloop(1),
 # ---- L4 ----
 "q-glybond":q_glybond(1,2),
 "q-horm-p":q_horm(proc=(1,2)),
 "q-horm-h":q_horm(hor=(1,2)),
 "q-gsrc-s":q_gsrc(states=(1,2,3)),
 "q-gsrc-c":q_gsrc(curves=("A","B","C")),
 # glycogenesis through q_pdh's step layout (rows or the step 3 enzyme blanked)
 "q-gen-r":q_pdh(side=(None,("UTP",),None),rows=("Glucose 6-phosphate",1,2,"Glycogen"),names=("Phosphoglucomutase","","Glycogen synthase")),
 "q-gen-e":q_pdh(side=(None,("UTP",),None),rows=("Glucose 6-phosphate","Glucose 1-phosphate","UDP-glucose","Glycogen"),names=("Phosphoglucomutase","",1)),
 "q-tissue":q_tissue(e=(1,"Phosphoglucomutase",2)),
 # ---- L5 ----
 "q-loop":q_loop(),
 "q-bypass":q_bypass(),
 "q-pepck":q_reg(("Oxalo-","acetate"),("Phosphoenol-","pyruvate"),(),("Glucagon",)),
 # ================= M5 L1 =================
 # A trans, B saturated, C omega-3 (cis at 9, 12, 15), D cis monounsaturated
 "q-fa4":q_fa(),
 "q-tg":q_tg(),
 "q-cplx":q_cplx(),
 "q-cplx-s":q_cplx(heads=("Glycero-|phospholipid","Sphingo-|phospholipid","Glycolipid"),sugar=1),
 "q-ster":q_ster(),
 "q-mem":q_mem(),
 # ================= M5 L2 =================
 # three stages through q_pdh's step layout, stages numbered
 "q-stage":q_pdh(side=(("","Glycerol"),("ATP","AMP + PPᵢ"),None),rows=("Triglyceride","Free fatty acids","Acyl CoA","Acetyl CoA"),names=(1,2,3)),
 "q-lipo":q_lipo(),
 "q-shut":q_shut(),
 "q-beta-e":q_beta(names=tuple((s,i+1) for i,(s,_) in enumerate(BETA_N))),
 "q-beta-s":q_beta(side=(("FAD",1),("H₂O",),("NAD⁺",2),("CoA","Acetyl CoA"))),
 "q-keto":q_keto(hdr=(1,"Blood","Other tissues")),
 "q-keto-a":q_keto(ac=1),
 # ================= M5 L3 =================
 "q-cit":q_cit(),
 "q-acc":q_acc(),
 # synthesis in three stages through q_pdh's step layout, stages numbered
 "q-syn":q_pdh(side=(("ATP",),("ATP + HCO₃⁻",),("NADPH",)),rows=("Acetyl CoA, mitochondria","Acetyl CoA, cytosol","Malonyl CoA","Palmitate"),names=(1,2,3)),
 # elongation through q_beta's round layout, reactions numbered
 "q-elong":q_beta(names=(("",1),("",2),("",3),("",4)),side=(("Malonyl CoA",),None,None,None),rows=("Acetyl CoA","","","","Chain 2 carbons longer")),
 "q-vs":q_vs(deg=("Mitochondria","Acyl carnitine",2,"Carnitine acyl-|transferase I"),syn=("Cytosol","Citrate","NADPH|used",1)),
 # ================= M5 L4 =================
 "q-pa-e":q_pab(gk=1,pap=2),
 "q-pa-m":q_pab(pa=1,tag=2,card=3),
 "q-cer":q_cer(cer=1,sm=2),
}
here=os.path.dirname(os.path.abspath(__file__))
open(os.path.join(here,"figs.js"),"w",encoding="utf-8").write("const FIGS="+json.dumps(figs,ensure_ascii=False)+";\n")
for k,v in figs.items(): open("/tmp/fig_%s.svg"%k,"w",encoding="utf-8").write(v)
print("ok",len(figs),"figures")
