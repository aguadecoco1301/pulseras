let toggle = false;
let _score = 0;
var presionando = false;

document.addEventListener("DOMContentLoaded", function() {
    const text = document.getElementById("text")
    const score = document.getElementById("score")

    function click() {
        toggle = !toggle; // Si toggle es true, lo vuelve false, y viceversa.
        text.innerHTML = toggle ? "←": "→"; // Si toggle es true, mostrará ←, y viceversa
        score.innerHTML = _score++; // Suma un punto al contador y lo dibuja en pantalla
        console.log("¡Click! Score: "+_score)
    }
    function restart() {
        console.log("Reinicio.. Último score: "+_score)
        text.innerHTML = "..." // Las flechas pasan a ser un ..., como al iniciar.
        _score = 0; // Reinicia el score
        score.innerHTML = _score // Lo dibuja en pantalla
    }
    
    
    document.addEventListener("keydown", function(event) {
        if ((event.code === "Space" || event.code === "Enter") && !presionando) { // Si: Se presiona Space o Enter Y presionando NO es true
            presionando = true; // Lo vuelve true
            click() // Activa la función click
        } else
        if(event.code === "KeyR") { // Si se presiona la tecla R
            if(_score == 0) return; // Si no hay score, no hace nada.
            restart() // Activa la función restart
        }
    });
    document.addEventListener("keyup", function(event) {    // Cuando se suelte la tecla, pasar
        if (event.code === "Space" || event.code === "Enter") { 
          presionando = false;
        }
    })
})
