const formulario = document.getElementById('registroForm');
const enviarFormulario = async (event) => {
    event.preventDefault(); 
    
    // Obtener los datos del formulario
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const edad = document.getElementById('edad').value;
    const ciudad = document.getElementById('ciudad').value;
    
    const datosFormulario = {
        nombre: nombre,
        apellido: apellido,
        email: email,
        edad: edad,
        ciudad: ciudad
    };

    try {
        const respuesta = await fetch('url_de_tu_api_o_servicio', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datosFormulario)
        });

        if (!respuesta.ok) {
            throw new Error('Error al enviar el formulario');
        }

        const resultado = await respuesta.json();
        mostrarRespuesta(resultado);
    } catch (error) {
        console.error('Error:', error);
        mostrarRespuesta({ mensaje: 'Error al enviar el formulario. Inténtalo de nuevo más tarde.' });
    }
};

const mostrarRespuesta = (resultado) => {
    const respuestaDiv = document.getElementById('respuesta');
    respuestaDiv.innerHTML = `<p>${resultado.mensaje}</p>`;
};

formulario.addEventListener('submit', enviarFormulario);
