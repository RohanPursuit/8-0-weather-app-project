// @ts-check

/**
 * 
 * @param {string} url 
 * @param {string} areaName 
 * @param {string} feelsLike 
 */
const updateHistory = (url, areaName, feelsLike) => {
    const history = document.querySelector(".history")
            const p = document.querySelector(".history p")
        
                p.classList.add("hidden")
                history.innerHTML += `<a href=${url} class="block" style="display: inline-block"><li ></li>${areaName} - ${feelsLike}°F</a>`
}
