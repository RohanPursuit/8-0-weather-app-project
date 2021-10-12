/** ----------------------------------------------- */


const getTheme = sessionStorage.getItem("theme") || "default"

sessionStorage.setItem("theme", getTheme)

console.log(getTheme)
changeTheme(getTheme)

document.querySelectorAll('button').forEach(button => { 
    button
    .addEventListener('click', (event) => {
        console.log(event.target.name)
        sessionStorage.setItem("theme", event.target.name)
        changeTheme(sessionStorage.getItem("theme"))
    })
})

/**
 * Selecting the form element and listening for a submit event
 */
document.querySelector('form')
.addEventListener('submit', submitEvent)



