const buildMain = (url, shouldAddHistory) => {
    fetch(url)
    .then(response => response.json())
    .then(obj => {
        const placeholder = document.querySelector(".placeholder")
        const today = document.querySelector("#today")
        const tomorrow = document.querySelector("#tomorrow")
        const dayafter = document.querySelector("#dayafter")

        const areaName = obj.nearest_area[0].areaName[0].value
        const region = obj.nearest_area[0].region[0].value
        const area = obj.nearest_area[0].areaName[0].value
        const country = obj.nearest_area[0].country[0].value
        const feelsLike = obj.current_condition[0].FeelsLikeF

        const arr = [{id: today, title: "Today"}, {id: tomorrow, title: "Tomorrow"}, {id: dayafter, title: "Day After Tomorrow"}]

        for(let i = 0; i < 3; i++){
            console.log(i)
            const avgtempF = obj.weather[i].avgtempF
            const maxtempF = obj.weather[i].maxtempF
            const mintempF = obj.weather[i].mintempF

            arr[i].id.innerHTML = `<h4>${arr[i].title}</h4><p>Average Temperature: ${avgtempF}°F</p><p>Max Temperature: ${maxtempF}°F</p><p>Min Temperature: ${mintempF}°F</p>`
        }

        // obj.weather[0].date

        placeholder.innerHTML = `<h3>${areaName}</h3> <p>Area: ${area}</p><p>Region: ${region}</p><p>Country: ${country}</p><p>Currently: Feels like ${feelsLike}°F</p>`

        if(shouldAddHistory){
            updateHistory(url, areaName, feelsLike)
        }

        getAllLinks()

        })
        .catch(console.log)
}