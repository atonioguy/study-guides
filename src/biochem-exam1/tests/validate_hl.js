// Checks study-guide Review highlights. Run: node tests/validate_hl.js  (from src/biochem-exam1)
// Each q.hl must appear verbatim (tags stripped) inside one p, li or tr of its ref lesson, or in the lesson's note,
// matching what applyHL() does on the page (it searches p, li, tr and .call elements).
const fs=require('fs'),path=require('path');
const here=path.join(__dirname,'..');global.MODS=[];global.FIGS={};
for(const m of ['m1.js','m2.js','m3.js'])if(fs.existsSync(path.join(here,m)))eval(fs.readFileSync(path.join(here,m),'utf8'));
const ent=s=>s.replace(/&nbsp;/g,' ').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,'&');
const strip=s=>ent(s.replace(/<[^>]+>/g,''));
function segs(html){const out=[];const re=/<(p|li|tr)\b[^>]*>([\s\S]*?)<\/\1>/g;let m;while((m=re.exec(html)))out.push(strip(m[2]));return out;}
const LES={};for(const M of MODS)for(const lo in (M.guide||{}))for(const b of M.guide[lo])if(b.id)LES[b.id]=b;
let n=0,bad=0;
for(const M of MODS)for(const q of M.questions){if(!q.hl)continue;n++;const L=LES[q.ref];
  if(!L){console.log('no lesson',q.id,q.ref);bad++;continue;}
  const pool=segs(L.b||'').concat(L.note?[strip(L.note)]:[]);
  if(!pool.some(s=>s.includes(q.hl))){console.log('hl not found',q.id,q.ref,JSON.stringify(q.hl));bad++;}}
console.log(n,'highlights checked,',bad,'problems');process.exit(bad?1:0);
