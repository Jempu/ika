
// website category slider

const slider = $('.slider');
const sliderUl = $(slider).find('ul');
var sliderSlides = $(sliderUl).children();
var slideCount = sliderSlides.length;
var slideWidth = $(sliderUl).find('li').width();
var slideHeight = $(sliderUl).find('li').height();
var currentSlide = -1;
var isTransitioning = false;
function setSlider() {
    sliderSlides = $(sliderUl).find("li");
    slideCount = sliderSlides.length;
    slideWidth = $(sliderSlides).width();
    slideHeight = $(sliderSlides).height();
    $(sliderUl).css({ "width": slideCount * slideWidth, "margin-left": - slideWidth });
    $(sliderUl).find("li:last-child").prependTo($(sliderUl));
}
setSlider();

// website previews

$("#cloud9-carousel").Cloud9Carousel( {
    buttonLeft: $("#buttons > .left"),
    buttonRight: $("#buttons > .right"),
    autoPlay: 0,
    bringToFront: true,
    onLoaded: function() {
        
    }
});

// finally, check if has been redirected

function checkAnchor() {
    let anchor = document.URL.split('#').length > 1 ? document.URL.split('#')[1] : null;
    if (anchor == null) return;
    switch (anchor) {
        case 'ajokuva':
            console.log(`Redirected user from ${anchor} to vehicle photoshoot section.`);
            break;
        case 'atk':
            console.log(`Redirected user from ${anchor} to technological device assistance section.`);
            break;
        case 'dronekuvaus':
            console.log(`Redirected user from ${anchor} to drone photoshoot section.`);
            break;
        case 'kotisivut':
            console.log(`Redirected user from ${anchor} to personalized homepage section.`);
            break;
        case 'ylioppilaat':
            console.log(`Redirected user from ${anchor} to upper-secondary graduate photoshoot section.`);
            break;
    }
}
checkAnchor();