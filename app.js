const vid1 = document.getElementById('project1')
const vid2 = document.getElementById('project2')
const vid3 = document.getElementById('project3')

const videoList =[vid1,vid2,vid3];

videoList.forEach(function(video){
    //video plays when the mouse hovers on it
    video.addEventListener('mouseover', function(){
        video.play()
    })
    // video is paused when the mouse leaves // 
    video.addEventListener('mouseout', function(){
        video.pause()
    })
})
