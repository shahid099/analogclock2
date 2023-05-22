let deg = 6;
let hr = document.getElementById('hr');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

setInterval(()=> {
    let day = new Date();
    let hh = day.getHours();
    let mm = day.getMinutes();
    let ss = day.getSeconds();

    hr.style.transform = `rotateZ(${(hh*30) + (mm/2)}deg)`;
    min.style.transform = `rotateZ(${(mm*6)}deg)`;
    sec.style.transform = `rotateZ(${(ss*6)}deg)`;
}, 100)

/*
setInterval(()=> {

    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;


    hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
    min.style.transform = `rotateZ(${(mm)}deg)`;
    sec.style.transform = `rotateZ(${(ss)}deg)`;

}, 100)
*/