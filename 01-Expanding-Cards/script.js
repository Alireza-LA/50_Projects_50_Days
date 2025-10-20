const panels = document.querySelectorAll('.panel')

function removeAcriveClassess() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        if (panel.classList.contains('active')) {
            panel.classList.remove('active')
        }
        else {
            removeAcriveClassess()
            panel.classList.add('active')
        }    
    })
})
