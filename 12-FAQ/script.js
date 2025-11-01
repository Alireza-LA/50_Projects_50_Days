const btn = document.querySelectorAll('.faq-toggle')

btn.forEach(element => {
    element.addEventListener('click', () => {
        element.parentNode.classList.toggle('active')
    })

});