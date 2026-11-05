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


# ---------- Question figures (unlabeled; q- prefix). Narrow viewBox + larger text so they read at 390 px ----------
def _q(w,h,fs=15): return _svg(w,h,fs)
def _num(x,y,n,col=FG):
    return f'<circle cx="{x}" cy="{y}" r="11" fill="#fff" stroke="{col}" stroke-width="1.6"/>'+T(x,y+5,n,text_anchor="middle",fill=col,font_weight="700",font_size="14")

def q_energy4():
    o=_q(480,300)+[_ah("qa",FG)]
    o.append(_axes(46,16,470,250,"reaction progress →","free energy"))
    o.append(f'<path d="M56,150 L110,150 C160,150 190,36 240,36 C290,36 320,214 370,214 L462,214" fill="none" stroke="{FG}" stroke-width="2.5"/>')
    o.append(f'<path d="M56,150 L110,150 C160,150 190,104 240,104 C290,104 320,214 370,214 L462,214" fill="none" stroke="{ACC}" stroke-width="2.5"/>')
    o.append(f'<line x1="100" y1="150" x2="455" y2="150" stroke="{MUT}" stroke-dasharray="4 4"/>')
    o.append(f'<line x1="258" y1="147" x2="258" y2="41" stroke="{FG}" stroke-width="1.5" marker-end="url(#qa)" marker-start="url(#qa)"/>'+_num(240,72,"1"))
    o.append(f'<line x1="222" y1="147" x2="222" y2="109" stroke="{ACC}" stroke-width="1.5" marker-end="url(#qa)" marker-start="url(#qa)"/>'+_num(202,130,"2"))
    o.append(f'<line x1="430" y1="153" x2="430" y2="210" stroke="{FG}" stroke-width="1.5" marker-end="url(#qa)" marker-start="url(#qa)"/>'+_num(408,182,"3"))
    o.append(f'<line x1="196" y1="22" x2="232" y2="34" stroke="{FG}" stroke-width="1.5" marker-end="url(#qa)"/>'+_num(182,20,"4"))
    o.append(T(80,140,"reactants",text_anchor="middle",fill=MUT,font_size="13")+T(415,236,"products",text_anchor="middle",fill=MUT,font_size="13"))
    o.append('</svg>');return "".join(o)

def q_mm4():
    L,R,Tp,B=50,465,20,230; X=lambda s:L+(R-L)*s/10; Y=lambda v:B-(B-Tp)*v/1.1
    o=_q(480,280)+[_axes(L,Tp,R,B,"[S] →","rate")]
    o.append(_poly([(X(s/50),Y((s/50)/((s/50)+1))) for s in range(0,501)],ACC))
    for lab,s,dx,dy in [("A",0.15,14,-6),("B",1,-4,-14),("C",3,-6,-14),("D",9,0,-14)]:
        v=s/(s+1); o.append(f'<circle cx="{X(s):.1f}" cy="{Y(v):.1f}" r="5" fill="{FG}"/>'+T(X(s)+dx,Y(v)+dy,lab,text_anchor="middle",fill=FG,font_weight="700"))
    o.append('</svg>');return "".join(o)

def q_lbread():
    # line 1/V = 0.4(1/[S]) + 0.2 ; x from -1 to 2, y 0 to 1
    L,R,Tp,B=44,465,16,226; x0,x1,y1=-1,2,1.0
    X=lambda x:L+(R-L)*(x-x0)/(x1-x0); Y=lambda y:B-(B-Tp)*y/y1
    o=_q(480,282,14)
    for k in range(7):
        x=-1+k*0.5; o.append(f'<line x1="{X(x):.1f}" y1="{Tp}" x2="{X(x):.1f}" y2="{B}" stroke="#e6e6e6"/>'+T(X(x),B+18,f"{x:g}".replace("-","−"),text_anchor="middle",fill=MUT,font_size="13"))
    for k in range(6):
        y=k*0.2; o.append(f'<line x1="{L}" y1="{Y(y):.1f}" x2="{R}" y2="{Y(y):.1f}" stroke="#e6e6e6"/>')
        if k: o.append(T(L-5,Y(y)+5,f"{y:.1f}",text_anchor="end",fill=MUT,font_size="13"))
    o.append(f'<line x1="{L}" y1="{Y(0)}" x2="{R}" y2="{Y(0)}" stroke="{FG}"/><line x1="{X(0)}" y1="{Tp}" x2="{X(0)}" y2="{B}" stroke="{FG}"/>')
    o.append(_poly([(X(-0.5),Y(0)),(X(2),Y(1.0))],ACC,2.5))
    for x,y in [(0.5,0.4),(1,0.6),(1.5,0.8)]: o.append(f'<circle cx="{X(x):.1f}" cy="{Y(y):.1f}" r="4.5" fill="{ACC}"/>')
    o.append(T((L+R)/2,B+40,"1/[S]",text_anchor="middle",fill=MUT)+T(X(0)+8,Tp+14,"1/V",fill=MUT))
    o.append('</svg>');return "".join(o)

def _lbq(lines,xr=(-2.4,2.4),ymax=2.0,legend=None,tags=None):
    L,R,Tp,B=24,465,16,220; x0,x1=xr
    X=lambda x:L+(R-L)*(x-x0)/(x1-x0); Y=lambda y:B-(B-Tp)*y/ymax
    o=_q(480,268 if legend else 250)
    o.append(f'<line x1="{L}" y1="{Y(0)}" x2="{R}" y2="{Y(0)}" stroke="{FG}"/><line x1="{X(0)}" y1="{Tp}" x2="{X(0)}" y2="{B}" stroke="{FG}"/>')
    for i,(m,b,col) in enumerate(lines):
        xs=max(-b/m,x0); xe=min(x1-(0.12*(x1-x0) if tags else 0),(ymax*0.95-b)/m)
        o.append(_poly([(X(xs),Y(m*xs+b)),(X(xe),Y(m*xe+b))],col,2.5))
        if tags: o.append(T(X(xe)+8,Y(m*xe+b)+5,tags[i],fill=col,font_weight="700",font_size="16"))
    o.append(T(R,Y(0)+20,"1/[S]",text_anchor="end",fill=MUT)+T(X(0)+8,Tp+14,"1/V",fill=MUT))
    if legend:
        o.append(f'<line x1="120" y1="256" x2="146" y2="256" stroke="{FG}" stroke-width="2.5"/>'+T(152,261,legend[0],fill=FG,font_size="14"))
        o.append(f'<line x1="270" y1="256" x2="296" y2="256" stroke="{ACC}" stroke-width="2.5"/>'+T(302,261,legend[1],fill=ACC,font_size="14"))
    o.append('</svg>');return "".join(o)

def _mmq(curves,smax=12,ymax=2.2,legend=None,dashed=None):
    L,R,Tp,B=50,465,16,214; X=lambda s:L+(R-L)*s/smax; Y=lambda v:B-(B-Tp)*v/ymax
    o=_q(480,284)+[_axes(L,Tp,R,B,"[S] →","rate")]
    if dashed: o.append(f'<line x1="{L}" y1="{Y(dashed)}" x2="{R}" y2="{Y(dashed)}" stroke="{MUT}" stroke-dasharray="5 4"/>')
    for vm,km,col in curves: o.append(_poly([(X(s*smax/400),Y(vm*(s*smax/400)/(km+s*smax/400))) for s in range(0,401)],col))
    if legend:
        o.append(f'<line x1="110" y1="272" x2="136" y2="272" stroke="{FG}" stroke-width="2.5"/>'+T(142,277,legend[0],fill=FG,font_size="14"))
        o.append(f'<line x1="270" y1="272" x2="296" y2="272" stroke="{ACC}" stroke-width="2.5"/>'+T(302,277,legend[1],fill=ACC,font_size="14"))
    o.append('</svg>');return "".join(o)

def q_ph2():
    L,R,Tp,B=50,465,30,214; X=lambda p:L+(R-L)*p/12; Y=lambda a:B-(B-Tp)*a/1.1
    o=_q(480,262)+[_axes(L,Tp,R,B,"pH","activity")]
    o.append(_poly([(X(p/25),Y(math.exp(-((p/25-8)/1.2)**2))) for p in range(0,301)],FG))
    o.append(_poly([(X(p/25),Y(math.exp(-((p/25-2)/1.1)**2))) for p in range(0,301)],ACC))
    for p in range(0,13,2): o.append(T(X(p),B+18,str(p),text_anchor="middle",fill=MUT,font_size="13"))
    o.append(T(X(8),Y(1)-10,"P",text_anchor="middle",fill=FG,font_weight="700",font_size="17")+T(X(2),Y(1)-10,"Q",text_anchor="middle",fill=ACC,font_weight="700",font_size="17"))
    o.append('</svg>');return "".join(o)

