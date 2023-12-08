const btnGoto = document.querySelector('.goto-icon')
const btnBackToTop = document.querySelector('.back__to__top')
const btnOpenNav = document.querySelector('.nav__menu')
const btnCloseNav = document.querySelector('.nav__close')
const nav = document.querySelector('.nav__container')
const overlay = document.querySelector('.overlay')
const header = document.querySelector('#header')

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        header.classList.add('shrink')
        btnBackToTop.classList.add('active')
    } else {
        header.classList.remove('shrink')
        btnBackToTop.classList.remove('active')
    }
})
window.addEventListener('click', (e) => {
    if (nav.classList.contains('active') && e.target !== nav) {
        nav.classList.remove('active')
        overlay.classList.add('hidden')
    } 
})

btnOpenNav.addEventListener('click', (e) => {
    e.stopPropagation()
    nav.classList.add('active')
    overlay.classList.remove('hidden')
})
btnBackToTop.addEventListener('click', (e) => {
    e.stopPropagation()
    document.body.scrollTop = 0 
    document.documentElement.scrollTop = 0
})

btnCloseNav.addEventListener('click', () => {
    nav.classList.remove('active')
    overlay.classList.add('hidden')
})

AOS.init({
    offset: 100,
    delay: 200,
    duration: 400,
})


