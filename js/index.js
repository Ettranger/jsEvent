

const dropdownBtn = document.querySelector(".dropdown-btn")
const dropdownMenu = document.querySelector(".dropdown-menu-content")

dropdownBtn.addEventListener('click', ()=> {
    dropdownMenu.classList.toggle("visible")
})
