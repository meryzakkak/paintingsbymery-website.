// ---- extra media per painting (process videos are muted; soft music plays with them) ----
const MEDIA = {
  "Mother Love":[{type:"image",src:"media/41-unframed.jpg",label:"Without the frame"}],
  "Dancing in the Rain":[{type:"image",src:"media/42-unframed.jpg",label:"Without the frame"}],
  "Sonrisa":[
    {type:"image",src:"media/sonrisa-p1.jpg",label:"Work in progress"},
    {type:"image",src:"media/sonrisa-p2.jpg",label:"Before"}
  ],
  "Purple Sunrise":[
    {type:"image",src:"media/purplesunrise-p1.jpg",label:"Blank canvas"},
    {type:"image",src:"media/purplesunrise-p2.jpg",label:"First strokes"},
    {type:"image",src:"media/purplesunrise-p3.jpg",label:"The purple layer"},
    {type:"image",src:"media/purplesunrise-p4.jpg",label:"On the easel"}
  ],
  "Florist":[
    {type:"video",src:"media/florist-timelapse.mp4",poster:"media/florist-timelapse.jpg",label:"Time-lapse"},
    {type:"image",src:"media/florist-p1.jpg",label:"Another view"}
  ],
  "Daisies":[
    {type:"video",src:"media/daisies-timelapse.mp4",poster:"media/daisies-timelapse.jpg",label:"Time-lapse"},
    {type:"image",src:"media/daisies-p1.jpg",label:"In the studio"},
    {type:"image",src:"media/daisies-p2.jpg",label:"With morning coffee"}
  ],
  "Windows":[
    {type:"image",src:"media/windows-p1.jpg",label:"First strokes"},
    {type:"image",src:"media/windows-p2.jpg",label:"The purple layer"}
  ],
  "Ashes Statue":[
    {type:"video",src:"media/ashes-timelapse.mp4",poster:"media/ashes-timelapse.jpg",label:"Time-lapse"},
    {type:"image",src:"media/ashes-p1.jpg",label:"On the easel"}
  ],
  "Dance":[
    {type:"image",src:"media/dance-p1.jpg",label:"The sketch"},
    {type:"image",src:"media/dance-p2.jpg",label:"In progress"}
  ],
  "Rainbow of Sadness":[
    {type:"image",src:"media/sadness-p1.jpg",label:"Framed"},
    {type:"image",src:"media/sadness-p2.jpg",label:"In hand"},
    {type:"image",src:"media/rainbow-collection.jpg",label:"The rainbow collection"}
  ],
  "Rainbow of Change":[
    {type:"image",src:"media/rainbow-collection.jpg",label:"The rainbow collection"}
  ],
  "Maybe I Didn’t Want to Move On":[
    {type:"video",src:"media/maybe-timelapse.mp4",poster:"media/maybe-timelapse.jpg",label:"Time-lapse"},
    {type:"image",src:"media/maybe-easel.jpg",label:"On the easel"}
  ],
  "Why":[
    {type:"video",src:"media/why-timelapse.mp4",poster:"media/why-timelapse.jpg",label:"Time-lapse"},
    {type:"image",src:"media/why-p1.jpg",label:"In progress"},
    {type:"image",src:"media/why-p2.jpg",label:"In the studio"}
  ],
  "Lost in the City":[
    {type:"video",src:"media/lost-city-timelapse.mp4",poster:"media/lost-city-timelapse.jpg",label:"Time-lapse"},
    {type:"image",src:"media/lost-city-p1.jpg",label:"On the easel"}
  ],
  "She Danced with Broken Wings":[
    {type:"video",src:"media/she-danced-timelapse.mp4",poster:"media/she-danced-timelapse.jpg",label:"Time-lapse"},
    {type:"image",src:"media/she-danced-p1.jpg",label:"Early stage"},
    {type:"image",src:"media/she-danced-p2.jpg",label:"In progress"}
  ],
  "HOB":[
    {type:"video",src:"media/hob-timelapse.mp4",poster:"media/hob-timelapse.jpg",label:"Time-lapse"},
    {type:"image",src:"media/hob-p1.jpg",label:"On the easel"},
    {type:"image",src:"media/hob-p2.jpg",label:"Detail"}
  ],
  "Olive Branch":[
    {type:"image",src:"media/olive-p1.jpg",label:"First wash"},
    {type:"image",src:"media/olive-p2.jpg",label:"Detail"}
  ],
  "Spread Your Wings":[
    {type:"image",src:"media/spread-p1.jpg",label:"With its sister pieces"}
  ],
  "Wing Waves":[
    {type:"image",src:"media/wing-waves-p1.jpg",label:"The sketch"},
    {type:"image",src:"media/wing-waves-p2.jpg",label:"In progress"}
  ],
  "Para Olvidarte":[
    {type:"video",src:"media/para-olvidarte-timelapse.mp4",poster:"media/para-olvidarte-timelapse.jpg",label:"Time-lapse"},
    {type:"image",src:"media/para-olvidarte-p1.jpg",label:"The background"},
    {type:"image",src:"media/para-olvidarte-p2.jpg",label:"Face taking shape"}
  ],
  "The Little Prince":[
    {type:"image",src:"media/little-prince-p1.jpg",label:"Early stage"},
    {type:"image",src:"media/little-prince-p2.jpg",label:"By the window at night"}
  ],
  "Family Bond":[
    {type:"image",src:"images/fb1.jpg",label:"Piece 1"},
    {type:"image",src:"images/fb2.jpg",label:"Piece 2"},
    {type:"image",src:"images/fb3.jpg",label:"Piece 3"},
    {type:"image",src:"images/fb4.jpg",label:"Piece 4"},
    {type:"video",src:"media/family-bond-timelapse.mp4",poster:"media/family-bond-timelapse.jpg",label:"Time-lapse"},
    {type:"image",src:"media/family-bond-p1.jpg",label:"Gesso texture"},
    {type:"youtube",id:"Ia_1yu6pEoE",label:"The film"}
  ],
  "Dressed in Tears":[
    {type:"video",src:"media/dressed-timelapse.mp4",poster:"media/dressed-timelapse.jpg",label:"Time-lapse"},
    {type:"image",src:"media/dressed-p1.jpg",label:"First layers"},
    {type:"image",src:"media/dressed-p2.jpg",label:"Painting the waves"}
  ],
  "Desert Moonlight":[
    {type:"image",src:"media/moonlight-p1.jpg",label:"On the easel"},
    {type:"image",src:"media/moonlight-p2.jpg",label:"Finished at the workshop"}
  ],
  "Rana":[
    {type:"image",src:"media/rana-p1.jpg",label:"The sketch"},
    {type:"image",src:"media/rana-p2.jpg",label:"Coming to life"},
    {type:"image",src:"media/rana-p3.jpg",label:"In the studio"}
  ],
  "Autumn by the Water":[
    {type:"video",src:"media/autumn-timelapse.mp4",poster:"media/autumn-timelapse.jpg",label:"Time-lapse"},
    {type:"image",src:"media/autumn-p1.jpg",label:"First layer"},
    {type:"image",src:"media/autumn-p2.jpg",label:"Taking shape"}
  ],
  "Nature Twirl":[
    {type:"video",src:"media/twirl-timelapse.mp4",poster:"media/twirl-timelapse.jpg",label:"Time-lapse"},
    {type:"image",src:"media/twirl-p1.jpg",label:"On the easel"},
    {type:"image",src:"media/twirl-p2.jpg",label:"Outdoors"}
  ],
  "There Is Always a New Day":[
    {type:"video",src:"media/newday-timelapse.mp4",poster:"media/newday-timelapse.jpg",label:"Time-lapse"},
    {type:"image",src:"media/newday-p1.jpg",label:"First strokes"},
    {type:"image",src:"media/newday-p2.jpg",label:"Black and white stage"}
  ],
  "Aries Stars":[
    {type:"image",src:"media/aries-p1.jpg",label:"On the easel"},
    {type:"image",src:"media/aries-p2.jpg",label:"First layer"}
  ],
  "The City":[
    {type:"video",src:"media/thecity-timelapse.mp4",poster:"media/thecity-timelapse.jpg",label:"Time-lapse"},
    {type:"image",src:"media/thecity-p1.jpg",label:"Painting in the park"},
    {type:"image",src:"media/thecity-p2.jpg",label:"From above"}
  ],
  "You Are My Universe":[
    {type:"image",src:"media/universe-p1.jpg",label:"Another view"}
  ],
  "Waves of Change":[
    {type:"image",src:"media/wavesofchange-p1.jpg",label:"On the easel"}
  ],
  "Inherited Feelings":[
    {type:"image",src:"media/inherited-p1.jpg",label:"Wrapped with care"},
    {type:"image",src:"media/inherited-p2.jpg",label:"Packed for its new home"}
  ],
  "Rainbow Pour":[
    {type:"video",src:"media/rainbowpour-timelapse.mp4",poster:"media/rainbowpour-timelapse.jpg",label:"Time-lapse"},
    {type:"image",src:"media/rainbowpour-p1.jpg",label:"On the easel"}
  ],
  "Trapped in Web":[
    {type:"video",src:"media/trapped-timelapse.mp4",poster:"media/trapped-timelapse.jpg",label:"Time-lapse"},
    {type:"image",src:"media/trapped-p1.jpg",label:"On the easel"},
    {type:"image",src:"media/trapped-p2.jpg",label:"Detail"}
  ],
  "Fire":[
    {type:"video",src:"media/fire-timelapse.mp4",poster:"media/fire-timelapse.jpg",label:"Time-lapse"},
    {type:"image",src:"media/fire-p1.jpg",label:"Before the pour"}
  ],
  "Dumbo":[
    {type:"image",src:"media/dumbo-p1.jpg",label:"Another view"}
  ],
  "The Light in You":[
    {type:"video",src:"media/light-timelapse.mp4",poster:"media/light-timelapse.jpg",label:"Time-lapse"}
  ],
  "La Flor del Dolor":[
    {type:"video",src:"media/flor-timelapse.mp4",poster:"media/flor-timelapse.jpg",label:"Time-lapse"},
    {type:"image",src:"media/flor-p1.jpg",label:"With the palette"}
  ],
  "Low Sunset":[
    {type:"video",src:"media/lowsunset-timelapse.mp4",poster:"media/lowsunset-timelapse.jpg",label:"Time-lapse"},
    {type:"image",src:"media/lowsunset-p1.jpg",label:"On its little easel"}
  ],
  "My Girl":[
    {type:"image",src:"media/mygirl-p1.jpg",label:"On the easel"}
  ],
  "This Is for You":[
    {type:"image",src:"media/foryou-p1.jpg",label:"First layer"},
    {type:"image",src:"media/foryou-p2.jpg",label:"Details"}
  ],
  "Wabi-Sabi":[
    {type:"image",src:"media/wabi-p1.jpg",label:"On the easel"}
  ],
  "Golden Face":[
    {type:"image",src:"media/goldenface-p1.jpg",label:"The copper base"},
    {type:"image",src:"media/goldenface-p2.jpg",label:"Palette knife texture"}
  ],
  "Ice":[
    {type:"video",src:"media/ice-timelapse.mp4",poster:"media/ice-timelapse.jpg",label:"Time-lapse"},
    {type:"image",src:"media/ice-p1.jpg",label:"Another angle"}
  ]
};

