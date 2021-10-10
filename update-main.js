/**
 * 
 * @param {string} url - a url end point
 * @param {boolean} shouldAddHistory - whether or not to add content to the history section
 */

const buildMain = (location, shouldAddHistory) => {
    fetch(`https://wttr.in/${location}?format=j1`)
    .then(response => response.json())
    .then(obj => {

        /**
         * A Variable representing the html element with a class of ".placeholder"
         * @const {object}
         */
        const placeholder = document.querySelector(".placeholder")

        /**
         * A Variable representing the html element with a id of "#today"
         * @const {object}
         */
        const today = document.querySelector("#today")

        /**
         * A Variable representing the html element with a id of "#tomorrow"
         * @const {object}
         */
        const tomorrow = document.querySelector("#tomorrow")

        /**
         * A Variable representing the html element with a id of "#dayafter"
         * @const {object}
         */
        const dayAfter = document.querySelector("#dayafter")

        /**
         * A Variable representing the searched area name
         * @type {string}
         */
        const areaName = obj.nearest_area[0].areaName[0].value

        /**
         * A Variable representing the searched region
         * @type {string}
         */
        const region = obj.nearest_area[0].region[0].value

        /**
         * A Variable representing the searched area
         * @type {string}
         */
        const area = obj.nearest_area[0].areaName[0].value

         /**
         * A Variable representing the searched country
         * @type {string}
         */
        const country = obj.nearest_area[0].country[0].value

         /**
         * A Variable representing what the temperature feels like
         * @type {string}
         */
        const feelsLike = obj.current_condition[0].FeelsLikeF

        
        /**
         * @typedef {object} Title
         * @property {Element} id
         * @property {string} title
         */

         const date = new Date()
         const num = date.getDay()

        

         const day =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]


        const arr = [{title: `${day[num%7]}`, tag: today}, {title: `${day[num+1%7]}`, tag: tomorrow}, {title: `${day[num+2%7]}`, tag: dayAfter}]


       obj.weather.forEach(({avgtempF, maxtempF, mintempF}, index) => {
           arr[index].tag.innerHTML = `<h4>${arr[index].title}</h4><p>Average Temperature: ${avgtempF}°F</p><p>Max Temperature: ${maxtempF}°F</p><p>Min Temperature: ${mintempF}°F</p>`
       })


        placeholder.innerHTML = `<h3>${areaName}</h3> <p>Area: ${area}</p><p>Region: ${region}</p><p>Country: ${country}</p><p>Currently: Feels like ${feelsLike}°F</p>`

        if(shouldAddHistory){
            updateHistory(location, areaName, feelsLike)
        }
        document.querySelector("aside").classList.add("addAsideHeight")

        // getAllLinks()
        // console.log(document.querySelector(".history a:last-child"))

        document.querySelector(".history a:last-child").addEventListener("click", historyEvent)

        })
        .catch(console.log)
}