def q_temp2():
    L,R,Tp,B=50,465,30,214; X=lambda t:L+(R-L)*t/100; Y=lambda a:B-(B-Tp)*a/1.1
    o=_q(480,262)+[_axes(L,Tp,R,B,"temperature (°C)","activity")]
    fN=lambda t:math.exp(-((t-37)/20)**2) if t<=37 else math.exp(-((t-37)/7)**2)
    fM=lambda t:math.exp(-((t-75)/18)**2) if t<=75 else math.exp(-((t-75)/5)**2)
    o.append(_poly([(X(t/4),Y(fN(t/4))) for t in range(0,401)],FG))
    o.append(_poly([(X(t/4),Y(fM(t/4))) for t in range(0,401)],ACC))
    for t in range(0,101,20): o.append(T(X(t),B+18,str(t),text_anchor="middle",fill=MUT,font_size="13"))
    o.append(T(X(37),Y(1)-10,"N",text_anchor="middle",fill=FG,font_weight="700",font_size="17")+T(X(75),Y(1)-10,"M",text_anchor="middle",fill=ACC,font_weight="700",font_size="17"))
    o.append('</svg>');return "".join(o)

def q_path():
    o=_q(480,120,16)+[_ah("qp",FG)]
    xs=[30,135,240,345,450]
    for i,(x,n) in enumerate(zip(xs,"ABCDE")):
        o.append(f'<rect x="{x-20}" y="30" width="40" height="34" rx="5" fill="#fff" stroke="{FG}" stroke-width="1.5"/>'+T(x,53,n,text_anchor="middle",fill=FG,font_weight="700",font_size="17"))
        if i<4:
            o.append(f'<line x1="{x+23}" y1="47" x2="{xs[i+1]-24}" y2="47" stroke="{FG}" stroke-width="2" marker-end="url(#qp)"/>'+_num((x+xs[i+1])/2,88,str(i+1),ACC))
    o.append(T(240,116,"numbers = enzymes",text_anchor="middle",fill=MUT,font_size="13"))
    o.append('</svg>');return "".join(o)

def q_struct4():
    o=_q(480,330,15)
    def box(x,y,lab):
        o.append(f'<rect x="{x}" y="{y}" width="226" height="148" rx="6" fill="none" stroke="{LINE}"/>'+T(x+14,y+22,lab,fill=FG,font_weight="700",font_size="17"))
    box(8,8,"W");box(246,8,"X");box(8,170,"Y");box(246,170,"Z")
    # W: quaternary (two chains)
    for dx,f,c in ((0,"#eef2f9",ACC),(64,"#fff",FG)):
        x=58+dx
        o.append(f'<path d="M{x} 92 C{x-8} 52 {x+30} 40 {x+44} 60 C{x+60} 84 {x+56} 124 {x+28} 128 C{x+6} 130 {x+2} 112 {x} 92 Z" fill="{f}" stroke="{c}" stroke-width="2"/>')
    # X: primary (bead chain)
    for i in range(7):
        cx=276+i*26
        o.append(f'<circle cx="{cx}" cy="86" r="10" fill="#fff" stroke="{ACC}" stroke-width="1.6"/>')
        if i<6: o.append(f'<line x1="{cx+10}" y1="86" x2="{cx+16}" y2="86" stroke="{FG}" stroke-width="2"/>')
    # Y: secondary (coil + sheet strands with H-bond dashes)
    pts=[]
    for t in range(0,241):
        a=t/240*5*2*math.pi; pts.append((30+t*0.42+7*math.cos(a), 250+14*math.sin(a)))
    o.append(_poly(pts,ACC,2.2))
    for y,d in ((228,1),(258,-1),(288,1)):
        if d>0: o.append(f'<path d="M150 {y} H222 l-9 -6 M222 {y} l-9 6" fill="none" stroke="{ACC}" stroke-width="2.2"/>')
        else: o.append(f'<path d="M222 {y} H150 l9 -6 M150 {y} l9 6" fill="none" stroke="{ACC}" stroke-width="2.2"/>')
    for x in range(158,222,14):
        for y in (232,262): o.append(f'<line x1="{x}" y1="{y+2}" x2="{x}" y2="{y+20}" stroke="{MUT}" stroke-dasharray="2 3"/>')
    # Z: tertiary (one folded chain)
    o.append(f'<path d="M300 258 C290 218 330 203 345 223 C360 243 320 253 335 273 C350 293 390 278 380 248 C372 223 400 208 410 233 C420 258 395 288 360 288 C330 288 305 283 300 258 Z" fill="#eef2f9" stroke="{ACC}" stroke-width="2"/>')
    o.append('</svg>');return "".join(o)

def q_parts():
    o=_q(480,250,15)+[_ah("qr",FG)]
    def enz(x,y,f="#eef2f9"):
        # protein body with a notch (active site) on top and a small socket on the left
        return f'<path d="M{x} {y} h26 l10 18 h16 l10 -18 h26 v60 h-88 v-22 h10 v-16 h-10 z" fill="{f}" stroke="{ACC}" stroke-width="2"/>'
    def cof(x,y): return f'<rect x="{x}" y="{y}" width="12" height="16" rx="2" fill="{OIL}" stroke="{FG}" stroke-width="1.2"/>'
    def sub(x,y): return f'<path d="M{x} {y} l10 18 h16 l10 -18 z" fill="#fff" stroke="{FG}" stroke-width="1.8"/>'
    ar=lambda x1,x2,y:f'<line x1="{x1}" y1="{y}" x2="{x2}" y2="{y}" stroke="{FG}" stroke-width="2" marker-end="url(#qr)"/>'
    # row 1: [1] + [2] -> [3]
    o.append(enz(30,40)+_num(74,124,"1"))
    o.append(T(150,78,"+",text_anchor="middle",fill=FG,font_size="22")+cof(176,62)+_num(182,124,"2"))
    o.append(ar(214,262,72))
    o.append(enz(300,40)+cof(300,58)+_num(344,124,"3"))
    # row 2: [3] + [4] -> [5]
    o.append(T(150,196,"+",text_anchor="middle",fill=FG,font_size="22")+sub(172,182)+_num(190,226,"4"))
    o.append(enz(30,170)+cof(30,188))
    o.append(ar(224,262,192))
    o.append(enz(300,170)+cof(300,188)+sub(326,170)+_num(344,248-0,"5"))
    o=[x.replace('viewBox="0 0 480 250"','viewBox="0 0 480 262"').replace('height="250"','height="262"') for x in o]
    o.append('</svg>');return "".join(o)

def q_endo():
    o=_q(480,270)
    o.append(_axes(46,16,470,226,"reaction progress →","free energy"))
    o.append(f'<path d="M56,190 L120,190 C170,190 200,40 250,40 C300,40 320,110 370,110 L462,110" fill="none" stroke="{ACC}" stroke-width="2.5"/>')
    o.append(T(88,212,"reactants",text_anchor="middle",fill=MUT,font_size="13")+T(415,132,"products",text_anchor="middle",fill=MUT,font_size="13"))
    o.append('</svg>');return "".join(o)

def q_allo():
    o=_q(480,200,14)
    def enz(x,y):
        # body with active-site notch on top and a square pocket on the right side
        return f'<path d="M{x} {y} h40 l12 20 h20 l12 -20 h40 v44 h-12 v24 h12 v22 h-124 z" fill="#eef2f9" stroke="{ACC}" stroke-width="2"/>'
    def sub(x,y): return f'<path d="M{x} {y} l12 20 h20 l12 -20 z" fill="#fff" stroke="{FG}" stroke-width="1.8"/>'
    def inh(x,y): return f'<rect x="{x}" y="{y}" width="14" height="24" rx="2" fill="{FG}"/>'
    o.append(enz(46,60)+inh(158,104))
    o.append(enz(290,60)+sub(330,60)+inh(402,104))
    o.append(f'<rect x="20" y="168" width="14" height="22" rx="2" fill="{FG}"/>'+T(42,184,"inhibitor",fill=FG))
    o.append(f'<path d="M140 170 l12 20 h20 l12 -20 z" fill="#fff" stroke="{FG}" stroke-width="1.8"/>'+T(194,184,"substrate",fill=FG))
    o.append(f'<rect x="290" y="170" width="22" height="18" fill="#eef2f9" stroke="{ACC}" stroke-width="2"/>'+T(320,184,"enzyme",fill=FG))
    o.append('</svg>');return "".join(o)

# ---------- Module 1 question figures (unlabeled) ----------
def _atom(x,y,s,fs=17,col=FG,bold=False):
    k=dict(text_anchor="middle",fill=col,font_size=str(fs))
    if bold: k["font_weight"]="600"
    return T(x,y+fs*0.36,s,**k)
def _bond(x1,y1,x2,y2,col=FG,w=2):
    return f'<line x1="{x1:.1f}" y1="{y1:.1f}" x2="{x2:.1f}" y2="{y2:.1f}" stroke="{col}" stroke-width="{w}"/>'
def _zig(x0,y,n,step=20,amp=10,col=FG,w=2):
    return _poly([(x0+i*step,y+(amp if i%2 else -amp)) for i in range(n)],col,w)
def _tag(x,y,s): return T(x,y,s,fill=FG,font_weight="700",font_size="17")
def _boxes(o,w,h,tags=None,nums=None):
    pos=[(8,8),(246,8),(8,16+h),(246,16+h)]
    for i,(x,y) in enumerate(pos):
        o.append(f'<rect x="{x}" y="{y}" width="226" height="{h}" rx="6" fill="none" stroke="{LINE}"/>')
        if tags: o.append(_tag(x+12,y+22,tags[i]))
        if nums: o.append(_num(x+20,y+20,nums[i]))
    return pos

