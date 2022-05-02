// CSS
// require('slick-carousel/slick/slick.css');
// require('./owl.carousel.min');
// require('slick-carousel/slick/slick-theme.css');
// require('lightbox2/dist/css/lightbox.min.css');
// require('../css/main.css');

// JS
// window.$ = require('jquery');
// window.slick = require('slick-carousel');
// window.lightbox = require('lightbox2');
// require('./main.js');


let menuBtn = document.getElementById('fa-bars')
let closeBtn = document.getElementById('fa-times')
let mobileUi = document.getElementById('mobile-ul')
let mobileUiList = mobileUi.querySelectorAll('li');


menuBtn.addEventListener('click', function () {
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'block';
    mobileUi.style['max-height'] = '250px';
    mobileUi.style.overflow = 'visible';
    mobileUiList.forEach(li => {
        li.style['max-height'] = '250px';
        li.style.overflow = 'visible';
    })
})
closeBtn.addEventListener('click', function () {
    menuBtn.style.display = 'block';
    closeBtn.style.display = 'none';
    mobileUi.style['max-height'] = '0';
    mobileUi.style.overflow = 'hidden';
    mobileUiList.forEach(li => {
        li.style['max-height'] = '0';
        li.style.overflow = 'hidden';
    })
})

//animation
document.addEventListener('scroll', function (e) {
    // console.log(document.querySelector('.partner-card-deck').offsetTop);
    var top = (window.pageYOffset - 100) + window.innerHeight,
        isVisible = top > document.querySelector('.partner-card-deck').offsetTop;
    // console.log(top);

    if (isVisible) {
        document.querySelector('.partner-card-deck').classList.add('anim_from_bottom');
    }

    // console.log(document.querySelector('.partner-card-deck'));
});