const INSTAGRAM_POSTS = {
 "Lost": "https://www.instagram.com/reel/DXY2iOEhwXn/",
 "The Light in You": "https://www.instagram.com/reel/DORHBaOgXb9/",
 "She Danced with Broken Wings": "https://www.instagram.com/reel/CZgsDYIAd2R/",
 "Rainbow Pour": "https://www.instagram.com/reel/C6qy7iwp8p8/",
 "Golden Face": "https://www.instagram.com/reel/C2t-aKjJ-JR/",
 "Maybe I Didn’t Want to Move On": "https://www.instagram.com/p/DDbkLJGJkHW/",
 "Warm Storm": "https://www.instagram.com/p/DCjf-PzpObF/",
 "Ashes Statue": "https://www.instagram.com/reel/C69oSBhyJGK/",
 "Nature Twirl": "https://www.instagram.com/reel/C5d6GL6pdli/",
 "La Flor del Dolor": "https://www.instagram.com/reel/C4H83MUphI0/",
 "Desert Moonlight": "https://www.instagram.com/reel/C6DO6Lzvxgb/",
 "Aries Stars": "https://www.instagram.com/p/Cranm8CruWh/",
 "Out of Your Head": "https://www.instagram.com/p/Cq-xO-WJaCf/",
 "Dressed in Tears": "https://www.instagram.com/p/Cohxg_cpNJ4/",
 "HOB": "https://www.instagram.com/reel/CicaC3bpH1i/",
 "Olive Branch": "https://www.instagram.com/reel/CcBLKdzgwPE/",
 "Touching Waves": "https://www.instagram.com/p/Cam131YhiJU/",
 "The Road": "https://www.instagram.com/p/CakuHVohGi6/",
 "Autumn by the Water": "https://www.instagram.com/reel/CZd30qugGfq/",
 "Why": "https://www.instagram.com/reel/CV5bJLLgZBa/",
 "You Are My Universe": "https://www.instagram.com/p/CRBodtGFJM2/",
 "Rana": "https://www.instagram.com/reel/CP3FU7Lh4rH/",
 "Waves of Change": "https://www.instagram.com/reel/CPxpeLWh_Sg/",
 "Para Olvidarte": "https://www.instagram.com/p/DIdULMnTYRm/"
};
const LOUNGE = new Audio("media/lounge.mp3"); LOUNGE.loop=true; LOUNGE.volume=0;
let musicOn = true; let SITE_MUTED=false; try{SITE_MUTED=localStorage.getItem("pbm-muted")==="1"}catch(e){}
function musicFade(to){ clearInterval(LOUNGE._f); LOUNGE._f=setInterval(()=>{const v=LOUNGE.volume+(to>LOUNGE.volume?0.03:-0.05); LOUNGE.volume=Math.max(0,Math.min(0.35,v)); if((to>0&&LOUNGE.volume>=to)||(to===0&&LOUNGE.volume<=0)){clearInterval(LOUNGE._f); if(to===0)LOUNGE.pause();}},80); }
function musicStart(){ if(!musicOn||SITE_MUTED) return; const hp=document.querySelector("#listen audio"); if(hp&&!hp.paused) hp.pause(); LOUNGE.play().then(()=>musicFade(0.35)).catch(()=>{}); }
function musicStop(){ musicFade(0); }
const MUSIC_ICON=on=>on?'<svg viewBox="0 0 24 24"><path d="M4 9v6h4l5 4V5L8 9H4zm12.5 3a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4zM14 3.2v2.1a7 7 0 0 1 0 13.4v2.1a9 9 0 0 0 0-17.6z"/></svg>':'<svg viewBox="0 0 24 24"><path d="M4 9v6h4l5 4V5L8 9H4zm12.6 3 2.7-2.7-1.4-1.4-2.7 2.7-2.7-2.7-1.4 1.4 2.7 2.7-2.7 2.7 1.4 1.4 2.7-2.7 2.7 2.7 1.4-1.4z"/></svg>';
function mediaList(p){return [{type:"image",src:p.big,label:p.beyond?"Photo 1":"Painting"},...(MEDIA[p.title]||[])]}
function stripHTML(p){
  const extra=MEDIA[p.title]; if(!extra) return "";
  const thumbs=[{type:"image",thumb:p.img,label:p.beyond?"Photo 1":"Painting"},...extra.map(m=>({...m,thumb:m.type==="video"?m.poster:m.type==="youtube"?`https://i.ytimg.com/vi/${m.id}/hqdefault.jpg`:m.src}))];
  return `<div class="lb-strip">${thumbs.map((m,k)=>`<button type="button" class="${k===0?"on":""}" data-k="${k}" aria-label="${esc(m.label)}"><img src="${m.thumb}" alt="">${m.type!=="image"?`<span class="play">▶</span>`:""}<small>${esc(m.label)}</small></button>`).join("")}</div>`;
}
function showMedia(p,i){
  const box=$("#lbImg"); const list=mediaList(p); i=(i+list.length)%list.length; const m=list[i]; box.dataset.i=i;
  box.querySelectorAll("video").forEach(v=>v.pause());
  let h="";
  if(m.type==="youtube"){
    h=`<a class="yt yt-face" href="https://www.youtube.com/watch?v=${m.id}" target="_blank" rel="noopener" data-id="${m.id}"><img src="https://i.ytimg.com/vi/${m.id}/hqdefault.jpg" alt="${esc(m.label)}"><span class="yt-play"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></span><span class="yt-t">Play the film</span></a>`;
  } else if(m.type==="video"){
    h=`<video src="${m.src}" poster="${m.poster||""}" autoplay muted loop playsinline preload="auto" disablepictureinpicture></video>`;
  } else {
    h=i===0?(p.img?pic(p,p.big,esc(p.title),false):`<div class="pending" style="width:100%;height:100%">Photo coming soon</div>`):`<img src="${m.src}" alt="${esc(p.title)}, ${esc(m.label)}">`;
  }
  if(p.sold&&i===0) h+=`<span class="ribbon">SOLD</span>`;
  if(INSTAGRAM_POSTS[p.title]) h+=`<a class="watch-btn" href="${INSTAGRAM_POSTS[p.title]}" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>Watch</a>`;
  if(list.length>1) h+=`<div class="lb-dots">${list.map((x,k)=>`<button type="button" class="${k===i?"on":""}" data-k="${k}" aria-label="${esc(x.label)}"></button>`).join("")}</div><span class="lb-cap">${esc(m.label)}</span>`;
  if(m.type==="video") h+=`<button class="music-btn" type="button" aria-label="Music">${MUSIC_ICON(musicOn&&!SITE_MUTED)}</button>`;
  box.innerHTML=h;
  const yf=box.querySelector(".yt-face"); if(yf&&location.protocol!=="file:") yf.onclick=e=>{e.preventDefault();e.stopPropagation();yf.outerHTML=`<div class="yt"><iframe src="https://www.youtube.com/embed/${yf.dataset.id}?autoplay=1&rel=0" title="Film" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe></div>`};
  box.querySelectorAll(".lb-dots button").forEach(d=>d.onclick=e=>{e.stopPropagation();showMedia(p,+d.dataset.k)});
  document.querySelectorAll(".lb-strip button").forEach((t,k)=>t.classList.toggle("on",k===i));
  const mb=box.querySelector(".music-btn"); if(mb) mb.onclick=e=>{e.stopPropagation(); musicOn=!musicOn; mb.innerHTML=MUSIC_ICON(musicOn&&!SITE_MUTED); musicOn?musicStart():musicStop();};
  if(m.type==="youtube"){const hp=document.querySelector("#listen audio"); if(hp&&!hp.paused) hp.pause();}
  m.type==="video"?musicStart():musicStop();
}


const BOOK_URL = "art-as-my-therapy.pdf";
// edited photos live in images/<n>.jpg (large) and images/<n>-m.jpg (medium)
const SIZES = {"47": [637, 900], "49": [629, 900], "46": [888, 900], "7": [635, 900], "48": [675, 900], "8": [726, 900], "4": [900, 693], "25": [736, 900], "9": [778, 900], "0": [607, 900], "2": [887, 900], "11": [664, 900], "13": [900, 897], "18": [675, 900], "26": [711, 900], "36": [883, 900], "50": [675, 900], "24": [701, 900], "37": [660, 900], "38": [394, 900], "6": [591, 900], "12": [658, 900], "45": [900, 714], "23": [900, 659], "3": [884, 900], "51": [900, 637], "5": [675, 900], "28": [648, 900], "22": [824, 900], "14": [622, 900], "16": [719, 900], "17": [665, 900], "27": [675, 900], "30": [900, 899], "29": [662, 900], "1": [705, 900], "10": [659, 900], "19": [671, 900], "20": [658, 900], "31": [717, 900], "32": [591, 900], "33": [715, 900], "34": [603, 900], "35": [900, 896], "39": [681, 900], "40": [900, 667], "41": [671, 900], "42": [631, 900], "43": [625, 900], "44": [611, 900], "52": [765, 900], "53": [675, 900], "aries": [900, 900], "n3": [900, 629], "n4": [661, 900], "n8": [583, 900], "n11": [900, 900], "n15": [900, 900], "n21": [763, 900], "n25": [675, 900], "n40": [900, 876], "n41": [672, 900], "ice": [566, 869], "bottle": [315, 900], "psun": [582, 900], "florist": [675, 900], "fbg": [784, 900], "fb1": [725, 714], "fb2": [680, 900], "fb3": [900, 881], "fb4": [738, 900]};
const SALE = 0.40;   // set to 0 when the sale ends
// the sale applies only to paintings from 2024 and earlier (not 2025 or 2026)
const saleOf = p => (SALE && p.price && !p.sold && !(p.year >= 2025)) ? SALE : 0;
const nowPrice = p => Math.round(p.price*(1-saleOf(p)));
const EMAIL = "merycreativejourney@gmail.com";
const COMMUNITY = "https://chat.whatsapp.com/LnesZYh8pGyBjmkJUQbklc?mode=gi_t";
const INSTAGRAM = "https://www.instagram.com/paintings.bymery/";
const WA = "971563380577";
const WA_ICON = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.94.95-3.48-.22-.36a9.39 9.39 0 0 1-1.44-5.02c0-5.2 4.23-9.42 9.43-9.42 2.52 0 4.88.98 6.66 2.76a9.36 9.36 0 0 1 2.76 6.67c0 5.2-4.23 9.42-9.42 9.42m8.02-17.44A11.27 11.27 0 0 0 12.05.75C5.8.75.7 5.84.7 12.1c0 2 .52 3.95 1.52 5.67L.6 23.25l5.6-1.47a11.3 11.3 0 0 0 5.84 1.6h.01c6.25 0 11.34-5.09 11.35-11.35 0-3.03-1.18-5.88-3.33-8.02"/></svg>`;
const waLink = msg => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;

