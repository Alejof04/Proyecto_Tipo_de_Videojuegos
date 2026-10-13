document.getElementById("formulario").addEventListener("submit", function(event) {

    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let mensaje = document.getElementById("mensaje");
    
    this.reset();

    mensaje.textContent = "¡Gracias " + nombre + " por tu opinión!";
});
