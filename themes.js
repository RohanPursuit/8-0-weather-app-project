const body = document.querySelector("body")
const header = document.querySelector('header')
const form = document.querySelector('form')
const display = document.querySelector(".display")
const displayH4 = document.querySelector(".display h4")
const placeholder = document.querySelector('.placeholder')
const aside = document.querySelector("aside")
const asideH4 = document.querySelector("aside h4")
const today = document.querySelector("#today")
const tomorrow = document.querySelector("#tomorrow")
const dayAfter = document.querySelector("#dayafter")
const displayDiv = document.querySelector('.display div')

const changeTheme = (theme) => {

    
    switch(theme){
        case "default":
            defaultTheme()
        break;
        case "two-grid":
            twoGrid()
        break;
        case "minimal":
            minimal()
        break;
    }
}


const defaultTheme = () => {
    removeStyles()
    body.classList.add("six-grid")
    aside.classList.add("six-aside")
    header.classList.add("six-header")
    display.classList.add("six-display")
    placeholder.classList.add("six-placeholder")
    asideH4.classList.add("six-asideH4")
    today.classList.add("six-forecast")
    tomorrow.classList.add("six-forecast")
    dayAfter.classList.add("six-forecast")
    displayH4.classList.add("six-displayH4")
    displayDiv.classList.add("six-displayDiv")
}

const twoGrid = () => {
    removeStyles()
    body.classList.add("six-grid")
    aside.classList.add("two-aside")
    header.classList.add("six-header")
    display.classList.add("two-display")
    placeholder.classList.add("six-placeholder")
    asideH4.classList.add("six-asideH4")
    today.classList.add("six-forecast")
    tomorrow.classList.add("six-forecast")
    dayAfter.classList.add("six-forecast")
    displayH4.classList.add("six-displayH4")
    displayDiv.classList.add("six-displayDiv")
}

const minimal = () => {
    removeStyles()
    body.classList.add("six-grid")
    aside.classList.add("minimal-aside")
    display.classList.add("minimal-display")
    header.classList.add("hidden")
}

const removeStyles = () => {
    body.removeAttribute("class")
    header.removeAttribute("class")
    asideH4.removeAttribute("class")
    aside.removeAttribute("class")
    header.removeAttribute("class")
    display.removeAttribute("class")
    placeholder.removeAttribute("class")
    today.removeAttribute("class")
    tomorrow.removeAttribute("class")
    dayAfter.removeAttribute("class")
    displayH4.removeAttribute("class")
    displayDiv.removeAttribute("class")

    display.classList.add("display")
    placeholder.classList.add("placeholder")
    // displayH4.classList.add("hidden")
    aside.classList.add("history")

}