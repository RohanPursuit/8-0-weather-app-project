const historyEvent = (event) => {
    event.preventDefault()
    buildMain(event.target.href, false)
}