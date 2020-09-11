'use strict';

var videos = [
    './video/401999842.mp4',
    '/video/1784891306.mp4',
    '/video/1819002282.mp4',
];

var indexVideos = 0;

function addVideoIntoContainer(videoUrl) {
    let video = document.createElement('video');
    video.src = videoUrl;
    video.width = 200;
    video.height = video.width / (16/9);
    video.addEventListener('click', event => {
        document.querySelector('#video-main > video').src = video.src;
    })
    videoContainer.appendChild(video);
}




var videoContainer = document.querySelector('#video-list');

videos.forEach(videoUrl => addVideoIntoContainer(videoUrl))
