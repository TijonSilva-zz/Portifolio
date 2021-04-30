const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const cards1 = document.querySelectorAll('.card1')
const cards2 = document.querySelectorAll('.card2')
const cards3 = document.querySelectorAll('.card3')
const cards4 = document.querySelectorAll('.card4')
const cards5 = document.querySelectorAll('.card5')

for (const card of cards) [
 card.addEventListener("click", function (){
  modalOverlay.classList.add('active')
 })
]