def q_ester():
    o=_q(480,200,17)
    y=110
    o.append(_zig(30,y,7,step=19,amp=11))                      # hydrocarbon tail
    o.append(_bond(144,y-11,158,y-3))
    o.append(_atom(168,y,"C"))
    o.append(_bond(164,y-12,164,y-44)+_bond(172,y-12,172,y-44)) # C=O
    o.append(_atom(168,y-56,"O"))
    o.append(_bond(180,y,196,y)+_atom(208,y,"O")+_bond(220,y,233,y)+_atom(243,y,"H"))
    gx=300  # glycerol: H–O–C, three rows
    for yy,c in ((y-60,"CH₂"),(y,"CH"),(y+60,"CH₂")):
        o.append(_atom(gx,yy,"H")+_bond(gx+10,yy,gx+24,yy)+_atom(gx+36,yy,"O")+_bond(gx+48,yy,gx+66,yy)+T(gx+70,yy+6,c,fill=FG,font_size="17"))
    o.append(_bond(gx+82,y-48,gx+82,y-14)+_bond(gx+82,y+14,gx+82,y+48))
    o.append(f'<rect x="194" y="{y-19}" width="120" height="38" rx="5" fill="none" stroke="{ACC}" stroke-width="2" stroke-dasharray="6 4"/>')
    o.append('</svg>');return "".join(o)

def q_mono4():
    o=_q(480,328,16); pos=_boxes(o,226,152,nums="1234")
    # 1: sugar ring
    cx,cy=121,92; r=30
    V=[(cx+r*math.cos(k*math.pi/3),cy+r*math.sin(k*math.pi/3)) for k in range(6)]
    for k in range(6):
        if k in (4,5): continue
        o.append(_bond(*V[k],*V[(k+1)%6]))
    ox,oy=V[5]; o.append(_bond(*V[4],ox-9,oy)+_bond(ox+5,oy+8,*V[0])+_atom(ox,oy,"O",15))
    for k,dx,dy,s in ((0,22,0,"OH"),(1,0,22,"OH"),(2,0,22,"OH"),(3,-22,0,"HO")):
        x,y=V[k]; o.append(_bond(x,y,x+dx*0.7,y+dy*0.7)+_atom(x+dx*1.35,y+dy*1.25,s,14))
    x,y=V[4]; o.append(_bond(x,y,x-10,y-18)+_atom(x-18,y-28,"CH₂OH",14))
    # 2: amino acid
    cx,cy=360,88
    o.append(_atom(cx-62,cy,"H₂N")+_bond(cx-44,cy,cx-10,cy)+_atom(cx,cy,"C")+_bond(cx+10,cy,cx+36,cy)+_atom(cx+66,cy,"COOH"))
    o.append(_bond(cx,cy-11,cx,cy-30)+_atom(cx,cy-40,"H")+_bond(cx,cy+11,cx,cy+30)+_atom(cx,cy+40,"R"))
    # 3: nucleotide (phosphate, sugar, base), bottom left
    by=252; dx=-238
    o.append(f'<circle cx="{276+dx}" cy="{by+18}" r="14" fill="#fff" stroke="{FG}" stroke-width="1.6"/>'+_atom(276+dx,by+18,"P",15,bold=True))
    sx,sy=338+dx,by+4
    P=[(sx+21*math.cos(-math.pi/2+k*2*math.pi/5),sy+21*math.sin(-math.pi/2+k*2*math.pi/5)) for k in range(5)]
    o.append(f'<polygon points="{" ".join(f"{x:.1f},{y:.1f}" for x,y in P)}" fill="#fff" stroke="{FG}" stroke-width="1.8"/>')
    o.append(f'<circle cx="{P[0][0]:.1f}" cy="{P[0][1]:.1f}" r="8" fill="#fff"/>'+_atom(P[0][0],P[0][1],"O",13))
    o.append(_bond(290+dx,by+15,P[3][0],P[3][1]))
    hx,hy=412+dx,by-6
    H=[(hx+20*math.cos(math.pi/6+k*math.pi/3),hy+20*math.sin(math.pi/6+k*math.pi/3)) for k in range(6)]
    o.append(_bond(P[1][0],P[1][1],H[3][0],H[3][1]))
    o.append(f'<polygon points="{" ".join(f"{x:.1f},{y:.1f}" for x,y in H)}" fill="#fff" stroke="{FG}" stroke-width="1.8"/>')
    for k in (2,4): o.append(f'<circle cx="{H[k][0]:.1f}" cy="{H[k][1]:.1f}" r="7" fill="#fff"/>'+_atom(H[k][0],H[k][1],"N",12))
    # 4: fatty acid, bottom right
    o.append(_zig(268,by,8,step=17,amp=10)+_bond(387,by+10,398,by+2)+_atom(428,by,"COOH"))
    o.append('</svg>');return "".join(o)

def q_side4():
    o=_q(480,328,17); pos=_boxes(o,226,152,tags="WXYZ")
    def stub(x,y):
        cx=x+113
        o.append(_bond(x+24,y+46,x+202,y+46,MUT,4)+f'<circle cx="{cx}" cy="{y+46}" r="5" fill="{MUT}"/>'+_bond(cx,y+51,cx,y+68))
        return cx,y
    cx,y=stub(*pos[0]); o.append(_atom(cx,y+80,"CH₂")+_bond(cx,y+92,cx,y+110)+_atom(cx,y+124,"COO⁻"))
    cx,y=stub(*pos[1]); o.append(_atom(cx,y+80,"CH")+_bond(cx-8,y+90,cx-30,y+110)+_bond(cx+8,y+90,cx+30,y+110)+_atom(cx-40,y+124,"CH₃")+_atom(cx+40,y+124,"CH₃"))
    cx,y=stub(*pos[2]); o.append(_atom(cx,y+80,"CH₂")+_bond(cx,y+92,cx,y+110)+_atom(cx,y+124,"OH"))
    cx,y=stub(*pos[3]); o.append(_atom(cx,y+80,"(CH₂)₄")+_bond(cx,y+92,cx,y+110)+_atom(cx,y+124,"NH₃⁺"))
    o.append('</svg>');return "".join(o)

def q_bilayer2():
    o=_q(480,232,17)
    def lipid(x,y,d,kink):
        o.append(f'<circle cx="{x}" cy="{y}" r="8" fill="{ACC}"/>')
        for k,dx in enumerate((-3,3)):
            pts=[(x+dx,y+d*8),(x+dx,y+d*26),(x+dx+(9 if kink and k==1 else 0),y+d*46)] if kink and k==1 else [(x+dx,y+d*8),(x+dx,y+d*46)]
            o.append(_poly(pts,OIL,2.5))
    for x0,gap,n,kink,tag in ((24,26,8,False,"A"),(262,31,7,True,"B")):
        o.append(f'<rect x="{x0-14}" y="64" width="{gap*(n-1)+28}" height="108" fill="#fbf3dd"/>')
        for i in range(n):
            x=x0+i*gap; lipid(x,54,1,kink and i%2==0); lipid(x,182,-1,kink and i%2==1)
        o.append(_tag(x0+gap*(n-1)/2-6,26,tag))
    o.append('</svg>');return "".join(o)

def q_dna2():
    o=_q(480,212,16)
    xs=[56+i*92 for i in range(5)]
    for x,(a,b) in zip(xs,[("A","T"),("G","C"),("T","A"),("C","G"),("A","T")]):
        o.append(_bond(x,48,x,66,FG,1.5)+_bond(x,150,x,168,FG,1.5))
        o.append(f'<rect x="{x-15}" y="66" width="30" height="32" rx="3" fill="{ACC}"/>'+_atom(x,82,a,15,"#fff",True))
        o.append(f'<rect x="{x-15}" y="118" width="30" height="32" rx="3" fill="{ACC}"/>'+_atom(x,134,b,15,"#fff",True))
        o.append(f'<line x1="{x-6}" y1="100" x2="{x-6}" y2="116" stroke="{ACC}" stroke-width="1.6" stroke-dasharray="2 2"/><line x1="{x+6}" y1="100" x2="{x+6}" y2="116" stroke="{ACC}" stroke-width="1.6" stroke-dasharray="2 2"/>')
    for y in (42,174):
        o.append(_bond(28,y,452,y,FG,3))
        for x in xs: o.append(f'<circle cx="{x}" cy="{y}" r="7" fill="#fff" stroke="{FG}" stroke-width="1.6"/>')
    m=(xs[0]+xs[1])/2; o.append(_bond(m,31,m,38,FG,1.5)+_num(m,18,"1"))
    x=xs[3]; o.append(_bond(x+9,108,x+25,108,FG,1.5)+_num(x+37,108,"2"))
    o.append('</svg>');return "".join(o)

