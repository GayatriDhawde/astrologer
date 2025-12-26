document.getElementById("animateBtn").addEventListener("click", function() {
    let heart = document.getElementById("heart");
    heart.style.animation = "heartbeat 0.5s infinite alternate";
    heart.style.backgroundColor = "pink";
});