const ALSO_IN={"Ashes Statue":["Faces We Know"],"You Are My Universe":["Words Expression"],"Somewhere Something Incredible":["Words Expression"]};
const inSeries=(p,s)=>p.series===s||p.also.includes(s);
// [title, series, year, medium, size, priceAED, sold, photo (images/<photo>.jpg), story, frame]
const P = [
["Why", "Find Your Wave", 2021, "Acrylic on canvas", "70 × 50 cm, 4 cm deep", 7000, 1, "47", "", ""],
["Lost in the City", "Find Your Wave", 2023, "Acrylic on canvas", "70 × 50 cm, 4 cm deep", 4500, 0, "49", "", ""],
["Waves of Change", "Find Your Wave", 2021, "Acrylic on canvas", "50 × 50 cm, 5 cm deep", 4000, 1, "46", "", ""],
["Maybe I Didn’t Want to Move On", "Angels Still Between Worlds", 2025, "Mixed media on canvas", "70 × 50 cm, 4.5 cm deep", 3700, 0, "7", "A falling angel surrounded by deep blues and blacks, the heavy weight of past memories. Yet a bright beam of light breaks through the darkness below: hope, and the chance for new beginnings. Falling can lead to rising again if we choose to embrace the light.", "Silver wood frame"],
["Dressed in Tears", "Find Your Wave", 2022, "Acrylic on canvas", "56 × 46 cm, 5 cm deep", 3500, 0, "48", "", ""],
["She Danced with Broken Wings", "Angels Still Between Worlds", 2022, "Acrylic on canvas", "30 × 20 cm, 2 cm deep", 2500, 1, "8", "A ballerina curled into herself, forehead resting on her knees, her tutu fanned like a wilted flower. No stage, no spotlight. Only the quiet ache of vulnerability. She is not performing. She is feeling.", ""],
["There Is Always a New Day", "A Piece of Hope", 2025, "Acrylic on canvas", "60 × 50 cm, 1 cm deep", 2000, 0, "4", "", ""],
["Para Olvidarte", "La Frida", 2024, "Acrylic on wood", "28 × 38 cm, 1 cm deep", 2000, 0, "25", "", ""],
["Wing Waves", "Angels Still Between Worlds", 2025, "Acrylic on canvas", "30 × 24 cm, 1.5 cm deep", 1800, 0, "9", "", ""],
["Spread Your Wings", "A Piece of Hope", 2022, "Acrylic on canvas", "30 × 20 cm, 4 cm deep", 950, 0, "0", "", ""],
["This Is for You", "A Piece of Hope", 2024, "Acrylic on canvas", "40 cm, 1.5 cm deep", 950, 0, "2", "", ""],
["My Girl", "Faces We Know", 2022, "Acrylic on canvas", "30 × 40 cm, 1.5 cm deep", 950, 0, "11", "", ""],
["The Ghost of You", "Faces We Know", 2024, "Acrylic on canvas", "40 cm, 1.5 cm deep", 950, 0, "13", "", ""],
["Trapped in Web", "Fluid Dream", 2023, "Mixed media on canvas", "24 × 31.5 cm, 5 cm deep", 900, 0, "18", "", "Neon yellow acrylic frame"],
["Sonrisa", "La Frida", 2025, "Acrylic on canvas", "26 × 20 cm", 800, 0, "26", "", ""],
["Daisies", "A Piece of Hope", 2025, "Acrylic on canvas", "40 × 40 cm, 2 cm deep", 800, 0, "36", "", ""],
["Touching Waves", "Find Your Wave", 2022, "Acrylic and gold on canvas", "45 × 30 cm, 2 cm deep", 800, 1, "50", "", ""],
["La Flor del Dolor", "La Frida", 2024, "Acrylic on canvas", "28 × 35 cm, 1 cm deep", 600, 0, "24", "", ""],
["Desert Moonlight", "A Piece of Hope", 2023, "Acrylic on canvas", "40 × 30 cm, 1.5 cm deep", 600, 0, "37", "", ""],
["North Star", "A Piece of Hope", 2021, "Acrylic on wood", "20 × 47 cm, 1 cm deep", 550, 0, "38", "", ""],
["Holding a World", "Angels Still Between Worlds", 2025, "Acrylic on canvas", "20 × 30 cm, 1.5 cm deep", 500, 0, "6", "", ""],
["Stain", "Faces We Know", 2021, "Acrylic on canvas", "30 × 40 cm, 1.5 cm deep", 500, 0, "12", "", ""],
["Wabi-Sabi", "A Piece of Hope", 2021, "Acrylic on canvas", "20 × 30 cm", 500, 1, "45", "", ""],
["Lost", "I Feel", 2026, "Acrylic on canvas", "42 × 32 cm, 3 cm deep", 400, 0, "23", "Created during an art therapy session: lines and colour laid down without a plan, letting the feeling lead until the story appears on the paper.", "Beige wood frame"],
["Low Sunset", "A Piece of Hope", 2023, "Acrylic on canvas", "20 × 20 cm, 1.5 cm deep", 350, 0, "3", "", ""],
["Sunrise", "Find Your Wave", 2021, "Acrylic on canvas", "35 × 20 cm, 1 cm deep", 300, 1, "51", "", ""],
["Blue Storm", "Angels Still Between Worlds", 2026, "Acrylic on canvas", "24 × 18 cm, 1 cm deep", 250, 0, "5", "", ""],
["One Fish in the Sea", "Fluid Dream", 2026, "Acrylic on canvas", "18 × 25 cm, 1 cm deep", 250, 0, "28", "", ""],
["Inherited Feelings", "Fluid Dream", 2025, "Acrylic on canvas", "30 × 24 cm, 4 cm deep", 250, 0, "22", "", ""],
["Hit the Shore", "Find Your Wave", 2022, "Mixed media on canvas", "33 × 24 cm, 1.5 cm deep", 200, 0, "14", "", "White frame"],
["Rainbow of Change", "Fluid Dream", 2022, "Acrylic on canvas", "30 × 24 cm, 1 cm deep", 100, 0, "16", "", ""],
["Rainbow of Sadness", "Fluid Dream", 2022, "Acrylic on canvas", "30 × 22 cm, 1 cm deep", 100, 0, "17", "", ""],
["Fire Face", "Fluid Dream", 2026, "Acrylic on canvas", "25 × 20 cm, 1 cm deep", 100, 0, "27", "", ""],
["Rippled", "Ripples", 2026, "Acrylic on canvas", "16 cm, 1 cm deep", 75, 0, "30", "", ""],
["Red Water", "Ripples", 2026, "Acrylic on canvas", "18 × 12 cm, 1 cm deep", 50, 0, "29", "", ""],
["Nature Twirl", "A Piece of Hope", 2024, "Acrylic & gesso on canvas", "50 × 70 cm, 3 cm deep", 1100, 1, "1", "", ""],
["Dance", "Angels Still Between Worlds", 2020, "Acrylic on canvas", "34 × 19 cm, 1 cm deep", 600, 0, "10", "", ""],
["Scream", "Fluid Dream", 2021, "Acrylic on canvas", "30 × 40 cm, 1.5 cm deep", 100, 0, "19", "", ""],
["Fire", "Fluid Dream", 2021, "Acrylic on canvas", "30 × 22 cm, 1.5 cm deep", 100, 0, "20", "", ""],
["The City", "Fluid Dream", 2024, "Acrylic on canvas", "35 × 28 cm, 1.5 cm deep", 200, 0, "31", "", ""],
["Windows", "Fluid Dream", 2025, "Acrylic on canvas", "20 × 30 cm, 1.5 cm deep", 200, 0, "32", "", ""],
["The Light in You", "Angels Still Between Worlds", 2026, "Acrylic on canvas", "30 × 24 cm, 1.5 cm deep", 500, 0, "33", "", ""],
["One Tear Drop", "Fluid Emotions", 2025, "Acrylic on canvas", "30 × 20 cm, 4 cm deep", 1200, 0, "34", "", ""],
["The Road", "A Piece of Hope", 2025, "Acrylic on canvas", "40 × 40 cm, 1.5 cm deep", 800, 0, "35", "", ""],
["Ashes Statue", "Never Look Behind", 2024, "Acrylic on canvas", "40 × 30 cm, 2 cm deep", 1800, 0, "39", "Don’t look behind. With one glance over her shoulder she says goodbye without words, her eyes holding everything she leaves behind.", ""],
["Warm Storm", "Fluid Emotions", 2025, "Acrylic on canvas", "40 × 30 cm, 1.5 cm deep", 1800, 0, "40", "Life's journey leads to one destination through diverse paths. Warm colors symbolize renewal & the idea that each sunset precedes a sunrise. This golden contour of the sun signifies hope at the end of dark times. The blend of paths highlights life’s complexity, colors reflecting earth, fire,air,water that shape our realities shadows of different directions taken before reaching the golden gate. Through exploration, we discover our purpose and find our way to a peaceful, happier side.", ""],
["Mother Love", "Fluid Emotions", 2024, "Acrylic on canvas", "34 × 28 cm, 3.5 cm deep", 700, 0, "41", "", "Wine red wood frame"],
["Dancing in the Rain", "Fluid Emotions", 2024, "Acrylic on canvas", "26.5 × 36.5 cm, 6 cm deep", 700, 0, "42", "", "Blue wood frame"],
["Thinking of You", "Words Expression", 2025, "Calligraphy ink on canvas", "21 × 15 cm, 2 cm deep", 100, 1, "43", "", "Black wood frame"],
["Out of Your Head", "The Other World", 2024, "Colored pencil and ink on paper", "21.5 × 16.5 cm, 1.5 cm deep", 100, 0, "44", "", ""],
["Rana", "A Piece of Hope", 2021, "Acrylic on canvas", "20 × 30 cm, 1 cm deep", 500, 1, "52", "", ""],
["Family Bond", "Fluid Emotions", 2025, "Acrylic, Gesso & Beads on canvas", "Set of 4: 15 × 15, 20 × 15, 20 × 20 and 30 × 24 cm", 1600, 0, "fbg", "Four pieces painted as one family, each with its own size and character. Take the full set home, or ask about a single piece.", ""],
["HOB", "Fluid Emotions", 2022, "Acrylic, Gesso & Beads on canvas", "53 × 40 cm, 2 cm deep", 2500, 0, "53", "Hob is the Arabic word for love.", ""],
["Aries Stars", "A Piece of Hope", 2021, "Acrylic on canvas", "45 × 45 cm, 2 cm deep", 3000, 1, "aries", "A custom piece made for an Aries, reflecting their ambition and dreaminess.", ""],
["Autumn by the Water", "A Piece of Hope", null, "Chalk pastel on board", "", null, 1, "n3", "", ""],
["Olive Branch", "A Piece of Hope", null, "Watercolour on paper", "", null, 1, "n4", "", ""],
["Blue Waves", "Find Your Wave", null, "Acrylic on canvas", "", null, 1, "n8", "", ""],
["Somewhere Something Incredible", "Fluid Dream", null, "Acrylic on canvas", "", null, 1, "n11", "", ""],
["Dumbo", "Fluid Dream", null, "Nail polish on canvas", "", null, 1, "n15", "", ""],
["The Little Prince", "A Piece of Hope", null, "Acrylic on canvas", "", null, 1, "n21", "", ""],
["You Are My Universe", "A Piece of Hope", null, "Acrylic and spray paint on canvas", "", null, 1, "n25", "", ""],
["Rainbow Pour", "Fluid Dream", 2024, "Acrylic pour on canvas", "", null, 1, "n40", "From the rainbow colours collection, this pour now lives in the UK.", ""],
["Golden Face", "Faces We Know", 2024, "Acrylic & Gesso on canvas", "", null, 1, "n41", "Copper ground, a white palette knife figure and a single touch of gold.", ""],
["Ice", "Fluid Emotions", 2021, "Acrylic on canvas", "", null, 1, "ice", "", ""],
["Purple Sunrise", "Fluid Emotions", 2025, "Acrylic on wood", "", null, 1, "psun", "", ""],
["Florist", "A Piece of Hope", 2022, "Watercolour on paper", "", null, 0, "florist", "", ""],
].map((r,i)=>({i,title:r[0],series:r[1],also:ALSO_IN[r[0]]||[],year:r[2],medium:r[3],size:r[4],price:r[5],sold:!!r[6],file:r[7],img:r[7]?`images/${r[7]}-m.jpg`:null,big:r[7]?`images/${r[7]}.jpg`:null,story:r[8]||"",frame:r[9]||""}));
// photo html: rotates the photos that are stored sideways in Drive
const pic=(p,url,alt,lazy=true)=>{const s=SIZES[p.file]||[900,1200];return `<img src="${url}" alt="${alt}" width="${s[0]}" height="${s[1]}"${lazy?' loading="lazy"':""}>`};

