const submitEvent = (event) => {
    /**
 * Stop the page and form refreshing/reloading
 */
     event.preventDefault()


     const location = event.target.search.value
 
     /**
      * urlLocation is holding the full url using the users search term
      * @type {string}
      */
     const urlLocation = `https://wttr.in/${location}?format=j1`
 
     
     buildMain(urlLocation, true)        
 
     event.target.reset()
}



const historyEvent = (event) => {
    event.preventDefault()
            
    buildMain(event.target.href, false)
}


/**
 * Selecting the form element and listening for a submit event
 */
document.querySelector('form')
.addEventListener('submit', submitEvent)


/**
 * 
 * @function
 */
const getAllLinks = () => {
    
    /**
     * @const {Element}
     */
    const links = document.querySelectorAll(".history a")
    console.log(links)
    links.forEach(link => {
        link
        .addEventListener("click", historyEvent)
    
    
    })
}

