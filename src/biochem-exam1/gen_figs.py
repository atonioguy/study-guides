# Generates figs.js (static SVG figures). Run: python3 gen_figs.py
import math, json, os
FG="#1c1c1c"; MUT="#666"; ACC="#1f4b8f"; OIL="#b8860b"; LINE="#ccc"
T=lambda x,y,s,**k: f'<text x="{x:.1f}" y="{y:.1f}" {" ".join(f"{a.replace("_","-")}=\"{b}\"" for a,b in k.items())}>{s}</text>'

def hydro():
    o=['<svg viewBox="0 0 660 270" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif" font-size="13">',
       f'<rect x="0" y="0" width="660" height="270" fill="#fff"/>']
    def water(x,y,ordered=True):
        if ordered: return f'<circle cx="{x:.1f}" cy="{y:.1f}" r="5.5" fill="{ACC}"/>'
        return f'<circle cx="{x:.1f}" cy="{y:.1f}" r="5.5" fill="none" stroke="{ACC}" stroke-width="1.6"/>'
    # left: 3 dispersed oil molecules each caged
    for cx,cy in [(70,95),(190,80),(130,185)]:
        o.append(f'<circle cx="{cx}" cy="{cy}" r="17" fill="{OIL}"/>')
        for i in range(9):
            a=2*math.pi*i/9; o.append(water(cx+31*math.cos(a),cy+31*math.sin(a)))
    for x,y in [(255,170),(30,200),(240,240)]: o.append(water(x,y,False))
    o.append(T(140,258,"Dispersed: one cage per molecule",text_anchor="middle",fill=FG))
    o.append(f'<path d="M300 135 H350" stroke="{FG}" stroke-width="2" marker-end="url(#ah)"/>')
    o.append(f'<defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="{FG}"/></marker></defs>')
    # right: cluster
    cx,cy=500,130
    for dx,dy in [(-16,-9),(16,-9),(0,18)]: o.append(f'<circle cx="{cx+dx}" cy="{cy+dy}" r="17" fill="{OIL}"/>')
    for i in range(14):
        a=2*math.pi*i/14; o.append(water(cx+48*math.cos(a),cy+3+46*math.sin(a)))
    for x,y in [(400,50),(420,215),(600,45),(615,200),(380,140),(630,120),(560,235),(450,30),(540,25),(470,240),(610,250),(395,245),(640,60)]:
        o.append(water(x,y,False))
    o.append(T(510,258,"Clustered: fewer caged waters",text_anchor="middle",fill=FG))
    # legend
    o.append(f'<circle cx="18" cy="18" r="5.5" fill="{ACC}"/>'+T(30,22,"ordered (caged) water",fill=MUT))
    o.append(f'<circle cx="190" cy="18" r="5.5" fill="none" stroke="{ACC}" stroke-width="1.6"/>'+T(202,22,"free water",fill=MUT))
    o.append(f'<circle cx="300" cy="18" r="7" fill="{OIL}"/>'+T(312,22,"nonpolar molecule",fill=MUT))
    o.append(T(325,62,"entropy ↑",text_anchor="middle",fill=FG,font_weight="600"))
    o.append('</svg>'); return "".join(o)

