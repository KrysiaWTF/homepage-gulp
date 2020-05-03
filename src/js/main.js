"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below


const name = 'Krysia';
const age = '26';

console.log ('Lew nie sprzymierza się z kojotem');
console.log (`Cześć, mam na imię ${name}, mam ${age} lat i od niedawna uczę się programować`);

const myAge = 26

function ageCalculate (x) {
  x = x - myAge
  return x
}

let ageDifference = ageCalculate (22)

if (ageDifference > 0) {
  console.log(`Jesteś o tyle lat ode mnie starszy: ${ageDifference}`)
} else if (ageDifference < 0){
  console.log(`Jesteś o tyle lat ode mnie młodszy: ${Math.abs(ageDifference)}`)
} else {
  console.log(`Jesteś w moim wieku!`)
}



const menuDrop = document.querySelector('.navigation__list--js')
const navigationDrop = document.querySelector('.navigation__drop--js')


menuDrop.addEventListener('mouseenter', () => {
  navigationDrop.classList.add('navigation__drop--visible')
});

menuDrop.addEventListener('mouseleave', () => {
  navigationDrop.classList.remove('navigation__drop--visible')
});

// Praca domowa 03.05.2020 

const repoList = document.querySelector('.repo__list--js')

fetch("https://api.github.com/users/krysiawtf/repos")
.then(repos=>repos.json())
.then(repos=>{
  for(const repo of repos) {
    const {name, html_url} = repo;
    repoList.innerHTML += `<li> <a href="${html_url}">${name}</a> </li>`
  }
})


