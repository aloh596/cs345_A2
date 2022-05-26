const overlay = document.getElementById('overlay')


//Lets us click outside the popup to close
overlay.addEventListener('click', () => {
    const active =  document.querySelector('.popUp.active')
    closeModal(active)
})
  

//Open the register popup
function openPopup(){
    const open = document.getElementById("popUp");
    openModal(open)
}

//close the active popup
function closePopup(){
    const active =  document.querySelector('.popUp.active')
    closeModal(active)
}


//
function openModal(popUp) {
  if (popUp == null) return
  popUp.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(popUp) {
  if (popUp == null) return
  popUp.classList.remove('active')
  overlay.classList.remove('active')
}

