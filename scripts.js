 const modalOverlay = document.querySelector('.modal-overlay')
 const cards = document.querySelectorAll ('.card1')

 for (const card of cards) {
  card.addEventListener("click", function (){
   modalOverlay.classList.add('active')

  })
 }
