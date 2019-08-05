const faders = document.querySelectorAll(".fadeIn");
const slideLeft = document.querySelectorAll(".slideInLeft");
const slideRight = document.querySelectorAll(".slideRight");
const slideDown = document.querySelectorAll(".slideDown");
const slide3D = document.querySelectorAll(".slide3D");
const slide3D2 = document.querySelectorAll(".slide3D2");




const appearOptions = {
    threshold: 0.5,
    // rootMargin: "0px 0px -200px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){

    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });

}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

slideLeft.forEach(fader => {
    appearOnScroll.observe(fader);
});

slideRight.forEach(fader => {
    appearOnScroll.observe(fader);
});

slideDown.forEach(fader => {
    appearOnScroll.observe(fader);
});

slide3D.forEach(fader => {
    appearOnScroll.observe(fader);
});

slide3D2.forEach(fader => {
    appearOnScroll.observe(fader);
});








var $doc = $(document);
var hidden = $(".hidden");

$doc.on('scroll', function(){
    var top = $doc.scrollTop()/3;
    hidden.css('opacity', 1);
});
 