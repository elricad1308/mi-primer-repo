function cambiarColor (evt) {
  evt.preventDefault();
  const btnCancelar = document.querySelector('#btn-cancelar');
  btnCancelar.classList.add('btn')
  btnCancelar.classList.add('btn-danger')
}


window.addEventListener('load', () =>{
  const btn = document.querySelector('#btn-guardar');
  btn.addEventListener('click', cambiarColor)
})