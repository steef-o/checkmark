'use strict';

const loaderContainer = document.getElementById('loader');
const success = document.getElementById('success');
const error = document.getElementById('error');

const loader = lottie.loadAnimation({
    container: loaderContainer, // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'data/v04.json' // the path to the animation json
});

loader.addEventListener('data_ready', function() {
    loader.playSegments([1, 34], true);

    success.addEventListener('click', function() {
        loader.addEventListener('loopComplete', function() {
            loader.playSegments([35, 120], true);
            loader.loop = false;
        });
    });

    error.addEventListener('click', function() {
        loader.addEventListener('loopComplete', function() {
            loader.playSegments([121, 200], true);
            loader.loop = false;
        });
    });
});
