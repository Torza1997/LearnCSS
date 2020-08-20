let svg = document.getElementById("svg_");
window.addEventListener('scroll',() =>{
    var value = window.scrollY;
    console.log(value);
    svg.style.left = value * .7+'px';
})