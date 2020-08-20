/*const img_anm = document.querySelector(".img_logo");
const tl = new TimelineMax();

tl.fromTo(img_anm,1, {height:"0%"}, {height:'80%'});*/
let stars;
stars =()=> {
    let count = 50;
    let scene = document.querySelector('.scene');
    let i = 0;
    while(i < count){
        let star = document.createElement('i');
        let x = Math.floor(Math.random() * window.innerWidth);
        let h = Math.random() * 100;
        let duration = Math.random() * 1 ;

        star.style.left = x + 'px';
        star.style.width = 1 + 'px';
        star.style.height = h + 'px';
        star.style.animationDuration = duration + 's';

        scene.appendChild(star);
        i++;
    }
}
stars();

