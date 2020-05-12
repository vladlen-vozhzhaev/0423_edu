// ==UserScript==
// @name         Bot for google
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.google.com/*
// @grant        none
// ==/UserScript==

let btnK = document.getElementsByName('btnK')[1];
let keywords = ["Гобой", "Как звучит флейта", "Что такое валторна", "Как выглядит тромбон", "Музыкальные диктанты онлайн", "Виолончель"];
let keyword  = keywords[getRandom(0,keywords.length)];

if (btnK!=undefined){
    document.getElementsByName('q')[0].value = keyword;
    setTimeout(()=>btnK.click(), getRandom(3000,10000));
}

let links = document.links;
for(let i=0; i<links.length; i++){
    if(links[i].href.indexOf('xn----7sbab5aqcbiddtdj1e1g.xn--p1ai')!=-1){
        let link = links[i];
        setTimeout(()=>link.click(), getRandom(3000,10000));
        break;
    }
}

function getRandom(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}
