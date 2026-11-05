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


def bilayer():
    W,H=680,250
    o=[f'<svg viewBox="0 0 {W} {H}" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif" font-size="13">',f'<rect width="{W}" height="{H}" fill="#fff"/>']
    def lipid(x,y,down,kink):
        d=1 if down else -1
        o.append(f'<circle cx="{x}" cy="{y}" r="8" fill="{ACC}"/>')
        for k,dx in enumerate((-3,3)):
            if kink and k==1:
                pts=f"{x+dx},{y+d*8} {x+dx},{y+d*26} {x+dx+8},{y+d*44}"
            else:
                pts=f"{x+dx},{y+d*8} {x+dx},{y+d*44}"
            o.append(f'<polyline points="{pts}" fill="none" stroke="{OIL}" stroke-width="2.5"/>')
    # left: one phospholipid labelled
    lipid(70,70,True,False)
    o.append(T(88,74,"polar head",fill=FG)+T(88,104,"nonpolar tails",fill=FG))
    o.append(T(70,150,"amphipathic",text_anchor="middle",fill=MUT))
    # middle: bilayer saturated (tight)
    def layer(x0,n,gap,kinks):
        for i in range(n):
            x=x0+i*gap; lipid(x,48,True,kinks and i%2==0); lipid(x,182,False,kinks and i%2==1)
    o.append(f'<rect x="200" y="58" width="200" height="114" fill="#fbf3dd"/>')
    layer(212,8,25,False)
    o.append(f'<rect x="440" y="58" width="220" height="114" fill="#fbf3dd"/>')
    layer(452,7,33,True)
    o.append(T(300,225,"saturated tails: pack tightly",text_anchor="middle",fill=FG))
    o.append(T(550,225,"unsaturated (kinked): looser, more fluid",text_anchor="middle",fill=FG))
    o.append(T(300,20,"water side",text_anchor="middle",fill=MUT)+T(550,20,"water side",text_anchor="middle",fill=MUT))
    o.append(T(300,119,"nonpolar core",text_anchor="middle",fill=MUT,font_size="12"))
    o.append('</svg>');return "".join(o)

