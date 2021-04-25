const modalOverlay = document.querySelector('.modal-ovarlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
card.addEventListener("click", function(){
 modalOverlay.classList.add('active')

 })
}