const BASE_URL = "https://opendata-download-metfcst.smhi.se/api"

// const gbg = { name: "Göteborg", lng: 16.158, lat: 58.5812 }

const TemperatureService = {
    async updateWeatherData(city) {
        const url = `${BASE_URL}/category/pmp3g/version/2/geotype/point/lon/${city.lng}/lat/${city.lat}/data.json`
        const response = await fetch(url)
        const forecast = await response.json()

        const currentTemp = findTemperature(forecast.timeSeries[0].parameters)
        console.log("current temp inside service async method:", currentTemp)
        const currentWeatherSymbol = findWeatherSymbol(forecast.timeSeries[0].parameters)
        console.log("WeatherSymbol: ", currentWeatherSymbol)
        return {
            currentTemp,
            currentWeatherSymbol,
        }
    },
}
function findTemperature(parameters) {
    for (const param of parameters) {
        if (param.name === "t") {
            return param.values[0]
        }
    }

    throw new Error("unable to find parameter for temperature")
}

function findWeatherSymbol(parameters) {
    for (const param of parameters) {
        if (param.name === "Wsymb2") {
            return param.values[0]
        }
    }

    throw new Error("unable to find parameter for wind")
}
export default TemperatureService