def q_contact4():
    o=_q(480,276,17); pos=_boxes(o,226,126,nums="1234")
    dot=lambda x1,x2,y:f'<line x1="{x1}" y1="{y}" x2="{x2}" y2="{y}" stroke="{ACC}" stroke-width="3" stroke-dasharray="2 5" stroke-linecap="round"/>'
    def water(x,y,o_=o):  # O at (x,y), H's to the right
        o_.append(_atom(x,y,"O")+_bond(x+9,y-7,x+24,y-20)+_atom(x+31,y-27,"H",15)+_bond(x+9,y+7,x+24,y+20)+_atom(x+31,y+27,"H",15))
    x,y=pos[0]; y+=78
    o.append(_atom(x+30,y,"C")+_bond(x+40,y,x+56,y)+_atom(x+66,y,"N")+_bond(x+76,y,x+92,y)+_atom(x+100,y,"H")+dot(x+111,x+145,y)+_atom(x+156,y,"O")+_bond(x+167,y-4,x+184,y-4)+_bond(x+167,y+4,x+184,y+4)+_atom(x+194,y,"C"))
    x,y=pos[1]; y+=78
    o.append(_atom(x+40,y,"H₃C")+_bond(x+58,y,x+80,y)+_atom(x+90,y,"H")+dot(x+101,x+138,y)); water(x+150,y)
    x,y=pos[2]; y+=78
    o.append(f'<circle cx="{x+60}" cy="{y}" r="20" fill="#e6c87a" stroke="{FG}"/>'+_atom(x+60,y,"Na⁺",14,bold=True)+dot(x+84,x+138,y)); water(x+150,y)
    x,y=pos[3]; y+=78
    o.append(_atom(x+56,y,"CH₄")+dot(x+82,x+142,y)+_atom(x+170,y,"CH₄"))
    o.append('</svg>');return "".join(o)

