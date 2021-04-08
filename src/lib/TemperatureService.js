const BASE_URL = "https://opendata-download-metfcst.smhi.se/api"
// import getDayOfYear from "date-fns/getDayOfYear"
// import { sv } from "date-fns/locale"
import getMonth from "date-fns/getMonth"
import getDate from "date-fns/getDate"
import format from "date-fns/format"
import parseJSON from "date-fns/parseJSON"

// const gbg = { name: "Göteborg", lng: 16.158, lat: 58.5812 }

const TemperatureService = {
    async updateWeatherData(city, hour) {
        const url = `${BASE_URL}/category/pmp3g/version/2/geotype/point/lon/${city.lng}/lat/${city.lat}/data.json`
        const response = await fetch(url)
        const forecast = await response.json()

        let dataSet = convert(forecast)
        matchDate(dataSet, 9)

        const currentTemp = findTemperature(forecast.timeSeries[hour].parameters)
        console.log("current temp inside service async method:", currentTemp)
        const currentWeatherSymbol = findWeatherSymbol(forecast.timeSeries[hour].parameters)
        console.log("WeatherSymbol: ", currentWeatherSymbol)
        return {
            currentTemp,
            currentWeatherSymbol,
        }
    },
}

function convert(forecast) {
    let currentDateData = new Set()

    for (const data of forecast.timeSeries) {
        data.validTime = parseJSON(data.validTime)
        const thisDate = {
            name: format(data.validTime, "eeee"),
            date: getDate(data.validTime),
            month: format(getMonth(data.validTime), "MMM"),
        }
        currentDateData.add(thisDate)
    }
    console.log("Logging convert function")
    console.log("currentDateData:")
    console.log(currentDateData)

    return currentDateData
}

function matchDate(dataSet, date) {
    const currentDateList = []
    for (const data of dataSet) {
        if (data.date === date) {
            currentDateList.push(data)
        }
    }
    console.log("Logging matchDate:")
    console.log(currentDateList)
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