def bicarb():
    o=['<svg viewBox="0 0 660 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif" font-size="14">',
       '<rect width="660" height="250" fill="#fff"/>',
       f'<defs><marker id="bh" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="{ACC}"/></marker></defs>']
    eq='CO<tspan dy="4" font-size="11">2</tspan><tspan dy="-4"> + H</tspan><tspan dy="4" font-size="11">2</tspan><tspan dy="-4">O  ⇌  H</tspan><tspan dy="4" font-size="11">2</tspan><tspan dy="-4">CO</tspan><tspan dy="4" font-size="11">3</tspan><tspan dy="-4">  ⇌  H</tspan><tspan dy="-6" font-size="11">+</tspan><tspan dy="6"> + HCO</tspan><tspan dy="4" font-size="11">3</tspan><tspan dy="-10" font-size="11">−</tspan>'
    o.append(f'<text x="330" y="48" text-anchor="middle" font-size="22" fill="{FG}">{eq}</text>')
    o.append(T(140,78,"exhaled by lungs",text_anchor="middle",fill=MUT,font_size="12"))
    o.append(T(330,78,"carbonic acid (weak)",text_anchor="middle",fill=MUT,font_size="12"))
    o.append(T(520,78,"sets pH · base reserve",text_anchor="middle",fill=MUT,font_size="12"))
    # left box
    o.append(f'<path d="M300 108 H40" stroke="{ACC}" stroke-width="2.5" marker-end="url(#bh)"/>')
    o.append(T(40,100,"Shifts left: H⁺ used up",fill=ACC,font_weight="600"))
    for i,s in enumerate(["• CO₂ blown off (fast breathing)","• H⁺ added (lactic, keto acids) is","  absorbed by HCO₃⁻, leaves as CO₂"]):
        o.append(T(40,132+i*20,s,fill=FG))
    o.append(f'<path d="M360 108 H620" stroke="{ACC}" stroke-width="2.5" marker-end="url(#bh)"/>')
    o.append(T(620,100,"Shifts right: H⁺ made",fill=ACC,font_weight="600",text_anchor="end"))
    for i,s in enumerate(["• CO₂ retained (slow breathing)","• H⁺ lost (vomiting) or","  HCO₃⁻ lost (diarrhea) is replaced"]):
        o.append(T(360,132+i*20,s,fill=FG))
    o.append(f'<line x1="20" y1="205" x2="640" y2="205" stroke="{LINE}"/>')
    o.append(T(330,230,"pH 7.4 = 6.1 + log(20)  →  normal HCO₃⁻ : H₂CO₃ = 20 : 1.  Ratio up = pH up.",text_anchor="middle",fill=FG))
    o.append('</svg>'); return "".join(o)

