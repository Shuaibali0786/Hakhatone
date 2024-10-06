let toggleButton = document.getElementById('toggle-skills') as HTMLAnchorElement
let skills = document.getElementById('skills') as HTMLAnchorElement

toggleButton.addEventListener ('click' ,() => {
if (skills.style.display === 'none') {
    skills.style.display = 'block'
} else {
    skills.style.display = 'none'
}
})