const SERIES_INFO = {
  "A Piece of Hope":{cover:"Desert Moonlight",line:"Light after the storm"},
  "Angels Still Between Worlds":{cover:"Maybe I Didn’t Want to Move On",line:"Quiet figures, caught between"},
  "Find Your Wave":{cover:"Waves of Change",line:"The sea as a way home"},
  "Fluid Emotions":{cover:"Warm Storm",line:"Feelings poured into colour"},
  "La Frida":{cover:"Para Olvidarte",line:"Strength in bloom"},
  "Faces We Know":{cover:"My Girl",line:"Portraits of feeling"},
  "Fluid Dream":{cover:"Trapped in Web",line:"Colour set free"},
  "Never Look Behind":{cover:"Ashes Statue",line:"Moving forward"},
  "I Feel":{cover:"Lost",line:"Emotion, unfiltered"},
  "Ripples":{cover:"Rippled",line:"Small moments, wide circles"},
  "Words Expression":{cover:"Thinking of You",line:"Feelings in ink"},
  "The Other World":{cover:"Out of Your Head",line:"Lines between worlds"}
};
const FEATURED = ["Maybe I Didn’t Want to Move On","HOB","Warm Storm","There Is Always a New Day","Lost in the City","Para Olvidarte","Spread Your Wings","Waves of Change","Desert Moonlight","Wing Waves","Dressed in Tears","Daisies","My Girl","Sonrisa"];

const $ = s=>document.querySelector(s);
const fmt = n=>n?"AED "+n.toLocaleString("en-US"):"Price on request";
const byTitle = t=>P.find(p=>p.title===t);
const esc = s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const priceHTML = p => p.sold ? (p.price?`<span>${fmt(p.price)}</span>`:"")+`<span class="sold">SOLD</span>`
  : saleOf(p) ? `<span>${fmt(nowPrice(p))}</span><s>${fmt(p.price)}</s>` : `<span>${fmt(p.price)}</span>`;
const mailto = p => {
  const now = nowPrice(p);
  return `mailto:${EMAIL}?subject=${encodeURIComponent("Painting inquiry: "+p.title)}&body=${encodeURIComponent(`Hello Mery,\n\nI'm interested in "${p.title}"${p.size?` (${p.size})`:""}${p.price?` at ${fmt(now)}`:""}. Is it still available?\n\nThank you!`)}`;
};

const slug = t => t.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
if($("#bookLink")) $("#bookLink").href = BOOK_URL;
const wc=$("#waContact"); if(wc){ wc.href=waLink("Hello Mery, I found your paintings on your website and would love to know more."); wc.insertAdjacentHTML("afterbegin",WA_ICON); }
document.body.insertAdjacentHTML("beforeend",`<a class="wa-float" href="${waLink("Hello Mery, I found your paintings on your website and would love to know more.")}" target="_blank" rel="noopener" aria-label="Chat with Mery on WhatsApp">${WA_ICON}</a>`);
if($("#storyImg")) $("#storyImg").src = byTitle("She Danced with Broken Wings").img;

// hero collage
[["p1","Maybe I Didn’t Want to Move On"],["p2","Lost in the City"],["p3","Para Olvidarte"]].forEach(([c,t])=>{
  if(!$("#collage")) return;
  const p=byTitle(t); const f=document.createElement("figure"); f.className="pin "+c;
  f.innerHTML=`<img src="${p.img}" alt="${esc(t)}"><figcaption>${esc(t)}</figcaption>`;
  f.onclick=()=>openLB(p); $("#collage").appendChild(f);
});

// marquee
const words=["Colorful","Warm","Honest","Handmade","Hopeful"];
if($("#track")) $("#track").innerHTML=words.map(w=>`<span>${w}</span>`).join("<span>✦</span>");

// collections
const seriesNames = Object.keys(SERIES_INFO).filter(s=>P.some(p=>inSeries(p,s)));
if($("#series")) $("#series").innerHTML = seriesNames.map(s=>{
  const n=P.filter(p=>inSeries(p,s)).length, c=byTitle(SERIES_INFO[s].cover);
  return `<button class="s-card reveal" data-s="${esc(s)}"><img src="${c.img}" alt="${esc(s)}" loading="lazy"><div><small>${n} painting${n>1?"s":""}</small><h3>${esc(s)}</h3><span style="font-size:14px;opacity:.85">${SERIES_INFO[s].line}</span></div></button>`;
}).join("");
document.querySelectorAll(".s-card").forEach(b=>b.onclick=()=>{location.href="gallery.html#"+slug(b.dataset.s)});

// paintings grid (home: a few featured, gallery page: all with filters)
const state={series:"All",avail:"all",sort:"feat"};
const nColsNow=()=>innerWidth<560?1:innerWidth<900?2:innerWidth<1180?3:4;
const rank=t=>{const k=FEATURED.indexOf(t);return k<0?999:k};
let view=[];
function cardHTML(p,k,detailed){
  return `<article class="card${detailed?" detailed":""}" data-k="${k}">
      <div class="img">${p.img?pic(p,p.img,esc(p.title)+", original painting by Mery Zakkak"):`<div class="pending">Photo coming soon</div>`}
        ${MEDIA[p.title]?`<span class="card-dots">${[0,...MEDIA[p.title]].map((_,k)=>`<i class="${k?"":"on"}"></i>`).join("")}</span>`:""}${p.sold?`<span class="ribbon">SOLD</span>`:saleOf(p)?`<span class="badge sale-b">${SALE*100}% off</span>`:""}</div>
      <h3>${esc(p.title)}</h3>
      <div class="meta">${esc(p.series)}${p.year?" · "+p.year:""}</div>
      ${detailed?`<div class="details">${[p.medium,p.size,p.frame].filter(Boolean).map(esc).join(" · ")}</div>`:(p.size?`<div class="details">${esc(p.size)}</div>`:"")}
      <div class="price">${priceHTML(p)}</div>
      ${detailed&&p.story?`<p class="story-x">${esc(p.story)}</p>`:""}
      ${detailed?`<span class="view">${p.sold?"View painting":"View and inquire"} →</span>`:""}
    </article>`;
}
function paint(el,list,detailed){
  const n=nColsNow(), cols=Array.from({length:n},()=>[]);
  list.forEach((p,k)=>cols[k%n].push(cardHTML(p,k,detailed)));
  el.innerHTML=cols.map(c=>`<div class="col">${c.join("")}</div>`).join("");
  el.querySelectorAll(".card").forEach(c=>c.onclick=()=>openLB(view[+c.dataset.k]));
}
function renderChips(){
  const all=["All",...Object.keys(SERIES_INFO).filter(s=>P.some(p=>inSeries(p,s)))];
  $("#chips").innerHTML=all.map(s=>`<button class="chip ${state.series===s?"on":""}" data-s="${esc(s)}">${esc(s)}</button>`).join("");
  document.querySelectorAll(".chip").forEach(c=>c.onclick=()=>{state.series=c.dataset.s;renderChips();render();history.replaceState(null,"",c.dataset.s==="All"?location.pathname:"#"+slug(c.dataset.s))});
}
function render(){
  if($("#featGrid")){
    // home page: the first 8 available featured paintings
    view=P.filter(p=>!p.sold&&p.img).sort((a,b)=>(rank(a.title)-rank(b.title))||(b.price-a.price)).slice(0,8);
    paint($("#featGrid"),view,false);
    const ab=$("#allBtn"); if(ab) ab.textContent=`View all ${P.length} paintings →`;
    return;
  }
  if(!$("#grid")) return;
  view=P.filter(p=>(state.series==="All"||inSeries(p,state.series))&&(state.avail==="all"||(state.avail==="sold"?p.sold:!p.sold)));
  if(state.sort==="feat") view.sort((a,b)=>(a.sold-b.sold)||(rank(a.title)-rank(b.title))||(b.price-a.price));
  if(state.sort==="new") view.sort((a,b)=>(b.year||0)-(a.year||0));
  if(state.sort==="low") view.sort((a,b)=>(a.price||1e9)-(b.price||1e9));
  if(state.sort==="high") view.sort((a,b)=>(b.price||0)-(a.price||0));
  $("#count").textContent=view.length+" painting"+(view.length===1?"":"s");
  paint($("#grid"),view,true);
}
if($("#grid")){
  const h=decodeURIComponent(location.hash.slice(1));
  const match=Object.keys(SERIES_INFO).find(s=>slug(s)===h); if(match) state.series=match;
  document.querySelectorAll("#avail button").forEach(b=>b.onclick=()=>{document.querySelectorAll("#avail button").forEach(x=>x.classList.remove("on"));b.classList.add("on");state.avail=b.dataset.v;render()});
  $("#sort").onchange=e=>{state.sort=e.target.value;render()};
  renderChips();
}
render();
let lastCols=nColsNow(); addEventListener("resize",()=>{const n=nColsNow();if(n!==lastCols){lastCols=n;render()}});


