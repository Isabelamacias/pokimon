// Datos del usuario
const user = {
    nombre: "",
    email: "@gmail.com",
    fechaRegistro: "2025-03-30"
};

// Crear el mensaje de bienvenida
const welcomeMessage = `
    <h1>¡Bienvenido, ${user.nombre}!</h1>
    <p>Gracias por registrarte con nosotros, bienvenido a pokimon un lugar pensado para que te salgas de lo cotidiano y tengas la oportunidad de 
    tener tus propios pokimons y tus propias batallas <strong>${user.email}</strong>.</p>
    <p>Fecha de registro: ${user.fechaRegistro}</p>
`;

// Insertar el mensaje en el div con id "welcomeMessage"
document.getElementById('welcomeMessage').innerHTML = welcomeMessage;