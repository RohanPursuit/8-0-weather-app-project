

/**
 * 
 * @param {string} url 
 * @param {string} areaName 
 * @param {string} feelsLike 
 */
const updateHistory = (url, areaName, feelsLike) => {
    document.querySelector(".history p").classList.add("hidden")
        
    const a = document.createElement('a')
    a.setAttribute('href', url)
    // a.setAttribute("style", "text-align: center;")
    a.classList.add("listStyle")
    a.innerHTML = `${areaName} - ${feelsLike}°F`

    document.querySelector(".display h4").classList.remove("hidden")

    // document.querySelector(".history h5").after(a)
    document.querySelector(".history").append(a)
}



