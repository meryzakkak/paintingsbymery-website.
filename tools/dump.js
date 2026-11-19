// loads site.js data (P, SALE, nowPrice) without a browser and prints JSON
const fs=require('fs');
const s=fs.readFileSync(process.argv[2],'utf8');
const cut=s.indexOf('// photo html');
const pre=s.slice(0,cut);
const g={};
const stubEl={addEventListener(){},style:{setProperty(){}},classList:{add(){},remove(){}}};
const sandbox=`const document={addEventListener(){},querySelector(){return null},querySelectorAll(){return []},getElementById(){return null},documentElement:{style:{setProperty(){}}}};const localStorage={getItem(){return null},setItem(){}};function Audio(){return {}};const window={};const addEventListener=()=>{};const innerWidth=1200;`;
const code=sandbox+pre+`;module.exports={P,SALE,SALE_END,MEDIA,nowPrice:P.map(p=>p.price?nowPrice(p):null),saleOf:P.map(p=>saleOf(p))};`;
const m={exports:{}};new Function('module',code)(m);
console.log(JSON.stringify(m.exports));
