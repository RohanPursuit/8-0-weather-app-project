const historyEvent = (event) => {
    event.preventDefault()
    console.log(event.target.name)
    buildMain(event.target.name, false)
}