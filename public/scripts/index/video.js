
//StartUp home script

var videoPlayed = false; 
var maxZoomLevel = 130;
var videoContainer = document.querySelector('.vid-container');
var video = document.getElementById('vid');

document.addEventListener('scroll', function() {
var scrollPosition = window.pageYOffset;
var zoomLevel = Math.min(130, 1 + scrollPosition / 5);

var textBox = document.querySelector('.text-box');
textBox.style.transform = 'scale(' + zoomLevel + ')';


if (scrollPosition >= 4 && !videoPlayed) {
    var video = document.getElementById('vid');
    //   video.style.opacity = 1;
    video.play();
    videoPlayed = true; 
}

if (zoomLevel >= maxZoomLevel) {
    var text = document.getElementById('text-box');
    text.style.display = 'none';
}

var homeSection = document.getElementById('home');
var nextSection = document.getElementById('home2');

if (homeSection.getBoundingClientRect().bottom <= window.innerHeight * 2 ) {
    video.style.position = 'relative';
    // videoContainer.style.display = 'none'; 
} 

//else {
//     videoContainer.style.position = 'absolute';
// }

});