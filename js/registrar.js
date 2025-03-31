document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validación básica
    if (nombre === '' || email === '' || password === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Aquí puedes agregar más validaciones si es necesario

    // Simulación de envío de datos
    console.log('Nombre:', nombre);
    console.log('Correo Electrónico:', email);
    console.log('Contraseña:', password);

    // Mostrar un mensaje de éxito
    alert('Registro exitoso');

    
});