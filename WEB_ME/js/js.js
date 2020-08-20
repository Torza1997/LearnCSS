$(()=>{
    $('.menu-bar').draggable();
})
$(()=>{
    $('.myname').draggable();
})
/*************************************************/
let container = document.getElementById('container');
for( let i = 0; i < 15; i++){
    let box = document.createElement('div');
    box.className ='particle';
    container.appendChild(box);

}
for( let i = 0; i < 2; i++){
    let border = document.createElement('div');
    border.className ='border';
    container.appendChild(border);

}
/******************scoll mouse read*******************/
window.addEventListener('scroll',() =>{
    let value = window.scrollY;
    //console.log(value);
})
/**********************touschmove******************************** 
let elm = document.getElementById("menu-bar");
elm.addEventListener('touchmove',(ev)=>{
    let value = ev.targetTouches[0];
    elm.style.left = value.pageX + 'px';
    elm.style.top = value.pageY +'px';
    console.log(value.pageX + 'px');
    console.log(value.pageY + 'px');
})
*/

/*gsap***************/
gsap.from('#container',{opacity:0,duration:1});
gsap.from('#myname',{opacity:0,duration:1,x:-50 ,ease:Power2.easeInOut,delay:1.0});
gsap.from('#menu-bar',{opacity:0,duration:1,y:-50,delay:1.5});

/********scrollTrigger ********* */
let tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#content1_",
        start:"center",
        end:"bottom top",
        //markers:true,
        scrub:true
    }
})
tl.from('.dots',{opacity:0,duration:1});
tl.from('#container2',{opacity:0,duration:1,x:"-50%"});
tl.to('.fa-bars',{duration:1,background: "#ff9100"});
tl.to('.button i',{duration:1,background: "#ff9100"});
tl.to('.buttons',{duration:1,background: "#ff9100"});


let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#content2_",
        start:"center",
        end:"bottom top",
        //markers:true,
        scrub:true
    }
})
tl2.from('#container3',{opacity:0,duration:1,x:"50%"});
tl2.to('.fa-bars',{duration:1,background: "#000000"});
tl2.to('.button i',{duration:1,background: "#000000"});
tl2.to('.buttons',{duration:1,background: "#000000"});


/*************parallax*************** */
document.addEventListener("mousemove",parallax);
function parallax(e){
    this.querySelectorAll('.layer').forEach(layer => {
        const speed =layer.getAttribute('data-speed');
       
        const x = (window.innerWidth - e.pageX * speed)/100;
        const y = (window.innerHeight - e.pageY * speed)/100;
        console.log(x);
        layer.style.transform =`translateX(${x}px) translateY(${y}px)`;
    });
}

