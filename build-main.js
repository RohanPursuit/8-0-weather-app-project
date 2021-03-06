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
        const dayAfter = document.querySelector("#dayafter")


        const {areaName, region, country} = obj.nearest_area[0]

         /**
         * A Variable representing what the temperature feels like
         * @type {string}
         */
        const feelsLike = obj.current_condition[0].FeelsLikeF

        
        //Main
        placeholder.innerHTML = `<h3>${areaName[0].value}</h3><p>Area: ${areaName[0].value}</p><p>Region: ${region[0].value}</p><p>Country: ${country[0].value}</p><p>Currently: Feels like ${feelsLike}°F</p>`

        
        /**
         * @typedef {object} Title
         * @property {Element} id
         * @property {string} title
         */

         const date = new Date()
         const num = date.getDay()

        

         const day =["Sun ", "Mon ", "Tue ", "Wed ", "Thu ", "Fri", "Sat "]


        const arr = [{title: `${day[num%7]}`, tag: today}, {title: `${day[num+1%7]}`, tag: tomorrow}, {title: `${day[num+2%7]}`, tag: dayAfter}]

        
        /// 3 day Forecast-----
            obj.weather.forEach(({avgtempF, maxtempF, mintempF}, index) => {
                arr[index].tag.innerHTML = `<span>${arr[index].title}</span> <span>${avgtempF}°</span> <span class="end">${maxtempF}°/${mintempF}°F</span>`
            })




            //History
            if(shouldAddHistory){
                updateHistory(url, areaName[0].value, feelsLike)
            }
            

            document.querySelector(".history a:last-child").addEventListener("click", historyEvent)

    
        })
        .catch(console.log)
}