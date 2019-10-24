'use strict';

const loaderContainer = document.getElementById('loader');
const success = document.getElementById('success');
const error = document.getElementById('error');

const loader = lottie.loadAnimation({
    container: loaderContainer, // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'data/v06.json' // the path to the animation json
});

loader.addEventListener('DOMLoaded', function() {
    const htmlCollection = document.getElementsByClassName('checkmark-color');
    loader.playSegments([1, 34], true);

    // Success
    success.addEventListener('click', function() {
        loader.addEventListener('loopComplete', function() {
            loader.playSegments([35, 120], true);
            loader.loop = false;
            loader.setSpeed(1.1); // match speed

            for (let i = 0; i < htmlCollection.length; i++) {
                htmlCollection[i].classList.add('success');
                htmlCollection[i].classList.remove('error');
            }
        });
    });

    // Error
    error.addEventListener('click', function() {
        loader.addEventListener('loopComplete', function() {
            loader.playSegments([121, 200], true);
            loader.loop = false;

            for (let i = 0; i < htmlCollection.length; i++) {
                htmlCollection[i].classList.add('error');
                htmlCollection[i].classList.remove('success');
            }
        });
    });
});
