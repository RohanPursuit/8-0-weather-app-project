// @ts-check


/**
 * Selecting the form element and listening for a submit event
 */
document.querySelector('form')
.addEventListener('submit',

/**
 * @param {object} event
 */ 
(event) => {
    
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
    
})

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
        .addEventListener("click",
        
        /**
         * 
         * @param {object} event 
         */
        (event) => {
            event.preventDefault()
            
            buildMain(event.target.href, false)
        })
    
    
    })
}

