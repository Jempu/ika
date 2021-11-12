// slider
const slider =  $('sideslider');
const sliderChildren = [].slice.call(slider.get(0).children);
var sliderLi = -1;
function setSliderLi(amount) {
    const index = Math.round(amount * sliderChildren.length);
    if (sliderLi == index) return;
    sliderLi = index;
    for (let i = 0; i < sliderChildren.length; i++) {
        const e = sliderChildren[i];
        if (i == index) {
            $(e).addClass('active');
        } else {
            $(e).removeClass('active');
        }
    }
}
setSliderLi(0);
$(document).scroll(function () {
    setSliderLi($(document).scrollTop() / ($(document).height()));
});

// carousel
$("#carousel1").Cloud9Carousel({
    buttonLeft: $("#buttons > .left"),
    buttonRight: $("#buttons > .right"),
    autoPlay: 0,
    bringToFront: true,
    onLoaded: function() {
        
    }
});