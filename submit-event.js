const submitEvent = (event) => {
    /**
    * Stop the page and form refreshing/reloading
    */
     event.preventDefault()

     const url = `https://wttr.in/${event.target.search.value}?format=j1`

     buildMain(url, true)

    
    
    

     event.target.reset()
}