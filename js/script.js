document.getElementById('formulario-contacto').addEventListener('submit', function(event) { 
    event.preventDefault(); // Evitar el envío del formulario por defecto

    // Obtener los valores de los campos del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    // Validar los campos (puedes agregar más validaciones según tus necesidades)
    if (nombre && email && mensaje) {
        document.getElementById('respuesta').textContent = 'Gracias por tu mensaje, ' + nombre + '!Me pondre en contacto contigo pronto!';
        document.getElementById('formulario-contacto').reset(); // Reiniciar el formulario  
    }else {
        document.getElementById('respuesta').textContent = 'Por favor, completa todos los campos.';}         

    // Aquí puedes agregar la lógica para enviar el formulario a tu servidor o API
    alert('Formulario enviado con éxito');
}   );