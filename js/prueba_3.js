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
    <p>Gracias por registrarte con nosotros, bienvenido a pokimon un lugar pensado</p> 
    <p>para que te salgas de lo cotidiano y tengas la oportunidad de 
    tener tus propios pokimons y tus propias batallas.</p>
    

    
`
// Insertar el mensaje en el div con id "welcomeMessage"
document.getElementById('welcomeMessage').innerHTML = welcomeMessage;
});