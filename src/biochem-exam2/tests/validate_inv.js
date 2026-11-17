// Checks the lecture inventory and, once m4.js / m5.js exist, that the questions cover it.
// Run: node tests/validate_inv.js  (from src/biochem-exam2)
// Fails if: an item's lecture block doesn't exist, a question names an unknown item, a question has no item
// (unless tagged beyond), or a core item has no question in a module whose question file exists.
const fs=require('fs'),path=require('path');
const here=path.join(__dirname,'..');
const INV=require(path.join(here,'inventory.js'));
let bad=0;const fail=(...a)=>{console.log(...a);bad++;};
const blocks={};
for(const m of ['m4','m5']){const L=JSON.parse(fs.readFileSync(path.join(here,'..','..','lectures','biochem-exam2',m+'.json'),'utf8')).lessons;
  for(const k in L)for(const b of L[k].b)blocks[b.id]=1;}
const items={},seen=new Set();
for(const L of INV){
  if(seen.has(L.id))fail('duplicate lesson',L.id);seen.add(L.id);
  if(!L.a||!L.h||!L.lo)fail('lesson missing a/h/lo',L.id);
  for(const [cid,t,b,n] of L.core){
    const id=L.id+'.'+cid;if(items[id])fail('duplicate item',id);
    items[id]={L,t,n,q:0};
    let lec=L.lec;
    for(const part of b.split(/[;,]/).map(s=>s.trim()).filter(Boolean)){
      const m=part.match(/^(?:(L\d)\s+)?(b\d+)$/);if(!m){fail('bad block ref',id,part);continue;}
      if(m[1])lec=m[1];
      if(!blocks[L.mod+lec+'-'+m[2]])fail('no such lecture block',id,L.mod+lec+'-'+m[2]);
    }
  }
}
global.MODS=[];global.FIGS={};const have={};
for(const m of ['m4','m5']){const f=path.join(here,m+'.js');if(fs.existsSync(f)){eval(fs.readFileSync(f,'utf8'));have[m]=1;}}
const kinds={fig:0,ex:0,why:0};let nq=0;
for(const M of MODS)for(const q of M.questions||[]){nq++;
  if(q.kind in kinds)kinds[q.kind]++;else fail('question has no kind (fig|ex|why)',q.id);
  if(!q.inv||!q.inv.length){if(q.tag!=='beyond')fail('question has no inventory item',q.id);continue;}
  for(const id of q.inv){if(!items[id])fail('unknown item',q.id,id);else items[id].q++;}
}
const per={};let core=0,target=0,side=0;
for(const L of INV){side+=L.side.length;const k=L.mod+' '+L.lec;per[k]=per[k]||{lessons:0,core:0,target:0,q:0};per[k].lessons++;
  for(const [cid,,,n] of L.core){const it=items[L.id+'.'+cid];core++;target+=n;per[k].core++;per[k].target+=n;per[k].q+=it.q;
    if(have[L.mod]&&it.q===0)fail('core item has no question',L.id+'.'+cid);
    else if(have[L.mod]&&it.q<n)console.log('  thin:',L.id+'.'+cid,it.q+'/'+n);}}
console.table(per);
console.log(INV.length,'lessons,',core,'core items,',side,'side items, question target',target,'| written',nq,JSON.stringify(kinds));
console.log(bad,'problems');process.exit(bad?1:0);
