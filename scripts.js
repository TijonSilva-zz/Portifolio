const modalOverlay = document.querySelector(".modal-overlay")
const cards1 = document.querySelectorAll(".card1")
const cards2 = document.querySelectorAll(".card2")
const cards3 = document.querySelectorAll(".card3")
const cards4 = document.querySelectorAll(".card4")
const cards5 = document.querySelectorAll(".card5")
const cards6 = document.querySelectorAll(".card6")

for (const card of cards1) {
  card.addEventListener("click", function () {
    modalOverlay.classList.add("active")
  })
}
for (const card of cards2) {
  card.addEventListener("click", function () {
    modalOverlay.classList.add("active")
  })
}
for (const card of cards3) {
  card.addEventListener("click", function () {
    modalOverlay.classList.add("active")
  })
}
for (const card of cards4) {
  card.addEventListener("click", function () {
    modalOverlay.classList.add("active")
  })
}
for (const card of cards5) {
  card.addEventListener("click", function () {
    modalOverlay.classList.add("active")
  })
}
for (const card of cards6) {
  card.addEventListener("click", function () {
    modalOverlay.classList.add("active")
  })
}
