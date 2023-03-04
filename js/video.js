

window.onload = function(){
    var video = document.getElementById("myVideo");
    video.muted = false;
    
    document.addEventListener("visibilitychange", function() {
        if (document.visibilityState === "visible") {
            video.play();
        } else {
            video.pause();
        }
    });
}
