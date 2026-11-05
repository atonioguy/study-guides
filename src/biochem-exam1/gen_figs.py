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

figs={"hydro":hydro(),"bicarb":bicarb(),"titr":titr()}
here=os.path.dirname(os.path.abspath(__file__))
open(os.path.join(here,"figs.js"),"w").write("const FIGS="+json.dumps(figs,ensure_ascii=False)+";\n")
for k,v in figs.items(): open(f"/tmp/fig_{k}.svg","w").write(v)
print("ok")
