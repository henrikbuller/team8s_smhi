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

        // Konverterar prognosen till objekt
        let dataSet = convert(forecast)
        // Gör ett objekt för varje dag i prognosen
        let sortedDateObjects = sortByDate(dataSet)
        //console.log("sortedDateObjects: ", sortedDateObjects)

        const currentTemp = findTemperature(forecast.timeSeries[hour].parameters)
        //console.log("current temp inside service async method:", currentTemp)
        const currentWeatherSymbol = findWeatherSymbol(forecast.timeSeries[hour].parameters)
        // console.log("WeatherSymbol: ", currentWeatherSymbol)
        return {
            currentTemp,
            currentWeatherSymbol,
            sortedDateObjects,
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
            temperature: findOneTemp(data.parameters),
        }
        currentDateData.add(thisDate)
    }
    // console.log("Logging convert function")
    // console.log("currentDateData:")
    // console.log(currentDateData)

    return currentDateData
}

function matchDate(dataSet, date) {
    const currentDateList = []
    for (const data of dataSet) {
        if (data.date === date) {
            currentDateList.push(data)
        }
    }
    // console.log("Logging matchDate:")
    //  console.log(currentDateList)
    return currentDateList
}

function sortByDate(dataSet) {
    const sortedDataList = []
    const today = new Date().getDate()

    // Gör 10st listor av objekt baserat på objektens datum
    for (let i = 0; i < 10; ++i) {
        sortedDataList.push(matchDate(dataSet, today + i))
    }

    return sortedDataList
}
function findOneTemp(parameters) {
    for (const param of parameters) {
        if (param.name === "t") {
            return param.values[0]
        }
    }
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
