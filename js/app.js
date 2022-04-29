var table = document.getElementById("table");
var close = document.getElementById("close");
var btn = document.getElementById("btn");
var plus = document.querySelector(".plus");
var manfi = document.querySelector(".manfi");
var number = document.querySelector(".number");
var btnmenu = document.querySelector(".btn-menu");
var i = '';
var n = 0;
var l;
var contentslide = document.getElementsByClassName('content-slide');

function disno () {
    for (l = 0; l < contentslide.length; l++) {
        contentslide[l].style.display = 'none';
    }
}
setInterval(function() {
    n++;
    if(n > contentslide.length -1) {
        n = 0;
    }
    disno();
    contentslide[n].style.display = 'block';
},5000)
manfi.addEventListener('click' , () => {
    if (i > 0) {
        number.innerHTML = i--;
    }else {
        number.innerHTML = 0;
    }
})
btnmenu.addEventListener('click' , ()=> {
    if (i == 0) {
        alert('شما که هنوز سفارشی ندادید')
    }else {
        alert("سفارش شما با موفقیت ثبت شد")
    }
})
plus.addEventListener('click' , () => {
    number.innerHTML = i++;
})
btn.addEventListener('click' , (e) => {
    e.preventDefault();
    table.style.display = 'flex';
})
close.addEventListener('click' , () => {
    table.style.display = 'none';
})