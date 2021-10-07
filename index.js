document.querySelector('form')
.addEventListener('submit', (event) => {
    event.preventDefault()
    const location = event.target.search.value
    const urlLocation = `https://wttr.in/${location}?format=j1`
    
    buildMain(urlLocation, "addHistory")        

    event.target.reset()
    
})

const getAllLinks = () => {
    const links = document.querySelectorAll(".history a")
    console.log(links)
    links.forEach(link => {
        link
        .addEventListener("click", (event) => {
            event.preventDefault()
            
            buildMain(event.target.href)
        })
    
    
    })
}

