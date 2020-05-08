// ==UserScript==
// @name         Bot for google
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       https://vozhzhaev.ru
// @match        https://www.google.com/*
// @grant        none
// ==/UserScript==

let btnK = document.getElementsByName('btnK')[1];

if (btnK!=undefined){
    document.getElementsByName('q')[0].value = "Гобой";
    btnK.click()
}
let links = document.links;
for(let i=0; i<links.length; i++){
    if(links[i].href.indexOf('xn----7sbab5aqcbiddtdj1e1g.xn--p1ai')!=-1){
        links[i].click();
        break;
    }
}
