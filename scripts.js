const modalOverlay = document.querySelector(".modal-overlay")
const cards1 = document.querySelectorAll(".card1")
const cards2 = document.querySelectorAll(".card2")
const cards3 = document.querySelectorAll(".card3")
const cards4 = document.querySelectorAll(".card4")
const cards5 = document.querySelectorAll(".card5")
const cards6 = document.querySelectorAll(".card6")

for (const card of cards1) {
    card.addEventListener("click", function() {
        const videoid1 = card.getAttribute("id")
        modalOverlay.classList.add("active")
        modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/xEKo29OWILE/ ${videoid1}`
    })
}
for (const card of cards2) {
    card.addEventListener("click", function() {
        const videoid2 = card.getAttribute("id")
        modalOverlay.classList.add("active")
        modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/S9uPNppGsGo/ ${videoid2}`
    })
}

for (const card of cards3) {
    card.addEventListener("click", function() {
        const videoid3 = card.getAttribute("id")
        modalOverlay.classList.add("active")
        modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/8mei6uVttho/ ${videoid3}`
    })
}
for (const card of cards4) {
    card.addEventListener("click", function() {
        const videoid4 = card.getAttribute("id")
        modalOverlay.classList.add("active")
        modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/7A4UQGrFU9Q/ ${videoid4}`
    })
}
for (const card of cards5) {
    card.addEventListener("click", function() {
        const videoid5 = card.getAttribute("id")
        modalOverlay.classList.add("active")
        modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/EhnXaybirdA/ ${videoid5}`
    })
}
for (const card of cards6) {
    card.addEventListener("click", function() {
        const videoid6 = card.getAttribute("id")
        modalOverlay.classList.add("active")
        modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/GykTLqODQuU/ ${videoid6}`
    })
}
document.querySelector(".close-modal").addEventListener("click", function() {
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe").src = ""
})