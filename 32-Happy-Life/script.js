const toggles = document.querySelectorAll('.toggle')
const girlfriend = document.querySelector('#gf')
const programming = document.querySelector('#code')
const job = document.querySelector('#work')

toggles.forEach(toggle => toggle.addEventListener('change', (e) => {
    doTheTrick(e.target)
}))

function doTheTrick(theClickedOne) {
    if (girlfriend.checked && programming.checked && job.checked) {
        if (girlfriend === theClickedOne) {
            programming.checked = false
        }

        if (programming === theClickedOne) {
            job.checked = false
        }
        
        if (job === theClickedOne) {
            girlfriend.checked = false
        }
    }
}