const updateHistory = (url, areaName, feelsLike) => {
    console.log("History Ran")
    const history = document.querySelector(".history")
            const p = document.querySelector(".history p")
        
        
                p.classList.add("hidden")
                history.innerHTML += `<a href=${url} class="block">${areaName} - ${feelsLike}°F</a>`
}
