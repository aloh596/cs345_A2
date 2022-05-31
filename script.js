const overlay = document.getElementById('overlay')


//Lets us click outside the form to close
overlay.addEventListener('click', () => {
    const active =  document.querySelector('.form.active')
    closeModal(active)
})
  

//Open the register form
function openform(){
    const open = document.getElementById("ct-form");
    openModal(open)
}

//close the active form
function closeform(){
    const active =  document.querySelector('.form.active')
    closeModal(active)
}


//
function openModal(form) {
  if (form == null) return
  form.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(form) {
  if (form == null) return
  form.classList.remove('active')
  overlay.classList.remove('active')
}

