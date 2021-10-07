document.querySelector('form')
.addEventListener('submit', (event) => {
    event.preventDefault()
    const location = event.target.search.value
    fetch(`https://wttr.in/${location}?format=j1`)
    .then(response => response.json())
    .then(obj => {
        const display = document.querySelector(".display")

        const region = obj.nearest_area[0].region[0].value
        const area = obj.nearest_area[0].areaName[0].value
        const country = obj.nearest_area[0].country[0].value
        const feelsLike = obj.current_condition[0].FeelsLikeF

        display.textContent = `${location} Area: ${area} Region: ${region} Country: ${country} Currently: Feels like ${feelsLike}°F`
        
    })
    .catch(console.log)
    event.target.reset()
    
})