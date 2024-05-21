async function init () {
    const query = 
      new URLSearchParams(window.location.search)
    const id = query.get('id')

    const respuesta = 
      await fetch('https://fi.jcaguilar.dev/v1/persona/' + id)
    const datos = await respuesta.json() 

    const inpId = document.querySelector('#inp-id')
    inpId.value = id;

    const inpNombre = document.querySelector('#inp-nombre')
    inpNombre.value = datos.nombre

    const inpPaterno = document.querySelector('#inp-paterno')
    inpPaterno.value = datos.apellidoPaterno

    const inpMaterno = document.querySelector('#inp-materno')
    inpMaterno.value = datos.apellidoMaterno

    const selEstado = document.querySelector('#sel-estado')
    selEstado.value = datos.estado

    if (datos.sexo.toLowerCase() === 'h') {
       document.querySelector('#rad-hombre').checked = true;
    } else if (datos.sexo.toLowerCase() === 'm') {
        document.querySelector('#rad-mujer').checked = true;
    } else {
        document.querySelector('#rad-otro').checked = true;
    }

    document.querySelector('#btn-aceptar')
      .addEventListener('click', guardar)
}

function guardar (evt) {
    evt.preventDefault()
    const datos = {}

    datos.id = document.querySelector('#inp-id').value
    datos.nombre = document.querySelector('#inp-nombre').value

    console.log(datos)

    fetch('https://fi.jcaguilar.dev/v1/persona', {
        method: 'PATCH'
    })
}

window.addEventListener('load', init)