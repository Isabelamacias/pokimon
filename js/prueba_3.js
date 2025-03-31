document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    document.getElementById('userName').textContent = `Nombre: ${name}`;
    document.getElementById('userEmail').textContent = `Correo Electrónico: ${email}`;
    console.log('Contraseña:', password);
    document.getElementById('result').style.display = 'block';

    const welcomeMessage = `
    <h1>¡Bienvenido, ${userName}!</h1>
    <p>Gracias por registrarte con nosotros, bienvenido a pokimon un lugar pensado para que te salgas de lo cotidiano y tengas la oportunidad de 
    tener tus propios pokimons y tus propias batallas <strong>${userEmail}</strong>.</p>
    <p>Fecha de registro:${result} </p>
`
});