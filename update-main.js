// @ts-check

/**
 * 
 * @param {string} url - a url end point
 * @param {boolean} shouldAddHistory - whether or not to add content to the history section
 */

const buildMain = (url, shouldAddHistory) => {
    fetch(url)
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
        const dayafter = document.querySelector("#dayafter")

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


        // try destructuring for the three Today/Tomorrow/DayAfter objects in the `obj.weather` array
        
        /**
         * @typedef {object} Title
         * @property {Element} id
         * @property {string} title
         */

        /**
         * @type {Array<Title>}
         */
        const arr = [{id: today, title: "Today"}, {id: tomorrow, title: "Tomorrow"}, {id: dayafter, title: "Day After Tomorrow"}]

        for(let i = 0; i < 3; i++){
            /**
             * @type {string}
             */
            const avgtempF = obj.weather[i].avgtempF
            
            /**
             * @type {string}
             */
            const maxtempF = obj.weather[i].maxtempF

            /**
             * @type {string}
             */
            const mintempF = obj.weather[i].mintempF

            /**
             * @type {string}
             */
            arr[i].id.innerHTML = `<h4>${arr[i].title}</h4><p>Average Temperature: ${avgtempF}°F</p><p>Max Temperature: ${maxtempF}°F</p><p>Min Temperature: ${mintempF}°F</p>`
        }


        placeholder.innerHTML = `<h3>${areaName}</h3> <p>Area: ${area}</p><p>Region: ${region}</p><p>Country: ${country}</p><p>Currently: Feels like ${feelsLike}°F</p>`

        if(shouldAddHistory){
            updateHistory(url, areaName, feelsLike)
        }

        getAllLinks()

        })
        .catch(console.log)
}