// ==UserScript==
// @name         kinopoisk-backlink
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://kirlovon.dev/Kinopoisk-Watch/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==


const kinopoiskLink = 'https://kinopoisk.ru/';
const url = window.location.href;
const splitted = url.split('=');
const id = splitted[1];
console.log(id);

//links creation
let film = kinopoiskLink + "film/" + id;
console.log("film = " + film);

let logo = document.getElementById("logo");
logo.href = film;
