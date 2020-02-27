window.onload = function () {
    // necessary for dropdown menus to function properly: must be after function
    // https://stackoverflow.com/a/25347431
    $('.ui.dropdown').dropdown();

    // grab button with query selector
    // let btn = document.querySelector('#clickMe')
    // console.log(btn)  //(btn.style) or other btn. commands

    // grab things to change with query selector
    // let changeMe = document.querySelector('#changeMe')
    // console.log(changeMe)

    // add event listener to button, can be click, mouseover, etc
    // btn.addEventListener('mouseover', function(){
    //   let par = document.createElement('p')
    //   par.innerHTML = 'I hope you enjoy it as much as I do!'
    //     console.log('you did it!')
    //   changeMe.innerHTML = 'Welcome to my Site'
    //   changeMe.style.fontSize = 20
    //   changeMe.style.backgroundColor = 'almond'
    //   changeMe.style.color = 'white'

    //   changeMe.appendChild(par)
    // })
    // line 27 is the end of the eventListener function
    // console.log('click')
}


// jQuery is required to run this code
$(document).ready(function () {
    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function () {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });
});

function scaleVideoContainer() {
    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height', unitHeight);
}

function initBannerVideoSize(element) {
    $(element).each(function () {
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);
}

function scaleBannerVideoSize(element) {

    var windowWidth = $(window).width(),
        windowHeight = $(window).height() + 5,
        videoWidth,
        videoHeight;

    // console.log(windowHeight);

    $(element).each(function () {
        var videoAspectRatio = $(this).data('height') / $(this).data('width');

        $(this).width(windowWidth);

        if (windowWidth < 1000) {
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({ 'margin-top': 0, 'margin-left': -(videoWidth - windowWidth) / 2 + 'px' });

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}