// lightbox
let cur=null;
const PIECES={"Family Bond":[["Piece 1","15 × 15 cm · AED 300"],["Piece 2","20 × 15 cm · AED 300"],["Piece 3","20 × 20 cm · AED 500"],["Piece 4","30 × 24 cm · AED 500"]]};
const IG_ICON='<svg viewBox="0 0 24 24"><path d="M12 7.3A4.7 4.7 0 1 0 12 16.7 4.7 4.7 0 0 0 12 7.3zm0 7.7a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm6-7.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0zM16.8 2H7.2A5.2 5.2 0 0 0 2 7.2v9.6A5.2 5.2 0 0 0 7.2 22h9.6a5.2 5.2 0 0 0 5.2-5.2V7.2A5.2 5.2 0 0 0 16.8 2zm3.4 14.8a3.4 3.4 0 0 1-3.4 3.4H7.2a3.4 3.4 0 0 1-3.4-3.4V7.2a3.4 3.4 0 0 1 3.4-3.4h9.6a3.4 3.4 0 0 1 3.4 3.4z"/></svg>';
function openLB(p){
  cur=p;
  showMedia(p,0);
  const serLinks=[p.series,...p.also].map(x=>`<a class="ser-link" href="gallery.html#${slug(x)}" data-s="${esc(x)}">${esc(x)}</a>`).join(", ");
  const rows=[["Series",{html:serLinks}],["Year",p.year],["Medium",p.medium],["Size",p.size],["Framing",p.frame||(p.size?"Unframed":"")],["Edition","Original, one of a kind (no prints)"],...(PIECES[p.title]||[])].filter(r=>r[1]);
  const wa=waLink(p.sold?`Hello Mery, I love "${p.title}". Could you paint something similar for me?`:`Hello Mery, I'm interested in "${p.title}"${p.size?` (${p.size})`:""}${p.price?` at ${fmt(nowPrice(p))}`:""}. Is it still available?`);
  $("#lbInfo").innerHTML=`
    <div class="eyebrow">${serLinks}</div>
    <h3>${esc(p.title)}</h3>
    ${stripHTML(p)}
    ${p.story?`<p class="story-t">${esc(p.story)}</p>`:""}
    <dl class="details">${rows.map(([k,v])=>`<div><dt>${k}</dt><dd>${v&&v.html?v.html:esc(String(v))}</dd></div>`).join("")}</dl>
    <div class="price">${priceHTML(p)}</div>
    <div class="ask-row">
      ${p.sold?`<a class="btn btn-ink" href="mailto:${EMAIL}?subject=${encodeURIComponent("Painting commission inspired by "+p.title)}">Commission something similar</a>`
              :`<a class="btn btn-ink" href="${mailto(p)}">Inquire to purchase</a>`}
      <a class="ico ico-wa" href="${wa}" target="_blank" rel="noopener" aria-label="WhatsApp Mery" title="WhatsApp Mery">${WA_ICON}</a>
      <a class="ico ico-ig" href="https://www.instagram.com/paintings.bymery/" target="_blank" rel="noopener" aria-label="Message on Instagram" title="Message on Instagram">${IG_ICON}</a>
    </div>
    <p class="note">Ask about shipping, framing or viewing in person in Abu Dhabi · ${EMAIL} · +971 56 338 0577</p>`;
  document.querySelectorAll(".lb-strip button").forEach(b=>b.onclick=()=>showMedia(p,+b.dataset.k));
  document.querySelectorAll("#lbInfo .ser-link").forEach(a=>a.onclick=e=>{if(!$("#grid"))return;e.preventDefault();closeLB();state.series=a.dataset.s;renderChips();render();history.replaceState(null,"","#"+slug(a.dataset.s));$("#gallery").scrollIntoView({behavior:"smooth"})});
  $("#lbInfo").scrollTop=0;
  $("#lb").classList.add("open"); document.body.style.overflow="hidden";
}
// swipe between photo and video inside the popup
(()=>{let x0=null;const b=$("#lbImg");b.addEventListener("touchstart",e=>{x0=e.touches[0].clientX},{passive:true});
b.addEventListener("touchend",e=>{if(x0===null||!cur)return;const dx=e.changedTouches[0].clientX-x0;x0=null;if(Math.abs(dx)>45&&MEDIA[cur.title])showMedia(cur,(+b.dataset.i||0)+(dx<0?1:-1))})})();
function closeLB(){$("#lb").classList.remove("open");document.body.style.overflow="";$("#lbImg").querySelectorAll("video").forEach(v=>v.pause());musicStop()}
function step(d){if(cur&&cur.beyond&&cur._list){const L=cur._list,k=L.indexOf(cur);openBeyond(L[(k+d+L.length)%L.length]);return}const list=(typeof view!=="undefined"&&view.includes(cur))?view:P;const k=list.indexOf(cur);openLB(list[(k+d+list.length)%list.length])}
$(".lb-x").onclick=closeLB; $(".lb-prev").onclick=()=>step(-1); $(".lb-next").onclick=()=>step(1);
$("#lb").onclick=e=>{if(e.target.id==="lb")closeLB()};
addEventListener("keydown",e=>{if(!$("#lb").classList.contains("open"))return;if(e.key==="Escape")closeLB();if(e.key==="ArrowRight")step(1);if(e.key==="ArrowLeft")step(-1)});

// header + reveal
addEventListener("scroll",()=>$("header").classList.toggle("scrolled",scrollY>10));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
document.querySelectorAll("#links a").forEach(a=>a.onclick=()=>$("#links").classList.remove("open"));

// home page audio: Beauty in Creating
(()=>{const box=document.getElementById("listen");if(!box)return;const au=box.querySelector("audio"),btn=box.querySelector("button"),bar=box.querySelector(".bar i");
const PLAY='<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>',PAUSE='<svg viewBox="0 0 24 24"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>';
btn.onclick=()=>{if(au.paused){au.play().catch(()=>{})}else{au.pause()}};
au.onplay=()=>{box.classList.add("playing","played");btn.innerHTML=PAUSE;btn.setAttribute("aria-label","Pause")};
au.onpause=au.onended=()=>{box.classList.remove("playing");btn.innerHTML=PLAY;btn.setAttribute("aria-label","Play Beauty in Creating")};
const tm=box.querySelector(".time"),f=t=>Math.floor(t/60)+":"+String(Math.floor(t%60)).padStart(2,"0");
au.ontimeupdate=()=>{if(au.duration){bar.style.width=(au.currentTime/au.duration*100)+"%";tm.textContent=f(au.currentTime)+" / "+f(au.duration)}};
box.querySelector(".bar").onclick=e=>{const r=e.currentTarget.getBoundingClientRect();if(au.duration){au.currentTime=(e.clientX-r.left)/r.width*au.duration;if(au.paused)au.play().catch(()=>{})}};
au.onended=()=>{box.classList.remove("playing");btn.innerHTML=PLAY;bar.style.width="0"};})();


// hide the December workshop card after it has happened
(()=>{const n=document.getElementById("nyny");if(n&&new Date()>new Date("2026-12-06T00:00:00+04:00"))n.remove();})();

// back to top arrow
(()=>{const b=document.createElement("button");b.className="to-top";b.setAttribute("aria-label","Back to top");b.innerHTML="↑";
b.onclick=()=>scrollTo({top:0,behavior:"smooth"});document.body.appendChild(b);
const t=()=>b.classList.toggle("show",scrollY>500);addEventListener("scroll",t,{passive:true});t();})();

// the big logo starts at the top of the yellow banner, whatever its height
(()=>{const s=document.querySelector(".sale");if(!s)return;const f=()=>document.documentElement.style.setProperty("--saleH",s.offsetHeight+"px");f();addEventListener("resize",f);})();

// keep the story numbers in step with the painting list
(()=>{const w=document.getElementById("statWorks"),s=document.getElementById("statSeries");if(w)w.textContent=P.length;if(s)s.textContent=new Set(P.map(p=>p.series)).size;})();

// site sound: the home song starts on its own (or on the first tap if the browser blocks it) + mute button
(()=>{
  const au=document.querySelector("#listen audio");
  const b=document.createElement("button"); b.className="snd-float"; b.type="button";
  const paint=()=>{b.innerHTML=MUSIC_ICON(!SITE_MUTED);b.setAttribute("aria-label",SITE_MUTED?"Turn sound on":"Mute sound");b.classList.toggle("muted",SITE_MUTED)};
  const apply=()=>{if(au)au.muted=SITE_MUTED;LOUNGE.muted=SITE_MUTED;try{localStorage.setItem("pbm-muted",SITE_MUTED?"1":"0")}catch(e){}paint()};
  b.onclick=()=>{SITE_MUTED=!SITE_MUTED;apply();if(!SITE_MUTED&&au&&au.paused&&!au.dataset.done)au.play().catch(()=>{});if(!SITE_MUTED&&$("#lb").classList.contains("open")&&$("#lbImg video"))musicStart()};
  document.body.appendChild(b); apply();
  if(!au) return;
  au.addEventListener("ended",()=>{au.dataset.done="1"});
  const start=()=>{if(SITE_MUTED||!au.paused||au.dataset.done)return Promise.resolve();return au.play()};
  const kick=e=>{if(e&&e.target&&e.target.closest&&e.target.closest("#listen button,.snd-float"))return off();start().then(off).catch(()=>{})};
  const evs=["pointerdown","keydown","touchstart"];
  const off=()=>evs.forEach(t=>removeEventListener(t,kick,true));
  start().then(off).catch(()=>evs.forEach(t=>addEventListener(t,kick,true)));
})();

