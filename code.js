'use strict'

function btn(){
    let video = document.getElementById("video");
    videoPlay();
    buttonHide();
    function videoPlay(){
        video.play();
        video.setAttribute("controls","controls");
    }
  function buttonHide(){
    document.getElementById("button").classList+=' video-play-btn--hide';
    }
  }