function playMedia() {
    var existingVideo = document.getElementById("backgroundVideo");
    if (existingVideo) existingVideo.remove();

    var videoElement = document.createElement("video");
    videoElement.id = "backgroundVideo";
    videoElement.src = "thala.mp4";
    videoElement.loop = true;
    videoElement.muted = true;
    videoElement.playsinline = true;
    videoElement.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;object-fit:cover;z-index:-1;";
    document.body.appendChild(videoElement);
    videoElement.play();

    var audioElement = document.createElement("audio");
    audioElement.src = "thala.mp3";
    audioElement.loop = true;
    audioElement.play();

    videoElement.style.filter = "brightness(70%)";
}

function calculateSum() {
    var nameInput = document.getElementById("nameInput");
    var name = nameInput.value;

    if (!name) {
        // Display message for empty input
        document.getElementById("result").innerText = "Don't mess with me, you little piece of shit. Write something!";
        return;
    }

    var sum = name.length;

    if (sum !== 7) {
        var randomNumber = 7 - sum;
        sum += randomNumber;
        var resultMessage = `${name.split('').join(' + ')} + ${randomNumber} = ${sum}, Thala for a reason`;
    } else {
        var resultMessage = `${name.split('').join(' + ')} = ${sum}, Thala for a reason`;
    }

    document.getElementById("result").innerText = resultMessage;
    playMedia();
}