def fold():
    W,H=680,230
    o=[f'<svg viewBox="0 0 {W} {H}" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif" font-size="13">',f'<rect width="{W}" height="{H}" fill="#fff"/>',
       '<defs><marker id="fa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#1c1c1c"/></marker></defs>']
    seq="PHPHHPCPHHPCHP"
    def col(c): return OIL if c=="H" else ("#fff" if c=="P" else "#cfd8e6")
    o.append(f'<line x1="30" y1="110" x2="{30+20*(len(seq)-1)}" y2="110" stroke="{FG}" stroke-width="1.5"/>')
    for i,c in enumerate(seq):
        x=30+i*20
        o.append(f'<circle cx="{x}" cy="110" r="8" fill="{col(c)}" stroke="{FG}" stroke-width="1.2"/>')
    o.append(T(160,140,"unfolded chain in water",text_anchor="middle",fill=MUT))
    o.append(f'<path d="M318 110 H372" stroke="{FG}" stroke-width="2" marker-end="url(#fa)"/>')
    cx,cy=510,110
    pts=[]
    import math as m
    inner=[(cx+28*m.cos(a),cy+28*m.sin(a)) for a in [k*m.pi/3 for k in range(6)]]
    outer=[(cx+72*m.cos(a),cy+66*m.sin(a)) for a in [k*2*m.pi/10+0.3 for k in range(10)]]
    o.append(f'<ellipse cx="{cx}" cy="{cy}" rx="88" ry="82" fill="none" stroke="{LINE}" stroke-dasharray="4 4"/>')
    for x,y in outer: o.append(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="8" fill="#fff" stroke="{FG}" stroke-width="1.2"/>')
    for k in (1,4,7): x,y=outer[k]; o.append(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="8" fill="#cfd8e6" stroke="{FG}" stroke-width="1.2"/>')
    for x,y in inner: o.append(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="8" fill="{OIL}" stroke="{FG}" stroke-width="1.2"/>')
    o.append(T(510,216,"folded: nonpolar inside, polar and charged outside",text_anchor="middle",fill=FG))
    o.append(f'<circle cx="24" cy="20" r="7" fill="{OIL}" stroke="{FG}"/>'+T(36,24,"nonpolar R",fill=MUT))
    o.append(f'<circle cx="140" cy="20" r="7" fill="#fff" stroke="{FG}"/>'+T(152,24,"polar R",fill=MUT))
    o.append(f'<circle cx="236" cy="20" r="7" fill="#cfd8e6" stroke="{FG}"/>'+T(248,24,"charged R",fill=MUT))
    o.append('</svg>');return "".join(o)

def dna():
    W,H=680,200
    o=[f'<svg viewBox="0 0 {W} {H}" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif" font-size="13">',f'<rect width="{W}" height="{H}" fill="#fff"/>']
    pairs=[("A","T"),("G","C"),("T","A"),("C","G"),("A","T")]
    for i,(a,b) in enumerate(pairs):
        x=60+i*80
        o.append(f'<line x1="{x}" y1="40" x2="{x}" y2="60" stroke="{FG}" stroke-width="1.5"/><line x1="{x}" y1="140" x2="{x}" y2="160" stroke="{FG}" stroke-width="1.5"/>')
        o.append(f'<rect x="{x-14}" y="60" width="28" height="30" rx="3" fill="{ACC}"/>'+T(x,80,a,text_anchor="middle",fill="#fff",font_weight="600"))
        o.append(f'<rect x="{x-14}" y="110" width="28" height="30" rx="3" fill="{ACC}"/>'+T(x,130,b,text_anchor="middle",fill="#fff",font_weight="600"))
        o.append(f'<line x1="{x-6}" y1="92" x2="{x-6}" y2="108" stroke="{ACC}" stroke-dasharray="2 2"/><line x1="{x+6}" y1="92" x2="{x+6}" y2="108" stroke="{ACC}" stroke-dasharray="2 2"/>')
    for y in (40,160):
        o.append(f'<line x1="36" y1="{y}" x2="404" y2="{y}" stroke="{FG}" stroke-width="3"/>')
        for i in range(5): o.append(f'<circle cx="{60+i*80}" cy="{y}" r="6" fill="#fff" stroke="{FG}" stroke-width="1.5"/>')
    o.append(T(424,44,"sugar–phosphate backbone",fill=FG)+T(424,62,"(phosphodiester bonds,",fill=MUT)+T(424,78,"covalent, charged)",fill=MUT))
    o.append(T(424,104,"bases pair inside",fill=FG)+T(424,122,"by hydrogen bonds",fill=MUT)+T(424,138,"(weak, can unzip)",fill=MUT))
    o.append(T(424,164,"backbone",fill=FG))
    o.append('</svg>');return "".join(o)


# ---------- Module 2 ----------
def _svg(w,h,fs=13):
    return [f'<svg viewBox="0 0 {w} {h}" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif" font-size="{fs}">',f'<rect width="{w}" height="{h}" fill="#fff"/>']
def _ah(id,col):
    return f'<defs><marker id="{id}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="{col}"/></marker></defs>'
def _poly(pts,col,w=2.5,dash=None):
    d=f' stroke-dasharray="{dash}"' if dash else ""
    return f'<polyline fill="none" stroke="{col}" stroke-width="{w}"{d} points="{" ".join(f"{x:.1f},{y:.1f}" for x,y in pts)}"/>'
def _axes(L,Tp,R,B,xl,yl):
    return (f'<line x1="{L}" y1="{B}" x2="{R}" y2="{B}" stroke="{FG}"/><line x1="{L}" y1="{Tp}" x2="{L}" y2="{B}" stroke="{FG}"/>'
      +T((L+R)/2,B+34,xl,text_anchor="middle",fill=MUT)+f'<text x="{L-22}" y="{(Tp+B)/2}" text-anchor="middle" fill="{MUT}" transform="rotate(-90 {L-22} {(Tp+B)/2})">{yl}</text>')

def energy():
    o=_svg(660,290)+[_ah("ea",FG),_ah("eb",ACC)]
    o.append(_axes(50,20,640,250,"reaction progress →","free energy (G)"))
    o.append(f'<path d="M60,150 L140,150 C200,150 240,40 300,40 C360,40 400,210 460,210 L630,210" fill="none" stroke="{FG}" stroke-width="2.5"/>')
    o.append(f'<path d="M60,150 L140,150 C200,150 240,100 300,100 C360,100 400,210 460,210 L630,210" fill="none" stroke="{ACC}" stroke-width="2.5"/>')
    o.append(f'<line x1="140" y1="150" x2="610" y2="150" stroke="{MUT}" stroke-dasharray="4 4"/>')
    o.append(f'<line x1="318" y1="148" x2="318" y2="44" stroke="{FG}" stroke-width="1.5" marker-end="url(#ea)" marker-start="url(#ea)"/>'+T(325,104,"Ea",fill=FG,font_weight="600"))
    o.append(f'<line x1="282" y1="148" x2="282" y2="104" stroke="{ACC}" stroke-width="1.5" marker-end="url(#eb)" marker-start="url(#eb)"/>'+T(275,132,"Ea",text_anchor="end",fill=ACC,font_weight="600"))
    o.append(f'<line x1="590" y1="152" x2="590" y2="206" stroke="{FG}" stroke-width="1.5" marker-end="url(#ea)" marker-start="url(#ea)"/>'+T(582,184,"ΔG (same either way)",text_anchor="end",fill=FG))
    o.append(T(300,32,"transition state",text_anchor="middle",fill=MUT))
    o.append(T(95,140,"reactants",text_anchor="middle",fill=FG)+T(540,232,"products",text_anchor="middle",fill=FG))
    o.append(f'<line x1="450" y1="40" x2="475" y2="40" stroke="{FG}" stroke-width="2.5"/>'+T(482,44,"no enzyme",fill=FG))
    o.append(f'<line x1="450" y1="62" x2="475" y2="62" stroke="{ACC}" stroke-width="2.5"/>'+T(482,66,"with enzyme",fill=ACC))
    o.append('</svg>');return "".join(o)

def mmfig():
    L,R,Tp,B=60,630,30,230; smax=10
    X=lambda s:L+(R-L)*s/smax; Y=lambda v:B-(B-Tp)*v/1.12
    o=_svg(660,280)
    o.append(f'<rect x="{X(0)}" y="{Tp}" width="{X(0.5)-X(0)}" height="{B-Tp}" fill="#f3f5f9"/>')
    o.append(f'<rect x="{X(6)}" y="{Tp}" width="{X(10)-X(6)}" height="{B-Tp}" fill="#f3f5f9"/>')
    o.append(_axes(L,Tp,R,B,"[S] →","initial velocity Vᵢ"))
    o.append(_poly([(X(s/50),Y((s/50)/((s/50)+1))) for s in range(0,501)],ACC))
    o.append(f'<line x1="{L}" y1="{Y(1)}" x2="{R}" y2="{Y(1)}" stroke="{FG}" stroke-dasharray="5 4"/>'+T(R-4,Y(1)-6,"Vmax",text_anchor="end",fill=FG,font_weight="600"))
    o.append(f'<line x1="{L}" y1="{Y(.5)}" x2="{X(1)}" y2="{Y(.5)}" stroke="{FG}" stroke-dasharray="3 3"/><line x1="{X(1)}" y1="{Y(.5)}" x2="{X(1)}" y2="{B}" stroke="{FG}" stroke-dasharray="3 3"/>')
    o.append(T(L+5,Y(.5)-6,"½Vmax",fill=FG,font_size="12")+T(X(1),B+16,"Km",text_anchor="middle",fill=FG,font_weight="600"))
    o.append(f'<circle cx="{X(1)}" cy="{Y(.5)}" r="4.5" fill="{FG}"/>')
    o.append(T(X(0.25),Tp+16,"A",text_anchor="middle",fill=FG,font_weight="600")+T(X(1)+10,Y(.5)+18,"B",fill=FG,font_weight="600")+T(X(8),Tp+16,"C",text_anchor="middle",fill=FG,font_weight="600"))
    o.append(T(X(2.2),Y(.25),"A: [S] well below Km. Rate rises almost in step with [S].",fill=MUT,font_size="12"))
    o.append(T(X(2.2),Y(.25)+17,"B: [S] = Km. Rate is exactly half of Vmax.",fill=MUT,font_size="12"))
    o.append(T(X(2.2),Y(.25)+34,"C: [S] far above Km. Enzyme saturated; rate levels off at Vmax.",fill=MUT,font_size="12"))
    o.append('</svg>');return "".join(o)

def _lbpanel(o,ox,oy,w,h,lines,xr,yr,labels=True,fs="12"):
    x0,x1=xr; y1=yr
    X=lambda x:ox+w*(x-x0)/(x1-x0); Y=lambda y:oy+h-h*y/y1
    o.append(f'<line x1="{ox}" y1="{Y(0)}" x2="{ox+w}" y2="{Y(0)}" stroke="{FG}"/><line x1="{X(0)}" y1="{oy}" x2="{X(0)}" y2="{oy+h}" stroke="{FG}"/>')
    for m,b,col in lines:
        xs=-b/m; xe=x1
        o.append(_poly([(X(xs-(0.25 if labels else 0.15)*(x1-x0)*0),Y(0)),(X(xe),Y(m*xe+b))],col,2.2))
        o.append(f'<circle cx="{X(xs)}" cy="{Y(0)}" r="3.5" fill="{col}"/><circle cx="{X(0)}" cy="{Y(b)}" r="3.5" fill="{col}"/>')
    if labels:
        o.append(T(ox+w,Y(0)+16,"1/[S]",text_anchor="end",fill=MUT,font_size=fs)+T(X(0)+6,oy+12,"1/V",fill=MUT,font_size=fs))
    return X,Y

def lbfig():
    o=_svg(660,290)
    X,Y=_lbpanel(o,40,20,560,230,[(1,1,ACC)],(-1.6,3.2),5)
    o.append(T(X(0)-8,Y(1)+4,"1/Vmax",text_anchor="end",fill=FG,font_weight="600"))
    o.append(T(X(-1),Y(0)+18,"−1/Km",text_anchor="middle",fill=FG,font_weight="600"))
    o.append(f'<line x1="{X(1.5)}" y1="{Y(2.5)}" x2="{X(2.5)}" y2="{Y(2.5)}" stroke="{MUT}" stroke-dasharray="3 3"/><line x1="{X(2.5)}" y1="{Y(2.5)}" x2="{X(2.5)}" y2="{Y(3.5)}" stroke="{MUT}" stroke-dasharray="3 3"/>')
    o.append(T(X(2.5)+8,Y(3)+4,"slope = Km/Vmax",fill=FG,font_weight="600"))
    o.append(T(X(1.7),Y(0.6),"← higher [S] · lower [S] →",text_anchor="middle",fill=MUT,font_size="12"))
    o.append('</svg>');return "".join(o)

def inhib3():
    o=_svg(660,250,12)
    sets=[("Competitive",[(1,1,FG),(2,1,ACC)],"Km up, Vmax same","lines cross on the y-axis"),
          ("Noncompetitive",[(1,1,FG),(2,2,ACC)],"Vmax down, Km same","lines cross on the x-axis"),
          ("Uncompetitive",[(1,1,FG),(1,2,ACC)],"Km and Vmax both down","parallel lines")]
    for i,(nm,ls,a,b) in enumerate(sets):
        ox=12+i*218
        o.append(T(ox+100,16,nm,text_anchor="middle",fill=FG,font_weight="600",font_size="14"))
        _lbpanel(o,ox,26,196,160,ls,(-2.2,2.6),7.5)
        o.append(T(ox+100,210,a,text_anchor="middle",fill=FG)+T(ox+100,226,b,text_anchor="middle",fill=MUT))
    o.append(f'<line x1="200" y1="243" x2="222" y2="243" stroke="{FG}" stroke-width="2.2"/>'+T(228,247,"no inhibitor",fill=FG))
    o.append(f'<line x1="330" y1="243" x2="352" y2="243" stroke="{ACC}" stroke-width="2.2"/>'+T(358,247,"+ inhibitor",fill=ACC))
    o=[x.replace('viewBox="0 0 660 250"','viewBox="0 0 660 256"').replace('height="250"','height="256"') for x in o]
    o.append('</svg>');return "".join(o)

def tempfig():
    L,R,Tp,B=60,630,25,220; X=lambda t:L+(R-L)*t/60; Y=lambda a:B-(B-Tp)*a/1.1
    o=_svg(660,265)+[_axes(L,Tp,R,B,"temperature (°C)","enzyme activity")]
    f=lambda t:math.exp(-((t-37)/17)**2) if t<=37 else math.exp(-((t-37)/5.5)**2)
    o.append(_poly([(X(t/5),Y(f(t/5))) for t in range(0,301)],ACC))
    for t in range(0,61,10): o.append(T(X(t),B+16,str(t),text_anchor="middle",fill=MUT,font_size="12"))
    o.append(f'<line x1="{X(37)}" y1="{Y(1)}" x2="{X(37)}" y2="{B}" stroke="{FG}" stroke-dasharray="3 3"/>'+T(X(37),Y(1)-8,"optimum ≈ 37 °C",text_anchor="middle",fill=FG,font_weight="600"))
    o.append(T(X(16),Y(0.52),"more collisions as molecules move faster",text_anchor="middle",fill=MUT,font_size="12"))
    o.append(T(X(44)+6,Y(0.45),"weak bonds break,",fill=MUT,font_size="12")+T(X(44)+6,Y(0.45)+16,"enzyme denatures",fill=MUT,font_size="12"))
    o.append('</svg>');return "".join(o)

def phfig():
    L,R,Tp,B=60,630,25,220; X=lambda p:L+(R-L)*p/12; Y=lambda a:B-(B-Tp)*a/1.1
    o=_svg(660,265)+[_axes(L,Tp,R,B,"pH","enzyme activity")]
    o.append(_poly([(X(p/25),Y(math.exp(-((p/25-2)/1.1)**2))) for p in range(0,301)],FG))
    o.append(_poly([(X(p/25),Y(math.exp(-((p/25-8)/1.2)**2))) for p in range(0,301)],ACC))
    for p in range(0,13,2): o.append(T(X(p),B+16,str(p),text_anchor="middle",fill=MUT,font_size="12"))
    o.append(T(X(2),Y(1)-8,"pepsin (stomach)",text_anchor="middle",fill=FG,font_weight="600"))
    o.append(T(X(8),Y(1)-8,"chymotrypsin (small intestine)",text_anchor="middle",fill=ACC,font_weight="600"))
    o.append(f'<line x1="{X(7.4)}" y1="{Tp+20}" x2="{X(7.4)}" y2="{B}" stroke="{MUT}" stroke-dasharray="3 3"/>'+T(X(7.4)-4,B-8,"blood 7.4",text_anchor="end",fill=MUT,font_size="12"))
    o.append('</svg>');return "".join(o)

def feedback():
    o=_svg(660,170,14)+[_ah("fa",FG),_ah("fb",ACC)]
    xs=[50,180,310,440,570]
    for i,(x,n) in enumerate(zip(xs,"ABCDE")):
        o.append(f'<rect x="{x-22}" y="98" width="44" height="34" rx="5" fill="#fff" stroke="{FG}" stroke-width="1.5"/>'+T(x,121,n,text_anchor="middle",fill=FG,font_weight="600",font_size="16"))
        if i<4:
            o.append(f'<line x1="{x+26}" y1="115" x2="{xs[i+1]-28}" y2="115" stroke="{FG}" stroke-width="2" marker-end="url(#fa)"/>'+T((x+xs[i+1])/2,152,f"enzyme {i+1}",text_anchor="middle",fill=MUT,font_size="12"))
    o.append(f'<path d="M570,96 C570,20 115,20 115,104" fill="none" stroke="{ACC}" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#fb)"/>')
    o.append(T(132,96,"−",text_anchor="middle",fill=ACC,font_weight="700",font_size="22"))
    o.append(T(342,30,"enough E built up: E binds an allosteric site on enzyme 1 and slows it",text_anchor="middle",fill=ACC,font_size="13"))
    o.append('</svg>');return "".join(o)

def levels():
    o=_svg(660,200,13)
    # primary
    for i in range(6):
        o.append(f'<circle cx="{22+i*26}" cy="80" r="11" fill="#fff" stroke="{ACC}" stroke-width="1.6"/>')
        if i<5: o.append(f'<line x1="{33+i*26}" y1="80" x2="{37+i*26}" y2="80" stroke="{FG}" stroke-width="2"/>')
    o.append(T(85,150,"Primary",text_anchor="middle",fill=FG,font_weight="600")+T(85,167,"amino acid sequence",text_anchor="middle",fill=MUT,font_size="12")+T(85,183,"(peptide bonds)",text_anchor="middle",fill=MUT,font_size="12"))
    # secondary: helix + sheet
    pts=[(190+t*0.9,70+14*math.sin(t/6)) for t in range(0,100)]
    o.append(_poly(pts,ACC,2.2))
    for y in (100,118):
        o.append(f'<path d="M190 {y} H262 l-8 -6 M262 {y} l-8 6" fill="none" stroke="{ACC}" stroke-width="2.2"/>')
    o.append(T(235,150,"Secondary",text_anchor="middle",fill=FG,font_weight="600")+T(235,167,"α-helix, β-sheet",text_anchor="middle",fill=MUT,font_size="12")+T(235,183,"(backbone H-bonds)",text_anchor="middle",fill=MUT,font_size="12"))
    # tertiary
    o.append(f'<path d="M350 95 C340 55 380 40 395 60 C410 80 370 90 385 110 C400 130 440 115 430 85 C422 60 450 45 460 70 C470 95 445 125 410 125 C380 125 355 120 350 95 Z" fill="#eef2f9" stroke="{ACC}" stroke-width="2"/>')
    o.append(T(405,150,"Tertiary",text_anchor="middle",fill=FG,font_weight="600")+T(405,167,"whole chain folded in 3D",text_anchor="middle",fill=MUT,font_size="12")+T(405,183,"(side-chain interactions)",text_anchor="middle",fill=MUT,font_size="12"))
    # quaternary
    for dx,f in ((0,"#eef2f9"),(58,"#fff")):
        o.append(f'<path d="M{520+dx} 90 C{512+dx} 55 {548+dx} 45 {560+dx} 62 C{575+dx} 82 {572+dx} 118 {545+dx} 120 C{525+dx} 121 {522+dx} 108 {520+dx} 90 Z" fill="{f}" stroke="{ACC if dx==0 else FG}" stroke-width="2"/>')
    o.append(T(578,150,"Quaternary",text_anchor="middle",fill=FG,font_weight="600")+T(578,167,"two or more chains",text_anchor="middle",fill=MUT,font_size="12")+T(578,183,"(same weak forces)",text_anchor="middle",fill=MUT,font_size="12"))
    o.append('</svg>');return "".join(o)

figs={"energy":energy(),"mm":mmfig(),"lb":lbfig(),"inhib3":inhib3(),"temp":tempfig(),"ph":phfig(),"feedback":feedback(),"levels":levels(),"bilayer":bilayer(),"fold":fold(),"dna":dna(),"hydro":hydro(),"bicarb":bicarb(),"titr":titr(),"classes":classes(),"water":water(),"aagrid":aagrid(),"forces":forces(),"phscale":phscale()}
here=os.path.dirname(os.path.abspath(__file__))
open(os.path.join(here,"figs.js"),"w").write("const FIGS="+json.dumps(figs,ensure_ascii=False)+";\n")
for k,v in figs.items():
    if v.startswith("<svg"): open(f"/tmp/fig_{k}.svg","w").write(v)
print("ok")
