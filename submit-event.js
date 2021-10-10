const submitEvent = (event) => {
    /**
    * Stop the page and form refreshing/reloading
    */
     event.preventDefault()
 

     buildMain(event.target.search.value, true)        
 
     event.target.reset()
}