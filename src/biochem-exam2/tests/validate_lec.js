// Checks the lecture-window map. Run: node tests/validate_lec.js  (from src/biochem-exam2)
// Every non-beyond question in a module with a lecture needs lec:{b,hl}; the block must exist in
// lectures/biochem-exam2/<mod>.json, sit in the chapter named by q.src, and contain hl verbatim inside one
// text element (hl may be a list of snippets, each checked; optional fig names an image block in the same chapter, optional ans needs a block with check-yourself answers) (p, li, td, th, h4, h5, summary, b in hotspot lists) with tags stripped and whitespace collapsed.
// The same segment rule is what the page uses to find and highlight the snippet.
const fs=require('fs'),path=require('path');
const here=path.join(__dirname,'..');global.MODS=[];global.FIGS={};
for(const m of ['m4.js','m5.js'])if(fs.existsSync(path.join(here,m)))eval(fs.readFileSync(path.join(here,m),'utf8'));
const ent=s=>s.replace(/&nbsp;/g,' ').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,'&');
const norm=s=>s.replace(/\s+/g,' ').trim();
const SEG=/<\/?(?:p|li|td|th|h4|h5|summary|figcaption|caption|div|ul|ol|table|tr|details|figure)\b[^>]*>/g;
const segs=h=>h.split(SEG).map(x=>norm(ent(x.replace(/<[^>]+>/g,'')))).filter(Boolean);
let bad=0,n=0;
for(const M of MODS){if(!M.lecture)continue;
  const L=JSON.parse(fs.readFileSync(path.join(here,'..','..','lectures','biochem-exam2',M.lecture+'.json'),'utf8')).lessons;
  const blk={};for(const k in L)for(const b of L[k].b)blk[b.id]={L:k,h:b.h};
  for(const q of M.questions){
    if(q.tag==='beyond'){if(q.lec){console.log('beyond question has lec',q.id);bad++;}continue;}
    n++;
    if(!q.lec){console.log('missing lec',q.id);bad++;continue;}
    const b=blk[q.lec.b];
    if(!b){console.log('no block',q.id,q.lec.b);bad++;continue;}
    if(b.L!==q.src){console.log('chapter mismatch',q.id,q.lec.b,'src',q.src);bad++;}
    const ss=segs(b.h);
    if(q.lec.fig){const f=blk[q.lec.fig];if(!f){console.log('no fig block',q.id,q.lec.fig);bad++;}else if(f.L!==q.src||!/<img\b/.test(f.h)){console.log('fig block not a figure in',q.src,q.id,q.lec.fig);bad++;}}
    if(q.lec.ans&&!/class="lw-ans"/.test(b.h)){console.log('ans set but block has no answers',q.id,q.lec.b);bad++;}
    for(const hl of [].concat(q.lec.hl))if(!ss.some(s=>s.includes(norm(hl)))){console.log('hl not found',q.id,q.lec.b,JSON.stringify(hl));bad++;}
  }
  for(const id in (M.lecnotes||{}))if(!blk[id]){console.log('lecnote block missing',id);bad++;}
}
console.log(n,'mapped questions checked,',bad,'problems');process.exit(bad?1:0);
