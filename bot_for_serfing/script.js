// ==UserScript==
// @name         Bot for google
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.google.com/*
// @match        https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/*
// @match        https://crushdrummers.ru/*
// @grant        none
// ==/UserScript==

let links = document.links;
let site = location.host;
if (location.host == "www.google.com"){
    let sites = {
    "xn----7sbab5aqcbiddtdj1e1g.xn--p1ai":["Гобой", "Как звучит флейта", "Что такое валторна", "Как выглядит тромбон", "Музыкальные диктанты онлайн", "Виолончель"],
    "crushdrummers.ru":["Барабанное шоу","Шоу барабанщиков москва","Заказать барабанное шоу"]
    }
    var btnK = document.getElementsByName('btnK')[1];
    if (btnK!=undefined){
        site = Object.keys(sites)[getRandom(0,Object.keys(sites).length)];
        let keywords = sites[site];
        let keyword  = keywords[getRandom(0,keywords.length)];
        document.cookie = "site="+site;
        writeWord(keyword);
    }
    else {
        site = getCookie('site');
    }
    getGooglePage();
}
else {
    if (getRandom(0,100)>20){
        let index = getRandom(0,links.length);
        if(links[index].href.indexOf(site)!=-1)
            setTimeout(()=>{links[index].click();},getRandom(3000, 10000));
        else location.href = `https://${site}/`;
    }
    else location.href = "https://www.google.com/";
}

function getRandom(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}

function writeWord(keyword){
  let i = 0;
  let timerId = setInterval(()=>{
    document.getElementsByName('q')[0].value += keyword[i];
    i++;
    if (i==keyword.length) {
        clearInterval(timerId);
        btnK.click();
    }
  },300);
}

function getGooglePage(){
    let goNextPage = true;
    for(let i=0; i<links.length; i++){
        if(links[i].href.indexOf(site)!=-1){
            let link = links[i];
            setTimeout(()=>{link.scrollIntoView(true);},2000);
            goNextPage = false;
            setTimeout(()=>link.click(), getRandom(3000,10000));
            break;
        }
    }
    if (goNextPage) setTimeout(()=>{
        if (document.getElementsByClassName('YyVfkd')[0].innerText == 10) logo.click();
        else pnnext.click();
    }, getRandom(3000,10000));
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
 }
