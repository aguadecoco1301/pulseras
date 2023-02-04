let toggle = false;
let _score = 0;

document.addEventListener("DOMContentLoaded", function() {
    const text = document.getElementById("text")
    const score = document.getElementById("score")

    function click() {
        toggle = !toggle;
        text.innerHTML = toggle ? "←": "→";
        _score++;
        score.innerHTML = _score;
        console.log("¡Click! Score: "+_score)
    }
    function restart() {
        console.log("Reinicio.. Último score: "+_score)
        text.innerHTML = "..."
        _score = 0;
        score.innerHTML = _score
    }
    var presionando = false;
    document.addEventListener("keydown", function(event) {
        if ((event.code === "Space" || event.code === "Enter") && !presionando) {
            presionando = true;
            event.preventDefault();
            click()
        } else
        if(event.code === "KeyR") {
            if(_score == 0) return;
            restart()
        }
    });
    document.addEventListener("keyup", function(event) {
        if (event.code === "Space" || event.code === "Enter") {
          presionando = false;
        }
    })
})