def titr():
    W,H=560,300; L,R,TOP,B=50,530,20,260
    pKa=4.8
    def ph(v):  # v = mL base, eq at 10
        if v<=0.05: return 2.9
        if v<10: f=v/10; return max(2.9,pKa+math.log10(f/(1-f)))
        ex=(v-10)*0.01/30+1e-7; return min(12.6,14+math.log10(ex)) if ex>1e-7 else 8.7
    pts=[]
    vs=[i*0.05 for i in range(0,401)]
    for v in vs:
        y=ph(v)
        if 9.9<v<10.2: y=max(ph(9.9),min(ph(10.2),y))
        pts.append((L+(R-L)*v/20, B-(B-TOP)*y/14))
    o=[f'<svg viewBox="0 0 {W} {H+20}" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif" font-size="13">',f'<rect width="{W}" height="{H+20}" fill="#fff"/>']
    for p in range(0,15,2):
        y=B-(B-TOP)*p/14; o.append(f'<line x1="{L}" y1="{y:.1f}" x2="{R}" y2="{y:.1f}" stroke="#eee"/>'+T(L-8,y+4,p,text_anchor="end",fill=MUT))
    o.append(f'<line x1="{L}" y1="{B}" x2="{R}" y2="{B}" stroke="{FG}"/><line x1="{L}" y1="{TOP}" x2="{L}" y2="{B}" stroke="{FG}"/>')
    o.append(f'<polyline fill="none" stroke="{ACC}" stroke-width="2.5" points="{" ".join(f"{x:.1f},{y:.1f}" for x,y in pts)}"/>')
    for lab,v in [("A",0.3),("B",5),("C",9.7),("D",17)]:
        x=L+(R-L)*v/20; y=B-(B-TOP)*ph(v)/14
        o.append(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="5" fill="{FG}"/>'+T(x-12 if lab!="A" else x+8,y-10,lab,fill=FG,font_weight="600"))
    o.append(T((L+R)/2,H+10,"base added →",text_anchor="middle",fill=MUT))
    o.append(T(14,(TOP+B)/2,"pH",fill=MUT,transform=f"rotate(-90 14 {(TOP+B)/2})",text_anchor="middle"))
    o.append('</svg>'); return "".join(o)


def classes():
    o=['<svg viewBox="0 0 680 210" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif" font-size="13">','<rect width="680" height="210" fill="#fff"/>']
    def hexa(cx,cy,r=13):
        pts=" ".join(f"{cx+r*math.cos(math.pi/6+k*math.pi/3):.1f},{cy+r*math.sin(math.pi/6+k*math.pi/3):.1f}" for k in range(6))
        return f'<polygon points="{pts}" fill="#e6c87a" stroke="{FG}" stroke-width="1.2"/>'
    # carb
    xs=[30,62,94,126]
    for i in range(3): o.append(f'<line x1="{xs[i]+13}" y1="70" x2="{xs[i+1]-13}" y2="70" stroke="{FG}" stroke-width="2"/>')
    o.append(f'<line x1="94" y1="83" x2="94" y2="104" stroke="{FG}" stroke-width="2"/><line x1="105" y1="117" x2="122" y2="117" stroke="{FG}" stroke-width="2"/>')
    for x in xs: o.append(hexa(x,70))
    o.append(hexa(94,117));o.append(hexa(135,117))
    # lipid
    o.append(f'<rect x="200" y="45" width="26" height="90" rx="4" fill="#cfd8e6" stroke="{FG}" stroke-width="1.2"/>')
    o.append(T(213,150,"glycerol",text_anchor="middle",fill=MUT,font_size="11"))
    for k,y in enumerate([58,90,122]):
        pts=" ".join(f"{230+i*12},{y+(5 if i%2 else -5)}" for i in range(9))
        o.append(f'<polyline points="{pts}" fill="none" stroke="{OIL}" stroke-width="3"/>')
    # protein beads: serpentine fold, hydrophobic row buried in the middle
    pts=[]
    for r,y in enumerate([55,90,125]):
        xs=[350+k*16 for k in range(7)]
        if r%2: xs=xs[::-1]
        pts+= [(x,y,r==1) for x in xs]
    o.append(f'<polyline points="{" ".join(f"{x},{y}" for x,y,_ in pts)}" fill="none" stroke="{FG}" stroke-width="1.5"/>')
    for x,y,hyd in pts: o.append(f'<circle cx="{x}" cy="{y}" r="7" fill="{OIL if hyd else "#fff"}" stroke="{FG}" stroke-width="1.2"/>')
    o.append(T(400,150,"hydrophobic R groups tucked inside",text_anchor="middle",fill=MUT,font_size="11"))
    # nucleic
    for i in range(4):
        y=40+i*30
        o.append(f'<circle cx="540" cy="{y}" r="6" fill="#fff" stroke="{FG}" stroke-width="1.2"/>')
        if i<3: o.append(f'<line x1="540" y1="{y+6}" x2="540" y2="{y+24}" stroke="{FG}" stroke-width="2"/>')
        o.append(f'<polygon points="{548},{y+8} {566},{y+3} {574},{y+15} {562},{y+26} {548},{y+21}" fill="#cfd8e6" stroke="{FG}" stroke-width="1.2"/>')
        o.append(f'<line x1="574" y1="{y+15}" x2="592" y2="{y+15}" stroke="{FG}" stroke-width="1.5"/><rect x="592" y="{y+7}" width="34" height="16" rx="3" fill="{ACC}"/>')
        o.append(T(609,y+19,"ATGC"[i],text_anchor="middle",fill="#fff",font_size="11",font_weight="600"))
    labs=[(85,"Carbohydrate","glycosidic bonds","branched sugar chains"),(255,"Lipid","ester bonds","no repeating unit"),(400,"Protein","peptide bonds","unbranched chain folds"),(585,"Nucleic acid","phosphodiester bonds","sugar–phosphate backbone")]
    for x,a,b,c in labs:
        o.append(T(x,176,a,text_anchor="middle",fill=FG,font_weight="600",font_size="14"))
        o.append(T(x,194,b,text_anchor="middle",fill=ACC,font_size="12"))
        o.append(T(x,22,c,text_anchor="middle",fill=MUT,font_size="12"))
    o.append('</svg>');return "".join(o)

def water():
    o=['<svg viewBox="0 0 520 170" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif" font-size="14">','<rect width="520" height="170" fill="#fff"/>']
    ox,oy=140,70
    for hx,hy in [(95,125),(185,125)]:
        o.append(f'<line x1="{ox}" y1="{oy}" x2="{hx}" y2="{hy}" stroke="{FG}" stroke-width="5"/>')
        o.append(f'<circle cx="{hx}" cy="{hy}" r="17" fill="#fff" stroke="{FG}" stroke-width="1.5"/>'+T(hx,hy+5,"H",text_anchor="middle",fill=FG,font_weight="600"))
        o.append(T(hx+(-22 if hx<ox else 22),hy+26,"δ+",text_anchor="middle",fill=ACC,font_weight="600"))
    o.append(f'<circle cx="{ox}" cy="{oy}" r="27" fill="{ACC}"/>'+T(ox,oy+6,"O",text_anchor="middle",fill="#fff",font_weight="600",font_size="18"))
    o.append(T(ox,oy-36,"δ−",text_anchor="middle",fill="#b42318",font_weight="600"))
    # right: ion hydration
    cx,cy=390,85
    o.append(f'<circle cx="{cx}" cy="{cy}" r="16" fill="#e6c87a" stroke="{FG}"/>'+T(cx,cy+5,"Na⁺",text_anchor="middle",fill=FG,font_size="12",font_weight="600"))
    for k in range(6):
        a=k*math.pi/3; x=cx+52*math.cos(a); y=cy+52*math.sin(a)
        o.append(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="11" fill="{ACC}"/>')
        for d in (-0.7,0.7):
            hx=x+16*math.cos(a+d);hy=y+16*math.sin(a+d)
            o.append(f'<circle cx="{hx:.1f}" cy="{hy:.1f}" r="5.5" fill="#fff" stroke="{FG}"/>')
    o.append(T(cx,163,"δ− oxygens face the cation",text_anchor="middle",fill=MUT,font_size="12"))
    o.append(T(140,163,"permanent dipole",text_anchor="middle",fill=MUT,font_size="12"))
    o.append('</svg>');return "".join(o)

def aagrid():
    groups=[("Aliphatic",[("Ala",1),("Gly",0,"!"),("Ile",1),("Leu",1),("Pro",1),("Val",1)]),("Aromatic",[("Phe",1),("Trp",1),("Tyr",1,"!")]),
            ("Acidic (−)",[("Asp",0),("Glu",0)]),("Basic (+)",[("Arg",0),("His",0),("Lys",0)]),("Hydroxylic",[("Ser",0),("Thr",0)]),("Amidic",[("Asn",0),("Gln",0)]),("Sulfur",[("Cys",0,"!"),("Met",1,"!")])]
    h=['<div class="aag">']
    for g,items in groups:
        h.append(f'<div class="aagc"><b>{g}</b>')
        for it in items:
            cls="pho" if it[1] else "phi"
            if len(it)>2: cls+=" ex"
            h.append(f'<span class="{cls}">{it[0]}</span>')
        h.append('</div>')
    h.append('</div><div class="aagl"><span class="pho">hydrophobic</span><span class="phi">hydrophilic</span><span class="phi ex">exception to memorize</span></div>')
    return "".join(h)

def forces():
    rows=[("Ion–dipole",100,"Na⁺ in water; charged side chains"),("Hydrogen bond",72,"DNA strands, water cohesion"),("Dipole–dipole",48,"polar groups lining up"),("van der Waals",22,"all molecules, even nonpolar; gecko feet")]
    h=['<div class="fbars">']
    for n,w,e in rows: h.append(f'<div class="fbr"><span class="fn">{n}</span><span class="fbg"><i style="width:{w}%"></i></span><span class="fe">{e}</span></div>')
    h.append('<div class="fnote">relative strength (illustrative)</div></div>')
    return "".join(h)

def phscale():
    h=['<div class="phs"><div class="phrow">']
    for p in range(15): h.append(f'<span style="background:hsl({int(p*14+5)},55%,{72 if p!=7 else 88}%)">{p}</span>')
    h.append('</div><div class="phlab"><span>more H⁺ · acidic</span><span>neutral 7</span><span>basic · less H⁺</span></div>')
    h.append('<div class="phmk"><span style="left:calc(1.75/15*100%)">stomach ~1.5–2</span><span style="left:calc(7.9/15*100%)">blood 7.4</span></div></div>')
    return "".join(h)

figs={"hydro":hydro(),"bicarb":bicarb(),"titr":titr(),"classes":classes(),"water":water(),"aagrid":aagrid(),"forces":forces(),"phscale":phscale()}
here=os.path.dirname(os.path.abspath(__file__))
open(os.path.join(here,"figs.js"),"w").write("const FIGS="+json.dumps(figs,ensure_ascii=False)+";\n")
for k,v in figs.items():
    if v.startswith("<svg"): open(f"/tmp/fig_{k}.svg","w").write(v)
print("ok")
