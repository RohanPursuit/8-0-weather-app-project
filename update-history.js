

/**
 * 
 * @param {string} url 
 * @param {string} areaName 
 * @param {string} feelsLike 
 */
const updateHistory = (location, areaName, feelsLike) => {
    document.querySelector(".history p").classList.add("hidden")
        
    const a = document.createElement('a')
    a.setAttribute('href', '')
    a.setAttribute('name', location)
    a.classList.add("listStyle")
    a.innerHTML = `${areaName} - ${feelsLike}°F`


    // document.querySelector(".history h5").after(a)
    document.querySelector(".history").append(a)
}