def q_hydr2():
    o=_q(480,244,15)
    for cx,tag,hin in ((120,"A",True),(360,"B",False)):
        cy=128
        o.append(_tag(cx-110,24,tag))
        for k in range(6):
            a=-math.pi/2+k*math.pi/3; x=cx+68*math.cos(a); y=cy+68*math.sin(a)
            d=a+math.pi if hin else a
            for s in (-0.62,0.62):
                hx=x+21*math.cos(d+s); hy=cy+0+(y-cy)+21*math.sin(d+s)
                o.append(_bond(x,y,hx,hy,FG,2)+f'<circle cx="{hx:.1f}" cy="{hy:.1f}" r="8" fill="#fff" stroke="{FG}" stroke-width="1.4"/>'+_atom(hx,hy,"H",11))
            o.append(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="13" fill="{ACC}"/>'+_atom(x,y,"O",13,"#fff",True))
        o.append(f'<circle cx="{cx}" cy="{cy}" r="21" fill="#e6c87a" stroke="{FG}"/>'+_atom(cx,cy,"Na⁺",14,bold=True))
    o.append(f'<line x1="240" y1="20" x2="240" y2="236" stroke="{LINE}"/>')
    o.append('</svg>');return "".join(o)

def q_amph3():
    o=_q(480,220,17)
    def mol(x,y,a,L=28):  # head at (x,y), tail pointing along angle a
        o.append(_bond(x+6*math.cos(a),y+6*math.sin(a),x+L*math.cos(a),y+L*math.sin(a),OIL,3)+f'<circle cx="{x:.1f}" cy="{y:.1f}" r="6.5" fill="{ACC}"/>')
    for i,tag in enumerate("ABC"):
        o.append(_tag(i*160+10,24,tag))
        if i: o.append(f'<line x1="{i*160}" y1="12" x2="{i*160}" y2="212" stroke="{LINE}"/>')
    cx,cy=80,122
    for k in range(12):
        a=k*math.pi/6; mol(cx+50*math.cos(a),cy+50*math.sin(a),a+math.pi,30)
    cx=240
    for k in range(9):
        a=k*2*math.pi/9; mol(cx+25*math.cos(a),cy+25*math.sin(a),a,30)
    for x,y,a in ((345,70,0.4),(420,62,2.2),(372,128,-1.1),(440,150,3.6),(338,182,1.9),(410,196,-0.3)):
        mol(x,y,a)
    o.append('</svg>');return "".join(o)

def q_surf3():
    o=_q(480,196,17)
    o.append(f'<path d="M0 196 V150 C60 140 110 162 170 150 C230 138 270 160 330 150 C390 140 440 158 480 150 V196 Z" fill="#eef2f9" stroke="{ACC}" stroke-width="2"/>')
    # A: + meets −
    o.append(_bond(62,152,72,104)+_bond(118,150,108,104))
    for x,s in ((72,"+"),(108,"−")):
        o.append(f'<circle cx="{x}" cy="92" r="14" fill="#fff" stroke="{FG}" stroke-width="1.6"/>'+_atom(x,92,s,18,bold=True))
    o.append(_tag(84,40,"A"))
    # B: charged side chain with water around it
    cx,cy=240,88
    o.append(_bond(240,148,240,104)+f'<circle cx="{cx}" cy="{cy}" r="14" fill="#fff" stroke="{FG}" stroke-width="1.6"/>'+_atom(cx,cy,"+",18,bold=True))
    for k in range(5):
        a=math.pi*(0.95+k*0.275); x=cx+40*math.cos(a); y=cy+40*math.sin(a)
        for s in (-0.6,0.6):
            hx=x+11*math.cos(a+s); hy=y+11*math.sin(a+s)
            o.append(_bond(x,y,hx,hy,FG,1.5)+f'<circle cx="{hx:.1f}" cy="{hy:.1f}" r="4" fill="#fff" stroke="{FG}" stroke-width="1.2"/>')
        o.append(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="7" fill="{ACC}"/>')
    o.append(_tag(282,40,"B"))
    # C: two nonpolar side chains packed together
    for x0,dx in ((376,0),(404,0)):
        o.append(_poly([(x0+(8 if i%2 else -8),150-i*16) for i in range(6)],OIL,3.2))
    o.append(_tag(432,40,"C"))
    o.append('</svg>');return "".join(o)

def _titr_ph(v,pKa,V0=10.0,Ca=0.1,Cb=0.1):
    Ka=10**-pKa; Vt=V0+v; A=Ca*V0/Vt; Na=Cb*v/Vt
    lo,hi=-14.0,0.0
    for _ in range(80):
        m=(lo+hi)/2; H=10**m
        f=H+Na-1e-14/H-A*Ka/(Ka+H)
        if f>0: hi=m
        else: lo=m
    return -(lo+hi)/2
def _titrq(pKa,points=(),mark=None):
    L,R,Tp,B=50,462,14,238
    X=lambda v:L+(R-L)*v/20; Y=lambda p:B-(B-Tp)*p/14
    o=_q(480,288,14)
    for p in range(15):
        o.append(f'<line x1="{L}" y1="{Y(p):.1f}" x2="{R}" y2="{Y(p):.1f}" stroke="{"#e2e2e2" if p%2==0 else "#f1f1f1"}"/>')
        if p%2==0: o.append(T(L-7,Y(p)+5,p,text_anchor="end",fill=MUT,font_size="13"))
    for v in range(0,21,5):
        o.append(f'<line x1="{X(v):.1f}" y1="{Tp}" x2="{X(v):.1f}" y2="{B}" stroke="#ececec"/>'+T(X(v),B+18,v,text_anchor="middle",fill=MUT,font_size="13"))
    o.append(f'<line x1="{L}" y1="{B}" x2="{R}" y2="{B}" stroke="{FG}"/><line x1="{L}" y1="{Tp}" x2="{L}" y2="{B}" stroke="{FG}"/>')
    o.append(_poly([(X(i*0.025),Y(_titr_ph(i*0.025,pKa))) for i in range(801)],ACC,2.5))
    for lab,v in points:
        x,y=X(v),Y(_titr_ph(v,pKa)); o.append(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="5.5" fill="{FG}"/>'+T(x+9 if lab=="A" else x-13,y-10,lab,fill=FG,font_weight="700",font_size="16"))
    if mark is not None:
        x,y=X(mark),Y(_titr_ph(mark,pKa)); o.append(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="9" fill="none" stroke="{FG}" stroke-width="2"/><circle cx="{x:.1f}" cy="{y:.1f}" r="4" fill="{FG}"/>')
    o.append(T((L+R)/2,B+40,"base added (mL)",text_anchor="middle",fill=MUT))
    o.append(f'<text x="16" y="{(Tp+B)/2}" text-anchor="middle" fill="{MUT}" transform="rotate(-90 16 {(Tp+B)/2})">pH</text>')
    o.append('</svg>');return "".join(o)

def q_gi():
    L,R,Tp,B=56,462,20,212; Y=lambda p:B-(B-Tp)*p/7
    o=_q(480,262,14)
    for p in range(8):
        o.append(f'<line x1="{L}" y1="{Y(p):.1f}" x2="{R}" y2="{Y(p):.1f}" stroke="#ececec"/>'+T(L-8,Y(p)+5,p,text_anchor="end",fill=MUT,font_size="13"))
    o.append(f'<line x1="{L}" y1="{B}" x2="{R}" y2="{B}" stroke="{FG}"/><line x1="{L}" y1="{Tp}" x2="{L}" y2="{B}" stroke="{FG}"/>')
    for cx,p,lab in ((170,1.5,"stomach"),(350,3.5,"small intestine")):
        o.append(f'<rect x="{cx-50}" y="{Y(p):.1f}" width="100" height="{B-Y(p):.1f}" fill="#cfd8e6" stroke="{ACC}" stroke-width="1.5"/>')
        o.append(T(cx,Y(p)+22,f"pH {p}",text_anchor="middle",fill=FG,font_weight="600",font_size="14")+T(cx,B+20,lab,text_anchor="middle",fill=FG,font_size="14"))
    o.append(f'<line x1="{L}" y1="{Y(3.5):.1f}" x2="{R}" y2="{Y(3.5):.1f}" stroke="{FG}" stroke-width="2" stroke-dasharray="7 5"/>')
    o.append(f'<text x="18" y="{(Tp+B)/2}" text-anchor="middle" fill="{MUT}" transform="rotate(-90 18 {(Tp+B)/2})">pH</text>')
    o.append('</svg>');return "".join(o)

_EQ=('CO<tspan dy="4" font-size="12">2</tspan><tspan dy="-4"> + H</tspan><tspan dy="4" font-size="12">2</tspan><tspan dy="-4">O  ⇌  H</tspan><tspan dy="4" font-size="12">2</tspan><tspan dy="-4">CO</tspan><tspan dy="4" font-size="12">3</tspan>'
     '<tspan dy="-4">  ⇌  H</tspan><tspan dy="-7" font-size="12">+</tspan><tspan dy="7"> + HCO</tspan><tspan dy="4" font-size="12">3</tspan><tspan dy="-11" font-size="12">−</tspan>')
def q_bicarbeq(arrow=False):
    h=150 if arrow else 84
    o=_q(480,h,19)+[f'<defs><marker id="qb" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="3.2" markerHeight="3.2" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="{ACC}"/></marker></defs>']
    o.append(f'<text x="240" y="50" text-anchor="middle" font-size="20" fill="{FG}" style="white-space:pre">{_EQ}</text>')
    if arrow: o.append(f'<line x1="400" y1="104" x2="86" y2="104" stroke="{ACC}" stroke-width="6" marker-end="url(#qb)"/>')
    o.append('</svg>');return "".join(o)

def q_ratio3():
    L,R,Tp,B=58,468,46,236; ymax=35; Y=lambda v:B-(B-Tp)*v/ymax
    o=_q(480,284,14)
    for v in range(0,36,5):
        o.append(f'<line x1="{L}" y1="{Y(v):.1f}" x2="{R}" y2="{Y(v):.1f}" stroke="#ececec"/>'+T(L-7,Y(v)+5,v,text_anchor="end",fill=MUT,font_size="13"))
    o.append(f'<line x1="{L}" y1="{B}" x2="{R}" y2="{B}" stroke="{FG}"/><line x1="{L}" y1="{Tp}" x2="{L}" y2="{B}" stroke="{FG}"/>')
    GRY="#9aa3ad"
    for i,(hc,ha) in enumerate(((24,1.2),(30,3.0),(18,0.6))):
        cx=L+(R-L)*(i+0.5)/3
        for dx,v,c in ((-20,hc,ACC),(20,ha,GRY)):
            o.append(f'<rect x="{cx+dx-17:.1f}" y="{Y(v):.1f}" width="34" height="{B-Y(v):.1f}" fill="{c}"/>'+T(cx+dx,Y(v)-6,f"{v:.1f}" if v<5 else f"{v:g}",text_anchor="middle",fill=FG,font_size="13"))
        o.append(T(cx,B+20,f"Patient {i+1}",text_anchor="middle",fill=FG,font_weight="600"))
    o.append(f'<rect x="120" y="12" width="14" height="14" fill="{ACC}"/>'+T(140,24,"HCO₃⁻",fill=FG)+f'<rect x="250" y="12" width="14" height="14" fill="{GRY}"/>'+T(270,24,"H₂CO₃",fill=FG))
    o.append(f'<text x="16" y="{(Tp+B)/2}" text-anchor="middle" fill="{MUT}" font-size="13" transform="rotate(-90 16 {(Tp+B)/2})">plasma concentration (mM)</text>')
    o.append('</svg>');return "".join(o)

QF1={"q-ester":q_ester(),"q-mono4":q_mono4(),"q-side4":q_side4(),"q-bilayer2":q_bilayer2(),"q-dna2":q_dna2(),
 "q-contact4":q_contact4(),"q-hydr2":q_hydr2(),"q-amph3":q_amph3(),"q-surf3":q_surf3(),
 "q-titr":_titrq(4.8,points=[("A",0.3),("B",5),("C",9.7),("D",17)]),"q-titr0":_titrq(4.8),"q-titr9":_titrq(9.0,mark=8),
 "q-gi":q_gi(),"q-bicarbeq":q_bicarbeq(),"q-bicarbleft":q_bicarbeq(True),"q-ratio3":q_ratio3()}

qfigs={"q-energy4":q_energy4(),"q-mm4":q_mm4(),"q-lbread":q_lbread(),
 "q-lb2":_lbq([(0.3,0.6,FG),(0.4,0.2,ACC)],xr=(-2.4,2.4),ymax=1.6,tags=["X","Y"]),
 "q-mmcomp":_mmq([(2,1,FG),(2,4,ACC)],smax=40,ymax=2.3,legend=["no inhibitor","+ inhibitor"],dashed=2),
 "q-lbpar":_lbq([(0.5,0.5,FG),(0.5,1.0,ACC)],xr=(-2.4,2.4),ymax=2.4,legend=["no inhibitor","+ inhibitor"]),
 "q-lby":_lbq([(0.4,0.5,FG),(1.2,0.5,ACC)],xr=(-1.6,1.6),ymax=2.4,legend=["no inhibitor","+ inhibitor"]),
 "q-mm2e":_mmq([(1,1.5,FG),(2,1.5,ACC)],smax=12,ymax=2.2,legend=["1× enzyme","2× enzyme"]),
 "q-ph2":q_ph2(),"q-temp2":q_temp2(),"q-path":q_path(),"q-struct4":q_struct4(),"q-parts":q_parts(),"q-endo":q_endo(),"q-allo":q_allo()}


# ---------- Module 3 guide figures ----------
OKC="#1d7a3a"; BADC="#b42318"; GRY="#9aa3ad"; SOFT="#eef2f9"
def _box(x,y,w,h,s,col=FG,fill="#fff",fs="13",bold=False,rx=6,sub=None):
    o=f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{rx}" fill="{fill}" stroke="{col}" stroke-width="1.5"/>'
    cy=y+h/2+(0 if sub else 4.5)-(6 if sub else 0)
    o+=T(x+w/2,cy+(4 if sub else 0),s,text_anchor="middle",fill=FG,font_size=fs,**({"font_weight":"600"} if bold else {}))
    if sub: o+=T(x+w/2,cy+19,sub,text_anchor="middle",fill=MUT,font_size="11.5")
    return o
def _arr(x1,y1,x2,y2,id,col=FG,w=2,dash=None):
    d=f' stroke-dasharray="{dash}"' if dash else ""
    return f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="{col}" stroke-width="{w}"{d} marker-end="url(#{id})"/>'

def m3_metab():
    o=_svg(660,250,13)+[_ah("ma",FG),_ah("mb",ACC)]
    def chain(x0,y):
        s=""
        for i in range(6):
            s+=f'<circle cx="{x0+i*20}" cy="{y}" r="8" fill="#fff" stroke="{FG}" stroke-width="1.5"/>'
            if i<5: s+=f'<line x1="{x0+i*20+8}" y1="{y}" x2="{x0+i*20+12}" y2="{y}" stroke="{FG}" stroke-width="2"/>'
        return s
    def loose(pts): return "".join(f'<circle cx="{x}" cy="{y}" r="8" fill="#fff" stroke="{FG}" stroke-width="1.5"/>' for x,y in pts)
    o.append(T(20,24,"Catabolism",fill=FG,font_weight="600")+T(104,24,"large molecules broken down, usually by oxidation; energy released",fill=MUT,font_size="12"))
    o.append(chain(30,62)+_arr(150,62,480,62,"ma")+loose([(505,52),(530,72),(552,50),(578,70),(602,52),(628,72)]))
    o.append(T(315,52,"glycolysis, β-oxidation, CAC",text_anchor="middle",fill=MUT,font_size="12"))
    o.append(_arr(300,66,300,100,"mb",ACC))
    o.append(f'<rect x="210" y="104" width="240" height="44" rx="6" fill="{SOFT}" stroke="{ACC}" stroke-width="1.5"/>')
    o.append(T(330,122,"activated carriers",text_anchor="middle",fill=ACC,font_weight="600")+T(330,140,"ATP · NADH · FADH₂ · NADPH",text_anchor="middle",fill=FG,font_size="12"))
    o.append(_arr(360,150,360,184,"mb",ACC))
    o.append(loose([(32,178),(58,198),(80,176),(106,196),(128,178),(150,198)])+_arr(172,188,480,188,"ma")+chain(510,188))
    o.append(T(315,208,"gluconeogenesis, fatty acid synthesis",text_anchor="middle",fill=MUT,font_size="12"))
    o.append(T(20,240,"Anabolism",fill=FG,font_weight="600")+T(100,240,"small molecules joined into larger ones; energy used",fill=MUT,font_size="12"))
    o.append('</svg>');return "".join(o)

def m3_stages():
    o=_svg(660,340,13)+[_ah("sa",FG),_ah("sb",ACC)]
    o.append(f'<rect x="150" y="146" width="500" height="186" rx="14" fill="none" stroke="{ACC}" stroke-width="1.5" stroke-dasharray="6 4"/>'+T(640,164,"mitochondrion",text_anchor="end",fill=ACC,font_size="12",font_weight="600"))
    for y,a,b in ((44,"Stage 1","digestion"),(150,"Stage 2","to acetyl CoA"),(256,"Stage 3","respiration")):
        o.append(T(14,y,a,fill=FG,font_weight="600")+T(14,y+17,b,fill=MUT,font_size="12"))
    xs=(225,385,545)
    for x,f,s in zip(xs,("Proteins","Polysaccharides","Fats"),("Amino acids","Glucose","Fatty acids, glycerol")):
        o.append(_box(x-70,22,140,30,f)+_arr(x,52,x,80,"sa")+_box(x-70,82,140,30,s))
    o.append(_arr(225,112,360,176,"sa")+_arr(385,112,385,172,"sa")+_arr(545,112,410,176,"sa"))
    o.append(T(392,140,"pyruvate",fill=MUT,font_size="11.5")+T(500,140,"β-oxidation",fill=MUT,font_size="11.5"))
    o.append(f'<rect x="325" y="176" width="120" height="30" rx="6" fill="{SOFT}" stroke="{ACC}" stroke-width="1.5"/>'+T(385,196,"Acetyl CoA",text_anchor="middle",fill=ACC,font_weight="600"))
    o.append(T(462,196,"a little ATP, NADH",fill=MUT,font_size="12"))
    o.append(_arr(385,206,385,236,"sa"))
    o.append(f'<circle cx="385" cy="270" r="32" fill="#fff" stroke="{ACC}" stroke-width="2"/>'+T(385,266,"citric acid",text_anchor="middle",fill=FG,font_size="12")+T(385,281,"cycle",text_anchor="middle",fill=FG,font_size="12"))
    o.append(_arr(352,270,280,270,"sa")+T(270,275,"2 CO₂",text_anchor="end",fill=FG))
    o.append(_arr(418,270,478,270,"sb",ACC)+T(448,262,"NADH",text_anchor="middle",fill=ACC,font_size="11.5")+T(448,288,"FADH₂",text_anchor="middle",fill=ACC,font_size="11.5"))
    o.append(_box(482,250,150,40,"Ox phos",bold=True,sub="ETC + ATP synthase"))
    o.append(T(557,312,"O₂ → H₂O,  lots of ATP",text_anchor="middle",fill=FG,font_size="12"))
    o.append('</svg>');return "".join(o)

def m3_atpcyc():
    o=_svg(660,230,14)+[_ah("aa",ACC),_ah("ab",FG)]
    o.append(_box(275,24,110,34,"ATP",col=ACC,fill=SOFT,fs="16",bold=True)+_box(265,168,130,34,"ADP + Pi",fs="15",bold=True))
    o.append(f'<path d="M392 52 C460 80 460 150 400 176" fill="none" stroke="{ACC}" stroke-width="2.5" marker-end="url(#aa)"/>')
    o.append(f'<path d="M262 176 C200 150 200 80 268 52" fill="none" stroke="{FG}" stroke-width="2.5" marker-end="url(#ab)"/>')
    o.append(T(462,90,"hydrolysis",fill=ACC,font_weight="600")+T(462,108,"ΔG°′ = −30.5 kJ/mol",fill=ACC,font_size="12.5"))
    o.append(T(198,90,"condensation",text_anchor="end",fill=FG,font_weight="600")+T(198,108,"needs +30.5 kJ/mol",text_anchor="end",fill=FG,font_size="12.5"))
    o.append(_arr(458,160,540,160,"aa",ACC)+T(548,164,"work",fill=FG,font_size="12.5",font_weight="600"))
    o.append(T(548,182,"motion, transport,",fill=MUT,font_size="11.5")+T(548,197,"biosynthesis",fill=MUT,font_size="11.5"))
    o.append(_arr(120,160,202,160,"ab")+T(112,164,"fuel oxidation",text_anchor="end",fill=FG,font_size="12.5",font_weight="600"))
    o.append(T(112,182,"carbs, fats",text_anchor="end",fill=MUT,font_size="11.5")+T(112,197,"(catabolism)",text_anchor="end",fill=MUT,font_size="11.5"))
    o.append('</svg>');return "".join(o)

def m3_ptp():
    rows=[("Phosphoenolpyruvate",61.9),("1,3-Bisphosphoglycerate",49.4),("Creatine phosphate",43.0),("ATP (→ ADP + Pi)",30.5),("Glucose 6-phosphate",13.8),("Glycerol 3-phosphate",9.2)]
    o=_svg(660,334,13)+[_ah("pa",FG),_ah("pb",ACC)]
    o.append(T(20,22,"Standard free energy of phosphate hydrolysis (−ΔG°′, kJ/mol; textbook values)",fill=MUT,font_size="12"))
    for i,(n,v) in enumerate(rows):
        y=50+i*42; atp=i==3
        o.append(T(196,y+5,n,text_anchor="end",fill=ACC if atp else FG,font_weight="600" if atp else "400"))
        o.append(f'<rect x="206" y="{y-11}" width="{v*4.6:.1f}" height="22" fill="{ACC if atp else "#c9d3e3"}"/>'+T(212+v*4.6,y+5,f"{v:g}",fill=FG,font_size="12.5"))
    o.append(f'<path d="M560 52 C600 70 600 150 572 172" fill="none" stroke="{FG}" stroke-width="2" marker-end="url(#pa)"/>'+T(604,104,"Pi to",fill=FG,font_size="12")+T(604,120,"ADP",fill=FG,font_size="12"))
    o.append(f'<path d="M560 182 C600 200 600 236 572 254" fill="none" stroke="{ACC}" stroke-width="2" marker-end="url(#pb)"/>'+T(604,214,"Pi to",fill=ACC,font_size="12")+T(604,230,"glucose",fill=ACC,font_size="12"))
    o.append(T(20,306,"Higher on the ladder = higher phosphoryl-transfer potential.",fill=MUT,font_size="12")+T(20,323,"ATP sits in the middle, so ADP can take Pi from above and ATP can give it below.",fill=MUT,font_size="12"))
    o.append('</svg>');return "".join(o)

CAC_NODES=[("oxaloacetate","4C"),("citrate","6C"),("isocitrate","6C"),("α-ketoglutarate","5C"),("succinyl CoA","4C"),("succinate","4C"),("fumarate","4C"),("malate","4C")]
def _wheel(o,cx,cy,r,key=(1,3,4,6),labels=True,inner=True,qletters=None):
    o.append(f'<defs><marker id="wa" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="{ACC}"/></marker><marker id="wb" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="{GRY}"/></marker></defs>')
    ang=lambda k:math.radians(-22.5+45*k)
    P=lambda a,rr:(cx+rr*math.sin(a),cy-rr*math.cos(a))
    for k in range(8):
        a0,a1=ang(k)+0.13,ang(k+1)-0.13; hot=(k+1) in key
        (x0,y0),(x1,y1)=P(a0,r),P(a1,r)
        o.append(f'<path d="M{x0:.1f} {y0:.1f} A{r} {r} 0 0 1 {x1:.1f} {y1:.1f}" fill="none" stroke="{ACC if hot else GRY}" stroke-width="{3.2 if hot else 1.8}" marker-end="url(#{"wa" if hot else "wb"})"/>')
        mx,my=P(ang(k)+math.radians(22.5),r)
        if qletters is None or hot:
            lab=str(k+1) if qletters is None else qletters[key.index(k+1)]
            o.append(_num(round(mx,1),round(my,1),lab,ACC if hot else GRY))
    for k,(n,c) in enumerate(CAC_NODES):
        a=ang(k); x,y=P(a,r); o.append(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="4" fill="{FG}"/>')
        if labels:
            s=math.sin(a); lx,ly=P(a,r+14); anc="start" if s>0.3 else ("end" if s<-0.3 else "middle")
            ly+=4+(6 if math.cos(a)<-0.5 else 0)-(2 if math.cos(a)>0.5 else 0)
            o.append(T(lx,ly,f"{n} ({c})",text_anchor=anc,fill=FG,font_size="12.5"))
    return P,ang

def m3_cacw():
    o=_svg(660,330,13)+[_ah("wc",FG)]
    cx,cy,r=215,180,100
    P,ang=_wheel(o,cx,cy,r)
    o.append(f'<path d="M{cx} 30 L{cx} {cy-r-6}" stroke="{FG}" stroke-width="2" marker-end="url(#wc)"/>'+T(cx+8,40,"acetyl CoA (2C)",fill=FG,font_size="12.5",font_weight="600"))
    for k,s,anc,rr in ((2,"CO₂ + NADH","end",r-32),(3,"CO₂ + NADH","middle",r-38),(4,"GTP (ATP)","middle",r-30),(5,"FADH₂","middle",r-38),(7,"NADH","start",r-32)):
        x,y=P(ang(k)+math.radians(22.5),rr)
        o.append(T(x,y+4,s,text_anchor=anc,fill=ACC if k!=4 and k!=7 else MUT,font_size="12"))
    lg=[("1","Citrate synthase","2C + 4C → 6C (joins)"),("3","Isocitrate DH","6C → 5C; 1st CO₂, NADH"),("4","α-KG DH complex","5C → 4C; 2nd CO₂, NADH"),("6","Succinate DH","FADH₂; also Complex II")]
    for i,(n,a,b) in enumerate(lg):
        y=70+i*58
        o.append(_num(468,y,n,ACC)+T(486,y+5,a,fill=FG,font_weight="600")+T(486,y+23,b,fill=MUT,font_size="12"))
    o.append(T(468,306,"Gray steps: not required by name.",fill=MUT,font_size="12"))
    o.append('</svg>');return "".join(o)

def m3_cacreg():
    o=_svg(660,300,13)+[_ah("ra",FG)]
    cols=[("Acetyl CoA formation","pyruvate → acetyl CoA",[("−","ATP"),("−","NADH"),("−","acetyl CoA")]),
          ("Citrate synthase","step 1",[("−","citrate (product)"),("−","ATP")]),
          ("Isocitrate DH","step 3",[("+","Ca²⁺"),("+","ADP"),("○","needs NAD⁺"),("−","NADH")]),
          ("α-KG DH complex","step 4",[("+","Ca²⁺"),("○","needs NAD⁺, thiamine"),("−","NADH"),("−","ammonia")])]
    xs=[83,246,409,572]
    for i,((n,s,eff),x) in enumerate(zip(cols,xs)):
        o.append(f'<rect x="{x-76}" y="20" width="152" height="46" rx="6" fill="{SOFT}" stroke="{ACC}" stroke-width="1.5"/>'+T(x,40,n,text_anchor="middle",fill=ACC,font_weight="600",font_size="12.5")+T(x,57,s,text_anchor="middle",fill=MUT,font_size="11.5"))
        if i<3: o.append(_arr(x+78,43,xs[i+1]-80,43,"ra",FG,1.5))
        for j,(sg,t) in enumerate(eff):
            y=96+j*30; col=OKC if sg=="+" else (BADC if sg=="−" else FG)
            o.append((f'<circle cx="{x-62}" cy="{y-4}" r="8" fill="#fff" stroke="{FG}" stroke-width="1.6"/>' if sg=="○" else f'<circle cx="{x-62}" cy="{y-4}" r="9" fill="{col}"/>'+T(x-62,y+1,"+" if sg=="+" else "−",text_anchor="middle",fill="#fff",font_weight="700",font_size="14"))+T(x-48,y+1,t,fill=FG,font_size="12.5"))
    o.append(f'<line x1="10" y1="226" x2="650" y2="226" stroke="{LINE}"/>')
    o.append(T(20,250,"Green = activates, red = inhibits, open circle = required cofactor.",fill=FG,font_size="12"))
    o.append(T(20,268,"High NADH leaves little free NAD⁺, so both dehydrogenases slow. Not primary: succinate DH, malate DH.",fill=FG,font_size="12"))
    o.append(T(20,288,"Poisons, not regulation: fluoroacetate (citrate → isocitrate), arsenite (α-KG DH), malonate (succinate DH).",fill=MUT,font_size="12"))
    o.append('</svg>');return "".join(o)

def _membrane(o,x0,x1,y0,y1):
    o.append(f'<rect x="{x0}" y="{y0}" width="{x1-x0}" height="{y1-y0}" fill="#f4efe1"/>')
    o.append(f'<line x1="{x0}" y1="{y0}" x2="{x1}" y2="{y0}" stroke="{OIL}" stroke-width="1.5"/><line x1="{x0}" y1="{y1}" x2="{x1}" y2="{y1}" stroke="{OIL}" stroke-width="1.5"/>')

def m3_etc(q=False):
    W=420 if q else 660
    o=(_q(W,300,15) if q else _svg(W,320,13))+[_ah("ea3",ACC),_ah("eb3",FG),_ah("ec3",OKC)]
    s=W/660
    X=lambda x:round(x*s,1)
    _membrane(o,0,W,110,160)
    if not q:
        o.append(T(12,24,"intermembrane space (more H⁺)",fill=FG,font_weight="600",font_size="12.5"))
        o.append(T(12,304,"matrix (fewer H⁺)",fill=FG,font_weight="600",font_size="12.5"))
        o.append(T(522,139,"inner membrane",text_anchor="middle",fill=OIL,font_size="11.5"))
    cx={"I":75,"II":185,"III":315,"IV":445,"V":590}
    for k,x in cx.items():
        if k=="II": o.append(f'<rect x="{X(x)-24}" y="150" width="48" height="36" rx="7" fill="#fff" stroke="{FG}" stroke-width="1.8"/>')
        elif k=="V":
            o.append(f'<rect x="{X(x)-20}" y="96" width="40" height="70" rx="6" fill="#fff" stroke="{FG}" stroke-width="1.8"/><rect x="{X(x)-6}" y="166" width="12" height="20" fill="{FG}"/><ellipse cx="{X(x)}" cy="206" rx="34" ry="22" fill="#fff" stroke="{FG}" stroke-width="1.8"/>')
        else: o.append(f'<rect x="{X(x)-30}" y="92" width="60" height="86" rx="8" fill="#fff" stroke="{FG}" stroke-width="1.8"/>')
        if q:
            ty={"II":168,"V":131}.get(k,135); n={"I":"1","II":"2","III":"3","IV":"4","V":"5"}[k]
            o.append(f'<circle cx="{X(x)}" cy="{ty}" r="15" fill="#fff" stroke="{FG}" stroke-width="1.8"/>'+T(X(x),ty+6,n,text_anchor="middle",fill=FG,font_weight="700",font_size="18"))
        else:
            ty={"II":173,"V":136}.get(k,140); o.append(T(X(x),ty,k,text_anchor="middle",fill=FG,font_weight="700",font_size="15"))
    # mobile carriers
    o.append(f'<circle cx="{X(250)}" cy="135" r="13" fill="{SOFT}" stroke="{ACC}" stroke-width="1.5"/>'+T(X(250),140,"Q" if not q else "",text_anchor="middle",fill=ACC,font_weight="700"))
    o.append(f'<circle cx="{X(380)}" cy="86" r="13" fill="{SOFT}" stroke="{ACC}" stroke-width="1.5"/>'+T(X(380),90,"c" if not q else "",text_anchor="middle",fill=ACC,font_weight="700"))
    # electron path
    ep=f'stroke="{ACC}" stroke-width="2" stroke-dasharray="5 3" fill="none" marker-end="url(#ea3)"'
    o.append(f'<path d="M{X(100)} 140 L{X(236)} 137" {ep}/><path d="M{X(196)} 152 L{X(240)} 146" {ep}/><path d="M{X(264)} 135 L{X(286)} 135" {ep}/>')
    o.append(f'<path d="M{X(330)} 94 Q{X(345)} 78 {X(366)} 83" {ep}/><path d="M{X(394)} 84 Q{X(415)} 80 {X(428)} 94" {ep}/>')
    # substrates
    o.append(f'<path d="M{X(55)} 236 L{X(65)} 182" stroke="{FG}" stroke-width="1.8" fill="none" marker-end="url(#eb3)"/>')
    o.append(f'<path d="M{X(170)} 236 L{X(178)} 190" stroke="{FG}" stroke-width="1.8" fill="none" marker-end="url(#eb3)"/>')
    o.append(f'<path d="M{X(455)} 182 L{X(465)} 232" stroke="{FG}" stroke-width="1.8" fill="none" marker-end="url(#eb3)"/>')
    if not q:
        o.append(T(X(40),254,"NADH → NAD⁺",fill=FG,font_size="12.5")+T(X(150),254,"FADH₂ → FAD",fill=FG,font_size="12.5"))
        o.append(T(X(150),270,"(succinate → fumarate)",fill=MUT,font_size="11.5")+T(X(430),250,"½O₂ + 2H⁺ → H₂O",fill=FG,font_size="12.5"))
        o.append(T(X(590),252,"ADP + Pi → ATP",text_anchor="middle",fill=OKC,font_weight="600",font_size="12.5"))
    # protons
    for k,n in (("I",4),("III",4),("IV",3)):
        d=22 if q else 14; x=X(cx[k])+(d if k!="IV" else -d)
        o.append(f'<path d="M{x} 172 L{x} 52" stroke="{FG}" stroke-width="1.6" fill="none" marker-end="url(#eb3)"/>')
        if not q: o.append(T(x+(6 if k!="IV" else -6),48,f"{n} H⁺",text_anchor="start" if k!="IV" else "end",fill=FG,font_size="12.5",font_weight="600"))
    o.append(f'<path d="M{X(590)+30} 50 L{X(590)+30} 186" stroke="{OKC}" stroke-width="2" fill="none" marker-end="url(#ec3)"/>')
    if not q:
        o.append(T(X(590)+36,62,"H⁺",fill=OKC,font_size="12.5",font_weight="600"))
        o.append(T(X(215),182,"pumps 0 H⁺",fill=MUT,font_size="11.5"))
    o.append('</svg>');r="".join(o)
    if q: r=r.replace('viewBox="0 0 420 300"','viewBox="0 40 420 200"',1).replace('<rect width="420" height="300"','<rect y="40" width="420" height="200"',1)
    return r

def m3_leak():
    o=_svg(660,250,13)+[_ah("la",FG),_ah("lb",OKC),_ah("lc",BADC)]
    for ox,title,leak in ((0,"Coupled",False),(340,"Uncoupled",True)):
        o.append(T(ox+160,22,title,text_anchor="middle",fill=FG,font_weight="700",font_size="14"))
        _membrane(o,ox+10,ox+310,100,140)
        o.append(f'<rect x="{ox+30}" y="84" width="70" height="72" rx="8" fill="#fff" stroke="{FG}" stroke-width="1.8"/>'+T(ox+65,124,"ETC",text_anchor="middle",fill=FG,font_weight="700"))
        o.append(f'<path d="M{ox+65} 196 L{ox+65} 46" stroke="{FG}" stroke-width="1.8" fill="none" marker-end="url(#la)"/>'+T(ox+74,52,"H⁺ pumped",fill=FG,font_size="12"))
        o.append(T(ox+65,214,"O₂ used",text_anchor="middle",fill=FG,font_size="12"))
        o.append(f'<rect x="{ox+240}" y="80" width="40" height="66" rx="6" fill="#fff" stroke="{FG}" stroke-width="1.8"/><rect x="{ox+254}" y="146" width="12" height="16" fill="{FG}"/><ellipse cx="{ox+260}" cy="178" rx="30" ry="18" fill="#fff" stroke="{FG}" stroke-width="1.8"/>'+T(ox+260,118,"V",text_anchor="middle",fill=FG,font_weight="700"))
        if not leak:
            o.append(f'<path d="M{ox+295} 50 L{ox+295} 170" stroke="{OKC}" stroke-width="2.2" fill="none" marker-end="url(#lb)"/>')
            o.append(T(ox+260,222,"ATP made",text_anchor="middle",fill=OKC,font_weight="600",font_size="12.5"))
            o.append(T(ox+160,242,"gradient stays high",text_anchor="middle",fill=MUT,font_size="12"))
        else:
            o.append(f'<rect x="{ox+150}" y="96" width="30" height="48" rx="5" fill="#fff" stroke="{BADC}" stroke-width="1.8"/>')
            o.append(f'<path d="M{ox+165} 50 L{ox+165} 168" stroke="{BADC}" stroke-width="2.2" fill="none" marker-end="url(#lc)"/>')
            o.append(T(ox+165,188,"heat",text_anchor="middle",fill=BADC,font_weight="600",font_size="12.5"))
            o.append(T(ox+165,206,"UCP1 or DNP",text_anchor="middle",fill=BADC,font_size="12"))
            o.append(T(ox+260,222,"little ATP",text_anchor="middle",fill=MUT,font_size="12.5"))
            o.append(T(ox+160,242,"gradient collapses",text_anchor="middle",fill=MUT,font_size="12"))
    o.append(f'<line x1="330" y1="10" x2="330" y2="240" stroke="{LINE}"/>')
    o.append('</svg>');return "".join(o)

M3F={"m3metab":m3_metab(),"m3stages":m3_stages(),"m3atp":m3_atpcyc(),"m3ptp":m3_ptp(),"m3cacw":m3_cacw(),"m3cacreg":m3_cacreg(),"m3etc":m3_etc(),"m3leak":m3_leak()}


# ---------- Module 3 question figures (unlabeled) ----------
def q_dg3():
    o=_q(480,270,15)
    L,R,Tp,B=60,460,20,240; Y0=(Tp+B)/2; sc=(B-Tp)/2/36
    Y=lambda v:Y0-v*sc
    o.append(f'<line x1="{L}" y1="{Y0}" x2="{R}" y2="{Y0}" stroke="{FG}"/><line x1="{L}" y1="{Tp}" x2="{L}" y2="{B}" stroke="{FG}"/>')
    for v in (30,15,-15,-30):
        o.append(f'<line x1="{L-4}" y1="{Y(v):.1f}" x2="{R}" y2="{Y(v):.1f}" stroke="#eee"/>'+T(L-8,Y(v)+5,f"{v:+d}".replace("-","−"),text_anchor="end",fill=MUT,font_size="13"))
    o.append(T(L-8,Y0+5,"0",text_anchor="end",fill=MUT,font_size="13"))
    for i,(n,v) in enumerate((("X",25),("Y",-14),("Z",-32))):
        cx=L+70+i*130; top=min(Y(v),Y0); h=abs(Y(v)-Y0)
        o.append(f'<rect x="{cx-30}" y="{top:.1f}" width="60" height="{h:.1f}" fill="{ACC if v>0 else "#c9d3e3"}" stroke="{ACC}"/>')
        o.append(T(cx,(Y(v)-8) if v>0 else (Y(v)+20),f"{v:+d}".replace("-","−"),text_anchor="middle",fill=FG,font_weight="600"))
        o.append(T(cx,Y0+(22 if v>0 else -10),n,text_anchor="middle",fill=FG,font_weight="700",font_size="17"))
    o.append(f'<text x="18" y="{Y0}" text-anchor="middle" fill="{MUT}" font-size="13" transform="rotate(-90 18 {Y0})">ΔG°′ (kJ/mol)</text>')
    o.append('</svg>');return "".join(o)

def q_ptp4():
    rows=[("P",52.0),("ATP",30.5),("Q",21.0),("R",9.0)]
    o=_q(480,230,15)
    o.append(T(20,24,"−ΔG°′ of phosphate hydrolysis (kJ/mol)",fill=MUT,font_size="13"))
    for i,(n,v) in enumerate(rows):
        y=60+i*44; atp=n=="ATP"
        o.append(T(70,y+6,n,text_anchor="end",fill=ACC if atp else FG,font_weight="700",font_size="16"))
        o.append(f'<rect x="82" y="{y-13}" width="{v*6.4:.1f}" height="26" fill="{ACC if atp else "#c9d3e3"}"/>'+T(90+v*6.4,y+6,f"{v:g}",fill=FG,font_size="14"))
    o.append('</svg>');return "".join(o)

def q_cac4():
    o=_q(480,330,15)+[_ah("wc",FG)]
    cx,cy,r=240,175,105
    P,ang=_wheel(o,cx,cy,r,labels=False,qletters=["B","D","A","C"])
    for k,(n,c) in enumerate(CAC_NODES):
        a=ang(k); s=math.sin(a); lx,ly=P(a,r+16); anc="start" if s>0.3 else ("end" if s<-0.3 else "middle")
        ly+=5+(8 if math.cos(a)<-0.5 else 0)-(2 if math.cos(a)>0.5 else 0)
        o.append(T(lx,ly,c,text_anchor=anc,fill=FG,font_weight="600"))
    o.append(f'<path d="M{cx} 20 L{cx} {cy-r-8}" stroke="{FG}" stroke-width="2" marker-end="url(#wc)"/>'+T(cx+10,32,"2C",fill=FG,font_weight="600"))
    o.append('</svg>');return "".join(o)

def q_o2():
    o=_q(480,280,15)
    L,R,Tp,B=56,460,20,226
    X=lambda t:L+(R-L)*t/10; Y=lambda v:B-(B-Tp)*v/100
    o.append(_axes(L,Tp,R,B,"time →","O₂ remaining"))
    pts=[(0,92),(3,74),(5,34),(10,34)]
    o.append(_poly([(X(t),Y(v)) for t,v in pts],ACC,3))
    for t,v,n in ((3,74,"1"),(5,34,"2")):
        o.append(f'<line x1="{X(t)}" y1="{Y(v)-14}" x2="{X(t)}" y2="{Y(v)-40}" stroke="{FG}" stroke-width="1.5"/>'+_num(X(t),Y(v)-52,n))
    o.append('</svg>');return "".join(o)

QF3={"q-dg3":q_dg3(),"q-ptp4":q_ptp4(),"q-cac4":q_cac4(),"q-etc5":m3_etc(q=True),"q-o2":q_o2()}

figs={"energy":energy(),"mm":mmfig(),"lb":lbfig(),"inhib3":inhib3(),"temp":tempfig(),"ph":phfig(),"feedback":feedback(),"levels":levels(),"bilayer":bilayer(),"fold":fold(),"dna":dna(),"hydro":hydro(),"bicarb":bicarb(),"titr":titr(),"classes":classes(),"water":water(),"aagrid":aagrid(),"forces":forces(),"phscale":phscale(),**qfigs,**QF1,**M3F,**QF3}
here=os.path.dirname(os.path.abspath(__file__))
open(os.path.join(here,"figs.js"),"w").write("const FIGS="+json.dumps(figs,ensure_ascii=False)+";\n")
for k,v in figs.items():
    if v.startswith("<svg"): open(f"/tmp/fig_{k}.svg","w").write(v)
print("ok")
