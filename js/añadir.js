function entrenadores() {
    const Nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;
  

    if (!Nombre || !apellido || !telefono || !email ) {
        alert('Por favor llene los campos');
        return;
    }

   

    localStorage.setItem('registronombre', Nombre);
    localStorage.setItem('registroapellido', apellido);
    localStorage.setItem('registrotelefono', telefono);
    localStorage.setItem('registroemail', email)
    alert('registro exitoso')
  
}   
function pokemons() {
    const pokemon_nombre = document.getElementById('pokemon-nombre').value;
    const pokemon_tipo = document.getElementById('pokemon-tipo').value;
    const pokemon_ataque = document.getElementById('pokemon-ataque').value;
    const pokemon_defensa= document.getElementById('pokemon-defensa').value;
  

    if (!pokemon_nombre || !pokemon_tipo|| !pokemon_ataque|| !pokemon_defensa ) {
        alert('Por favor llene los campos');
        return;
    }

    

    localStorage.setItem('registropokemon_nombre', pokemon_nombre);
    localStorage.setItem('registropokemon_tipo', pokemon_tipo);
    localStorage.setItem('registropokemon_ataque', pokemon_ataque);
    localStorage.setItem('registropokemon_defensa', pokemon_defensa)

    alert('Registro exitoso!');
}
