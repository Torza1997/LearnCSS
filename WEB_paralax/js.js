document.addEventListener("mousemove",parralax);
console.log(1);
function parralax(e){
    this.querySelectorAll('.layer').forEach(layer => {
        const spd = layer.getAttribute('data-speed');

        const x =(window.innerWidth - e.pageX*spd)/100;
        const y =(window.innerHeight - e.pageY*spd)/100;

        layer.style.transform = `translateX(${x}px) translateY(${y}px)` ;
    });
}