// ---- Beyond the canvas (secondary work, kept lighter than the paintings) ----
const BEYOND=[
 {
  "id": "bottles",
  "name": "Bottles",
  "line": "Mandalas, dots and colour on glass, made to keep, gift or light up a room",
  "items": [
   {
    "t": "Spread the Love",
    "ph": [
     "media/beyond/g-bottle-spread-the-love-1.jpg",
     "media/beyond/g-bottle-spread-the-love-2.jpg",
     "media/beyond/g-bottle-spread-the-love-3.jpg",
     "media/beyond/g-bottle-spread-the-love-4.jpg"
    ],
    "d": "Spread the Love sends your messages to your loved ones. It can be an empty bottle turned into a lamp or a vase, or a filled bottle with a customised design that pins a beautiful memory."
   },
   {
    "t": "Brown Mandala",
    "ph": [
     "media/beyond/g-bottle-brown-mandala-1.jpg",
     "media/beyond/g-bottle-brown-mandala-2.jpg",
     "media/beyond/g-bottle-brown-mandala-3.jpg",
     "media/beyond/g-bottle-brown-mandala-4.jpg"
    ],
    "d": "Hundreds of hand placed dots in warm browns and creams, built up one at a time into a mandala that glows in the evening light.",
    "ig": "https://www.instagram.com/reel/C3R0y-ehGQ3/"
   },
   {
    "t": "Bulgaria",
    "ph": [
     "media/beyond/bulg-1.jpg",
     "media/beyond/bulg-2.jpg",
     "media/beyond/bulg-3.jpg",
     "media/beyond/bulg-4.jpg",
     "media/beyond/bulg-5.jpg"
    ],
    "d": "Painted while travelling in Bulgaria: acrylic on glass in sunset colours, a small souvenir of a place, carried home in a bottle.",
    "ig": "https://www.instagram.com/p/Ct-6b4RIH83/"
   },
   {
    "t": "Pink Wings",
    "ph": [
     "media/beyond/bo-pink-1.jpg",
     "media/beyond/bo-pink-2.jpg"
    ],
    "d": "Pink and lilac poured onto glass, made to sit beside the Spread Your Wings painting. Ask for a matching set, a painting with bottles or accessories in the same colours, to style a room for interior décor.",
    "rel": [
     "Spread Your Wings",
     "gallery.html#a-piece-of-hope"
    ]
   },
   {
    "t": "Spring Dots",
    "ph": [
     "media/beyond/g-bottle-spring-dots-1.jpg",
     "media/beyond/g-bottle-spring-dots-2.jpg"
    ],
    "d": "Soft pink and burgundy dots scattered across clear glass like spring blossoms."
   },
   {
    "t": "Waves Mandala",
    "ph": [
     "media/beyond/g-bottle-waves-mandala-1.jpg",
     "media/beyond/g-bottle-waves-mandala-2.jpg",
     "media/beyond/g-bottle-waves-mandala-3.jpg",
     "media/beyond/g-bottle-waves-mandala-4.jpg",
     "media/beyond/g-bottle-waves-mandala-5.jpg"
    ],
    "d": "Turquoise and blue dots wrapping the bottle like waves, a calm mandala for a shelf or a bedside table."
   },
   {
    "t": "White Mandala",
    "ph": [
     "media/beyond/g-bottle-white-mandala-1.jpg",
     "media/beyond/g-bottle-white-mandala-2.jpg",
     "media/beyond/g-bottle-white-mandala-3.jpg"
    ],
    "d": "White and gold dots on green glass: a quiet, elegant piece for a table setting or a gift."
   },
   {
    "t": "Pampas Vase",
    "ph": [
     "media/beyond/bo-vase-1.jpg",
     "media/beyond/bo-vase-2.jpg",
     "media/beyond/bo-vase-3.jpg"
    ],
    "d": "A painted bottle turned into a vase for dried pampas, wrapped by hand and ready to be given."
   },
   {
    "t": "Night Flower",
    "ph": [
     "media/beyond/nightflower-1.jpg",
     "media/bottle-with-painting.jpg"
    ],
    "d": "A white flower opening on a night blue sky. It was painted to stand beside She Danced with Broken Wings, the ballerina angel, and carries the same blues and brushstrokes, so the two can live together as a set.",
    "rel": [
     "She Danced with Broken Wings",
     "gallery.html#angels-still-between-worlds"
    ]
   },
   {
    "t": "Christmas Gift Bottle",
    "ph": [
     "media/beyond/bo-gifts-1.jpg",
     "media/beyond/bo-gifts-2.jpg",
     "media/beyond/bo-gifts-3.jpg"
    ],
    "vid": {
     "src": "media/beyond/bo-gifts-timelapse.mp4",
     "poster": "media/beyond/bo-gifts-timelapse.jpg"
    },
    "d": "A handmade gift from start to finish: the bottle is painted with a custom design, then packed by hand with festive wrapping, ribbon and little treats, so it arrives beautifully packaged and ready to give.",
    "ig": "https://www.instagram.com/reel/DD1a1O0pWv5/"
   }
  ]
 },
 {
  "id": "drawings",
  "name": "Drawings",
  "line": "Pencil, ink and the quiet studies behind the paintings",
  "items": [
   {
    "t": "Breath",
    "ph": [
     "media/beyond/g-drawing-breath-1.jpg",
     "media/beyond/g-drawing-breath-2.jpg"
    ],
    "d": "Pencil on paper, drawn while learning to get through anxiety one breath at a time.",
    "ig": "https://www.instagram.com/tv/CW3pbYeh2y0/"
   },
   {
    "t": "Cry",
    "ph": [
     "media/beyond/g-drawing-cry-1.jpg",
     "media/beyond/g-drawing-cry-2.jpg",
     "media/beyond/g-drawing-cry-3.jpg"
    ],
    "d": "A crying eye in ink and pencil, the smallest detail holding the biggest feeling.",
    "ig": "https://www.instagram.com/p/CRLfZxlFDNq/"
   },
   {
    "t": "Flying Tear",
    "ph": [
     "media/beyond/g-drawing-flying-tear-1.jpg",
     "media/beyond/g-drawing-flying-tear-2.jpg"
    ],
    "d": "A tear drawn as a delicate glass shape, light enough to fly away."
   },
   {
    "t": "Lead Against Void",
    "ph": [
     "media/beyond/g-drawing-lead-against-void-1.jpg",
     "media/beyond/g-drawing-lead-against-void-2.jpg"
    ],
    "d": "Graphite pressed against empty paper, a study of weight and emptiness."
   },
   {
    "t": "Mermaid",
    "ph": [
     "media/beyond/g-drawing-mermaid-1.jpg"
    ],
    "d": "Drawn on a day that felt like water.",
    "ig": "https://www.instagram.com/reel/CZG0tw1AYG4/"
   },
   {
    "t": "Out of Your Head",
    "ph": [
     "media/beyond/g-drawing-out-of-your-head-1.jpg",
     "media/beyond/g-drawing-out-of-your-head-2.jpg",
     "media/beyond/g-drawing-out-of-your-head-3.jpg",
     "media/beyond/g-drawing-out-of-your-head-4.jpg"
    ],
    "d": "The drawing that became the painting of the same name, made on day one of my 365 day drawing challenge.",
    "ig": "https://www.instagram.com/p/Cq-xO-WJaCf/",
    "rel": [
     "Out of Your Head",
     "gallery.html#the-other-world"
    ]
   },
   {
    "t": "Tears of Memories",
    "ph": [
     "media/beyond/g-drawing-tears-of-memories-1.jpg",
     "media/beyond/g-drawing-tears-of-memories-2.jpg",
     "media/beyond/g-drawing-tears-of-memories-3.jpg",
     "media/beyond/g-drawing-tears-of-memories-4.jpg"
    ],
    "d": "One tear drop holds all your memories: small scenes drawn inside a single drop.",
    "ig": "https://www.instagram.com/p/CQ-3SNVlCnM/"
   },
   {
    "t": "Dragonfly",
    "ph": [
     "media/beyond/g-drawing-dragonfly-1.jpg",
     "media/beyond/g-drawing-dragonfly-2.jpg"
    ],
    "d": "A fine line study of a dragonfly."
   },
   {
    "t": "Eye",
    "ph": [
     "media/beyond/g-drawing-eye-1.jpg",
     "media/beyond/g-drawing-eye-2.jpg",
     "media/beyond/g-drawing-eye-3.jpg"
    ],
    "d": "Pencil studies of the eye, the part of a face that tells the most."
   },
   {
    "t": "Kim",
    "ph": [
     "media/beyond/g-drawing-kim-1.jpg",
     "media/beyond/g-drawing-kim-2.jpg"
    ],
    "d": "A portrait study in pencil."
   },
   {
    "t": "Flower",
    "ph": [
     "media/beyond/g-drawing-flower-1.jpg",
     "media/beyond/g-drawing-flower-2.jpg",
     "media/beyond/g-drawing-flower-3.jpg"
    ],
    "d": "Flowing lines and colour that build a single flower."
   },
   {
    "t": "Kiss",
    "ph": [
     "media/beyond/g-drawing-kiss-1.jpg",
     "media/beyond/g-drawing-kiss-2.jpg",
     "media/beyond/g-drawing-kiss-3.jpg"
    ],
    "d": "Two faces meeting in a kiss, drawn in soft pencil.",
    "ig": "https://www.instagram.com/reel/CTM02gKAoR0/"
   },
   {
    "t": "Swing",
    "ph": [
     "media/beyond/g-drawing-swing-1.jpg",
     "media/beyond/g-drawing-swing-2.jpg"
    ],
    "d": "A girl on a swing, a quiet pencil sketch.",
    "ig": "https://www.instagram.com/reel/CYyO_PIgelE/"
   },
   {
    "t": "Ballerina Rest",
    "ph": [
     "media/beyond/g-drawing-ballerina-rest-1.jpg",
     "media/beyond/g-drawing-ballerina-rest-2.jpg",
     "media/beyond/g-drawing-ballerina-rest-3.jpg"
    ],
    "d": "A dancer at rest, a study of the back and shoulders."
   },
   {
    "t": "Sunset",
    "ph": [
     "media/beyond/g-drawing-sunset-1.jpg",
     "media/beyond/g-drawing-sunset-2.jpg"
    ],
    "d": "Quick colour sketches chasing a sunset."
   },
   {
    "t": "Sea",
    "ph": [
     "media/beyond/g-drawing-sea-1.jpg",
     "media/beyond/g-drawing-sea-2.jpg",
     "media/beyond/g-drawing-sea-3.jpg"
    ],
    "d": "Sketches of the sea, the place I always come back to."
   },
   {
    "t": "Early Studies",
    "ph": [
     "media/beyond/g-drawing-drawing-class-1.jpg",
     "media/beyond/g-drawing-drawing-class-2.jpg",
     "media/beyond/g-drawing-drawing-class-3.jpg"
    ],
    "d": "Where it all started: my first drawings from art class, learning light, shadow and form."
   }
  ]
 },
 {
  "id": "calligraphy",
  "name": "Calligraphy",
  "line": "Letters as brushstrokes, Arabic and English, made personal",
  "items": [
   {
    "t": "Welcome to the World, Adriana",
    "ph": [
     "media/beyond/ca-adriana-1.jpg",
     "media/beyond/ca-adriana-2.jpg"
    ],
    "vid": {
     "src": "media/beyond/ca-adriana-timelapse.mp4",
     "poster": "media/beyond/ca-adriana-timelapse.jpg"
    },
    "d": "A hand lettered welcome card for a newborn, written in ink to be kept forever. Ask for one with your baby’s name."
   },
   {
    "t": "Merry Christmas",
    "ph": [
     "media/beyond/g-calligraphy-greetings-1.jpg"
    ],
    "d": "Hand lettered Christmas greetings in ink with a wax seal, each card written by hand.",
    "ig": "https://www.instagram.com/reel/CmjNT2kgwQ4/"
   },
   {
    "t": "Good Morning",
    "ph": [
     "media/beyond/g-calligraphy-greetings-2.jpg"
    ],
    "d": "A simple good morning, written by hand to start someone’s day."
   },
   {
    "t": "Wedding Initials",
    "ph": [
     "media/beyond/g-calligraphy-wedding-initials-1.jpg",
     "media/beyond/g-calligraphy-wedding-initials-2.jpg",
     "media/beyond/g-calligraphy-wedding-initials-3.jpg",
     "media/beyond/g-calligraphy-wedding-initials-4.jpg"
    ],
    "d": "Personalised initials in ink and gold for invitations, signage and keepsakes. A customised font can be designed for your names.",
    "ig": "https://www.instagram.com/p/CXL7RFZPneg/"
   },
   {
    "t": "Happy Birthday",
    "ph": [
     "media/beyond/g-calligraphy-happy-birthday-1.jpg",
     "media/beyond/g-calligraphy-happy-birthday-2.jpg",
     "media/beyond/g-calligraphy-happy-birthday-3.jpg"
    ],
    "d": "Hand lettered birthday cards, each written for the person receiving it."
   }
  ]
 },
 {
  "id": "fashion",
  "name": "Fashion",
  "line": "Drawings and colour you can wear",
  "items": [
   {
    "t": "Bird",
    "ph": [
     "media/beyond/fa-bird-1.jpg",
     "media/beyond/fa-bird-2.jpg",
     "media/beyond/fa-bird-3.jpg",
     "media/beyond/fa-bird-4.jpg",
     "media/beyond/fa-bird-5.jpg"
    ],
    "d": "A hand drawn bird, digitised and printed onto a shirt: any drawing can become something you wear. Ask to turn your favourite drawing or painting into a print."
   },
   {
    "t": "Poured Colour Top",
    "ph": [
     "media/beyond/fa-shirt-1.jpg",
     "media/beyond/fa-shirt-2.jpg",
     "media/beyond/fa-shirt-3.jpg",
     "media/beyond/fa-shirt-4.jpg",
     "media/beyond/fa-shirt-5.jpg",
     "media/beyond/fa-shirt-6.jpg",
     "media/beyond/fa-shirt-7.jpg"
    ],
    "vid": {
     "src": "media/beyond/fa-shirt-timelapse.mp4",
     "poster": "media/beyond/fa-shirt-timelapse.jpg"
    },
    "d": "Dyed by hand with poured colours: folded, painted, rested and rinsed, so every top comes out one of a kind. Made to order in your colours and size."
   },
   {
    "t": "Beach Time Pouch",
    "ph": [
     "media/beyond/g-fashion-beach-pouch-1.jpg",
     "media/beyond/g-fashion-beach-pouch-2.jpg",
     "media/beyond/g-fashion-beach-pouch-3.jpg",
     "media/beyond/g-fashion-beach-pouch-4.jpg",
     "media/beyond/g-fashion-beach-pouch-5.jpg"
    ],
    "d": "Hand painted pouches, each one a small summer painting you can carry."
   },
   {
    "t": "Shou Hbeyne T‑shirt",
    "ph": [
     "media/beyond/g-fashion-tshirt-1.jpg",
     "media/beyond/g-fashion-tshirt-2.jpg",
     "media/beyond/g-fashion-tshirt-3.jpg",
     "media/beyond/g-fashion-tshirt-4.jpg"
    ],
    "d": "A printed T‑shirt design with hand lettering."
   }
  ]
 },
 {
  "id": "furniture",
  "name": "Furniture",
  "line": "Tables, trays and objects given a second life with colour",
  "items": [
   {
    "t": "Poured Coffee Tables",
    "ph": [
     "media/beyond/fu-coffee-1.jpg",
     "media/beyond/fu-coffee-2.jpg",
     "media/beyond/fu-coffee-3.jpg",
     "media/beyond/fu-coffee-4.jpg",
     "media/beyond/fu-gold-1.jpg"
    ],
    "vid": {
     "src": "media/beyond/fu-coffee-timelapse.mp4",
     "poster": "media/beyond/fu-coffee-timelapse.jpg"
    },
    "d": "Old coffee tables given a new life with poured acrylic and resin: marble swirls, bold stripes and gold veins. Every table is unique and can be made in your colours.",
    "ig": "https://www.instagram.com/reel/CUYGAQmhLHC/"
   },
   {
    "t": "Side Tables",
    "ph": [
     "media/beyond/fu-side-1.jpg",
     "media/beyond/fu-side-2.jpg",
     "media/beyond/fu-side-3.jpg",
     "media/beyond/fu-side-4.jpg",
     "media/beyond/fu-side-5.jpg",
     "media/beyond/fu-side-6.jpg",
     "media/beyond/fu-side-7.jpg",
     "media/beyond/fu-pourtop-1.jpg",
     "media/beyond/fu-pourtop-2.jpg",
     "media/beyond/fu-pourtop-3.jpg"
    ],
    "vid": {
     "src": "media/beyond/fu-side-timelapse.mp4",
     "poster": "media/beyond/fu-side-timelapse.jpg"
    },
    "d": "From pretty in pink to abstract art: side tables revamped with poured colour and a protective finish, so they stay practical every day.",
    "ig": "https://www.instagram.com/reel/CqxQShkAsdd/"
   },
   {
    "t": "Crayon Resin Table",
    "ph": [
     "media/beyond/fu-crayon-1.jpg",
     "media/beyond/fu-crayon-2.jpg",
     "media/beyond/fu-crayon-3.jpg"
    ],
    "vid": {
     "src": "media/beyond/fu-crayon-timelapse.mp4",
     "poster": "media/beyond/fu-crayon-timelapse.jpg"
    },
    "d": "Hundreds of crayons set in clear resin, a playful table top full of colour, perfect for a child’s room."
   },
   {
    "t": "Poured Tray",
    "ph": [
     "media/beyond/fu-tray-1.jpg",
     "media/beyond/fu-tray-2.jpg",
     "media/beyond/fu-tray-3.jpg"
    ],
    "vid": {
     "src": "media/beyond/fu-tray-timelapse.mp4",
     "poster": "media/beyond/fu-tray-timelapse.jpg"
    },
    "d": "A wooden tray poured with acrylics: useful, decorative and made to be used."
   },
   {
    "t": "Painted Cabinet",
    "ph": [
     "media/beyond/fu-cabinet-1.jpg",
     "media/beyond/fu-cabinet-2.jpg",
     "media/beyond/fu-cabinet-3.jpg"
    ],
    "d": "A plain cabinet transformed with paint and a fresh finish."
   },
   {
    "t": "Painted Lamp",
    "ph": [
     "media/beyond/fu-lamp-1.jpg"
    ],
    "d": "A lamp painted by hand to match the room it lights."
   },
   {
    "t": "Marbled Mug",
    "ph": [
     "media/beyond/fu-mug-1.jpg",
     "media/beyond/fu-mug-2.jpg"
    ],
    "d": "The pouring technique on a smaller scale: a marbled mug for every morning."
   }
  ]
 },
 {
  "id": "eggs",
  "name": "Easter Eggs",
  "line": "Every Easter a new idea, a different story on the table each year",
  "items": [
   {
    "t": "Easter 2025: Poured Eggs",
    "ph": [
     "media/beyond/eg-2025a-1.jpg",
     "media/beyond/eg-2025a-2.jpg"
    ],
    "d": "Eggs poured in bright swirling colours, no two alike."
   },
   {
    "t": "Easter 2019: Characters",
    "ph": [
     "media/beyond/eg-2019-table.jpg",
     "media/beyond/eg-2025a-3.jpg",
     "media/beyond/eg-2025a-4.jpg",
     "media/beyond/eg-2025a-5.jpg",
     "media/beyond/eg-2025a-6.jpg"
    ],
    "d": "Eggs that became characters around the Easter table: a unicorn with flowers in her mane, cactus eggs planted in little pots, a green turtle with goggles, a minion and an owl."
   },
   {
    "t": "Easter 2025: The Table",
    "ph": [
     "media/beyond/eg-2025b-1.jpg",
     "media/beyond/eg-2025b-2.jpg",
     "media/beyond/eg-2025b-3.jpg",
     "media/beyond/eg-2025b-4.jpg",
     "media/beyond/eg-2025b-5.jpg"
    ],
    "d": "Easter brought to the table: a wreath of metallic painted eggs and folded napkin bunnies holding a painted egg at every plate."
   }
  ]
 },
 {
  "id": "locks",
  "name": "Locks",
  "line": "Leave a memory wherever you travel",
  "items": [
   {
    "t": "Love Locks",
    "ph": [
     "media/beyond/locks-1.jpg",
     "media/beyond/locks-2.jpg",
     "media/beyond/locks-3.jpg"
    ],
    "d": "Where have you put a lock? On a bridge, a fence or a gate somewhere you never want to forget. A hand painted padlock, customised with your names, a date or a symbol, turns a trip into a memory: leave it behind as a promise, or bring it home as a keepsake.",
    "ig": "https://www.instagram.com/p/Cf3S6TuqJ7r/"
   }
  ]
 },
 {
  "id": "baubles",
  "name": "Baubles",
  "line": "Christmas ornaments splattered and painted by hand",
  "items": [
   {
    "t": "Christmas Baubles",
    "ph": [
     "media/beyond/ba-all-1.jpg",
     "media/beyond/ba-all-2.jpg",
     "media/beyond/ba-all-3.jpg",
     "media/beyond/ba-all-4.jpg",
     "media/beyond/ba-all-5.jpg",
     "media/beyond/ba-all-6.jpg",
     "media/beyond/ba-all-7.jpg",
     "media/beyond/ba-all-8.jpg",
     "media/beyond/ba-all-9.jpg"
    ],
    "vid": {
     "src": "media/beyond/ba-all-timelapse.mp4",
     "poster": "media/beyond/ba-all-timelapse.jpg"
    },
    "d": "Ornaments splattered, poured and painted by hand, from jewel tones to pink and silver. Each one is different. Order a set in your colours for your tree, your office or a special corner, or as gifts personalised with names.",
    "ig": "https://www.instagram.com/reel/DSZ9h4AE2Yx/"
   }
  ]
 }
];
const PAST_WS=[
 {
  "id": "kids",
  "name": "Kids workshops",
  "line": "Little Picasso classes where children learn colour, focus and confidence",
  "href": "index.html#workshops",
  "cta": "Book a kids workshop",
  "items": [
   {
    "t": "Space Workshop",
    "ph": [
     "media/beyond/ws-space-1.jpg",
     "media/beyond/ws-space-2.jpg",
     "media/beyond/ws-space-3.jpg",
     "media/beyond/ws-space-4.jpg"
    ],
    "d": "Planets poured in galaxy colours and hand painted mini ornaments to hang around them."
   },
   {
    "t": "One on One: Peacock",
    "ph": [
     "media/beyond/ws-peacock-1.jpg",
     "media/beyond/wp-13.jpg",
     "media/beyond/wp-14.jpg",
     "media/beyond/wp-15.jpg"
    ],
    "d": "A private session with bright metallic paints, building a peacock feather by feather."
   },
   {
    "t": "One on One: Free Expression",
    "ph": [
     "media/beyond/ws-oneone-1.jpg",
     "media/beyond/ws-oneone-2.jpg"
    ],
    "d": "A private class where the child leads: handprints, patterns and colour, with no rules."
   }
  ]
 },
 {
  "id": "adults",
  "name": "Adult workshops",
  "line": "Relaxed sessions to slow down, paint and take home something you made",
  "href": "index.html#workshops",
  "cta": "Book an adult workshop",
  "items": [
   {
    "t": "Frida Workshop",
    "ph": [
     "media/beyond/ws-frida-1.jpg",
     "media/beyond/ws-frida-2.jpg",
     "media/beyond/ws-frida-3.jpg",
     "media/beyond/ws-frida-4.jpg",
     "media/beyond/ws-frida-5.jpg",
     "media/beyond/wp-5.jpg"
    ],
    "d": "From a blank page to a Frida portrait with flowers in her hair, guided step by step."
   },
   {
    "t": "Painting at Ivy",
    "ph": [
     "media/beyond/ws-ivy-1.jpg",
     "media/beyond/ws-ivy-2.jpg",
     "media/beyond/ws-ivy-4.jpg",
     "media/beyond/wp-7.jpg",
     "media/beyond/wp-8.jpg",
     "media/beyond/wp-6.jpg"
    ],
    "d": "An evening of desert landscapes under the moon, painted together among the plants."
   },
   {
    "t": "Private Session: The Tree",
    "ph": [
     "media/beyond/ws-tree-1.jpg",
     "media/beyond/ws-tree-2.jpg",
     "media/beyond/ws-tree-3.jpg",
     "media/beyond/ws-tree-4.jpg",
     "media/beyond/wp-4.jpg"
    ],
    "d": "A one to one class painting a tree in acrylics, from the trunk to the last leaf."
   },
   {
    "t": "Watercolour",
    "ph": [
     "media/beyond/ws-water-1.jpg",
     "media/beyond/ws-water-2.jpg",
     "media/beyond/ws-water-3.jpg"
    ],
    "d": "Learning to let water lead the colour: soft skies and beaches in watercolour."
   },
   {
    "t": "Wax Crayon",
    "ph": [
     "media/beyond/ws-wax-1.jpg"
    ],
    "d": "Bold sunset scenes scratched and blended in wax crayon."
   },
   {
    "t": "Drawing Workshop",
    "ph": [
     "media/beyond/ws-drawing-1.jpg",
     "media/beyond/wsd-1.jpg",
     "media/beyond/wsd-2.jpg",
     "media/beyond/wsd-3.jpg"
    ],
    "d": "Line, shape and a single rose: drawing basics for beginners."
   },
   {
    "t": "Studio Sessions",
    "ph": [
     "media/beyond/ws-studio-1.jpg",
     "media/beyond/ws-studio-2.jpg",
     "media/beyond/blur-s1.jpg",
     "media/beyond/blur-s2.jpg"
    ],
    "d": "Open painting evenings at the studio, everyone working on their own piece."
   }
  ]
 },
 {
  "id": "occasional",
  "name": "Occasional workshops",
  "line": "Seasonal sessions for Christmas, Halloween, back to school and more",
  "href": "index.html#workshops",
  "cta": "Ask about the next one",
  "items": [
   {
    "t": "Christmas Painting",
    "ph": [
     "media/beyond/ws-xpaint-1.jpg",
     "media/beyond/blur-x1.jpg",
     "media/beyond/xgroup3.jpg",
     "media/beyond/xgroup2.jpg",
     "media/beyond/blur-x4.jpg",
     "media/beyond/wp-11.jpg",
     "media/beyond/ws-xpaint-2.jpg",
     "media/beyond/ws-xpaint-3.jpg",
     "media/beyond/ws-xpaint-4.jpg"
    ],
    "d": "Kids painting Santa stuck in the chimney and Rudolph with his red nose, with cotton snow and ribbons."
   },
   {
    "t": "Christmas Baubles",
    "ph": [
     "media/beyond/ws-xbaubles-2.jpg",
     "media/beyond/ws-xbaubles-3.jpg",
     "media/beyond/ws-xbaubles-4.jpg",
     "media/beyond/ws-xbaubles-5.jpg"
    ],
    "d": "Wooden ornaments painted by little hands: snowy hills, sunsets and family faces for the tree."
   },
   {
    "t": "Halloween Pumpkins",
    "ph": [
     "media/beyond/ws-pumpkin-1.jpg",
     "media/beyond/ws-pumpkin-2.jpg",
     "media/beyond/ws-pumpkin-3.jpg",
     "media/beyond/ws-pumpkin-4.jpg",
     "media/beyond/wp-9.jpg"
    ],
    "d": "Pumpkins dotted, painted and decorated for the season."
   },
   {
    "t": "Back to School: Little Picasso",
    "ph": [
     "media/beyond/ws-school-1.jpg",
     "media/beyond/ws-school-2.jpg",
     "media/beyond/ws-school-3.jpg",
     "media/beyond/ws-school-4.jpg",
     "media/beyond/ws-school-5.jpg",
     "media/beyond/ws-school-6.jpg",
     "media/beyond/wp-10.jpg"
    ],
    "d": "A back to school edition for kids: colours in different languages, fine motor skills, focus and new friends."
   }
  ]
 }
];
// Each piece has: t (title), ph (photos). Optional fields you can fill in later:
// d (description), medium, size, year, price, sold:true
const beyondPiece=(c,it)=>({_list:null,title:it.t,series:c.name,also:[],year:it.year||null,medium:it.medium||"",size:it.size||"",price:it.price||null,sold:!!it.sold,file:null,img:it.ph[0],big:it.ph[0],story:it.d||"",frame:"",beyond:c});
if($("#beyondTeaser")) $("#beyondTeaser").innerHTML=BEYOND.filter(c=>c.id!=="locks").slice(0,6).map(c=>`<a class="bt-card" href="beyond.html#${c.id}"><img src="${c.items[0].ph[0]}" alt="${esc(c.name)}" loading="lazy"><span>${esc(c.name)}</span></a>`).join("");
function regPieces(cats){const L=[];cats.forEach(c=>c.items.forEach(it=>{const p=beyondPiece(c,it);MEDIA[p.title]=[...(it.vid?[{type:"video",src:it.vid.src,poster:it.vid.poster,label:"Video"}]:[]),...it.ph.slice(1).map((src,k)=>({type:"image",src,label:"Photo "+(k+2)}))];if(it.ig)INSTAGRAM_POSTS[p.title]=it.ig;p.rel=it.rel||null;p._list=L;L.push(p)}));return L}
const tileHTML=(c,it,j)=>`<button type="button" class="by-item" data-c="${c.id}" data-j="${j}"><img src="${it.ph[0]}" alt="${esc(it.t)}" loading="lazy">${it.ph.length>1?`<span class="by-count">${it.ph.length} photos</span>`:""}${it.vid?`<span class="by-vid">▶ Video</span>`:""}<span class="by-t">${esc(it.t)}</span></button>`;
if($("#pastWs")){
  const WS_LIST=regPieces(PAST_WS);
  $("#pastWsTabs").innerHTML=PAST_WS.map((c,i)=>`<button type="button" class="chip${i?"":" on"}" data-i="${i}">${esc(c.name.replace(" workshops",""))}</button>`).join("");
  const show=i=>{const c=PAST_WS[i];$("#pastWsLine").textContent=c.line;$("#pastWs").innerHTML=c.items.map((it,j)=>tileHTML(c,it,j)).join("");
    document.querySelectorAll("#pastWsTabs .chip").forEach(b=>b.classList.toggle("on",+b.dataset.i===i));
    document.querySelectorAll("#pastWs .by-item").forEach(b=>b.onclick=()=>openBeyond(WS_LIST.find(p=>p.beyond===c&&p.title===c.items[+b.dataset.j].t)))};
  document.querySelectorAll("#pastWsTabs .chip").forEach(b=>b.onclick=()=>show(+b.dataset.i)); show(0);
}
let BY_LIST=null;
if($("#beyond")){
  $("#byTabs").innerHTML=BEYOND.map(c=>`<a class="chip" href="#${c.id}">${esc(c.name)}</a>`).join("");
  $("#beyond").innerHTML=BEYOND.map(c=>`<section class="by-sec" id="${c.id}"><div class="wrap"><div class="by-head"><h2>${esc(c.name)}</h2><p>${esc(c.line)}</p></div><div class="by-grid">${c.items.map((it,j)=>`<button type="button" class="by-item" data-c="${c.id}" data-j="${j}"><img src="${it.ph[0]}" alt="${esc(it.t)}" loading="lazy">${it.ph.length>1?`<span class="by-count">${it.ph.length} photos</span>`:""}${it.vid?`<span class="by-vid">▶ Video</span>`:""}${it.sold?`<span class="ribbon">SOLD</span>`:""}<span class="by-t">${esc(it.t)}</span></button>`).join("")}</div></div></section>`).join("");
  BY_LIST=regPieces(BEYOND);
  if(0)BEYOND.forEach(c=>c.items.forEach(it=>{const p=beyondPiece(c,it);MEDIA[p.title]=[...(it.vid?[{type:"video",src:it.vid.src,poster:it.vid.poster,label:"Video"}]:[]),...it.ph.slice(1).map((src,k)=>({type:"image",src,label:"Photo "+(k+2)}))];if(it.ig)INSTAGRAM_POSTS[p.title]=it.ig;p.rel=it.rel||null;BY_LIST.push(p)}));
  document.querySelectorAll(".by-item").forEach(b=>b.onclick=()=>{const c=BEYOND.find(x=>x.id===b.dataset.c);openBeyond(BY_LIST.find(p=>p.beyond===c&&p.title===c.items[+b.dataset.j].t))});
}
function openBeyond(p){
  cur=p; showMedia(p,0);
  const rows=[["Category",{html:`<a class="ser-link" href="${p.beyond.href||"beyond.html#"+p.beyond.id}">${esc(p.beyond.name)}</a>`}],...(p.rel?[["Goes with",{html:`<a class="ser-link rel-link" href="${p.rel[1]}">${esc(p.rel[0])}</a>`}]]:[]),["Year",p.year],["Medium",p.medium],["Size",p.size],[p.beyond.cta?"Bookings":"Made to order",p.beyond.cta?"Private and group sessions on request":"Yes, in your colours"]].filter(r=>r[1]);
  const wa=waLink(p.beyond.cta?`Hello Mery, I saw the "${p.title}" workshop on your website. When is the next one?`:`Hello Mery, I saw "${p.title}" (${p.beyond.name.toLowerCase()}) on your website. I would love something like it.`);
  $("#lbInfo").innerHTML=`
    <div class="eyebrow"><a class="ser-link" href="${p.beyond.href||"beyond.html#"+p.beyond.id}">${esc(p.beyond.name)}</a></div>
    <h3>${esc(p.title)}</h3>
    ${stripHTML(p)}
    ${p.story?`<p class="story-t">${esc(p.story)}</p>`:`<p class="story-t">${esc(p.beyond.line)}.</p>`}
    <dl class="details">${rows.map(([k,v])=>`<div><dt>${k}</dt><dd>${v&&v.html?v.html:esc(String(v))}</dd></div>`).join("")}</dl>
    ${p.price?`<div class="price">${priceHTML(p)}</div>`:p.sold?`<div class="price">${priceHTML(p)}</div>`:""}
    <div class="ask-row" style="margin-top:22px">
      <a class="btn btn-ink" href="mailto:${EMAIL}?subject=${encodeURIComponent((p.beyond.cta?"Workshop: ":"Custom piece inspired by ")+p.title)}">${p.beyond.cta||"Ask for a custom piece"}</a>
      <a class="ico ico-wa" href="${wa}" target="_blank" rel="noopener" aria-label="WhatsApp Mery">${WA_ICON}</a>
      <a class="ico ico-ig" href="https://www.instagram.com/paintings.bymery/" target="_blank" rel="noopener" aria-label="Instagram">${IG_ICON}</a>
    </div>`;
  document.querySelectorAll(".lb-strip button").forEach(b=>b.onclick=()=>showMedia(p,+b.dataset.k));
  document.querySelectorAll("#lbInfo .ser-link:not(.rel-link)").forEach(a=>a.onclick=e=>{e.preventDefault();closeLB();if(p.beyond.href)location.hash="workshops";else location.hash=p.beyond.id});
  $("#lbInfo").scrollTop=0;
  $("#lb").classList.add("open"); document.body.style.overflow="hidden";
}
// travel strip: arrows to browse the photos
(()=>{const st=document.querySelector(".travel-strip"); if(!st) return;
  const wrap=document.createElement("div"); wrap.className="travel-nav";
  wrap.innerHTML=`<button type="button" class="tn-b" aria-label="Previous photos">‹</button><button type="button" class="tn-b" aria-label="Next photos">›</button>`;
  st.parentNode.insertBefore(wrap,st.nextSibling);
  const [p,n]=wrap.querySelectorAll("button"); const step=()=>Math.max(260,st.clientWidth*0.8);
  p.onclick=()=>st.scrollBy({left:-step(),behavior:"smooth"}); n.onclick=()=>st.scrollBy({left:step(),behavior:"smooth"});
  const upd=()=>{p.disabled=st.scrollLeft<5; n.disabled=st.scrollLeft+st.clientWidth>=st.scrollWidth-5};
  st.addEventListener("scroll",upd,{passive:true}); addEventListener("resize",upd); upd();
})();
