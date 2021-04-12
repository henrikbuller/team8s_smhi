const BASE_URL = "https://opendata-download-metfcst.smhi.se/api"
// import getDayOfYear from "date-fns/getDayOfYear"
// import { sv } from "date-fns/locale"
import getMonth from "date-fns/getMonth"
import getDate from "date-fns/getDate"
import format from "date-fns/format"
import parseJSON from "date-fns/parseJSON"
import { getSunrise, getSunset } from "sunrise-sunset-js"
import differenceInMinutes from "date-fns/differenceInMinutes"

// const gbg = { name: "Göteborg", lng: 16.158, lat: 58.5812 }

const TemperatureService = {
    async updateWeatherData(city, hour) {
        const url = `${BASE_URL}/category/pmp3g/version/2/geotype/point/lon/${city.lng}/lat/${city.lat}/data.json`
        const response = await fetch(url)
        const forecast = await response.json()
        console.log("forecast: ", forecast)

        // Konverterar prognosen till objekt
        let dataSet = convert(forecast, city.lng, city.lat)

        // Gör ett objekt för varje dag i prognosen och lägger i en lista
        let sortedDateObjects = sortByDate(dataSet)
        console.log("sortedDateObjects: ", sortedDateObjects)

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

function convert(forecast, lng, lat) {
    let currentDateData = new Set()

    for (const data of forecast.timeSeries) {
        data.validTime = parseJSON(data.validTime)
        let shortDate = format(data.validTime, "yyyy-MM-dd")
        let sunRise = getSunrise(lat, lng, new Date(shortDate))
        let sunSet = getSunset(lat, lng, new Date(shortDate))
        let sunDuration = differenceInMinutes(sunSet, sunRise)

        const thisDate = {
            name: format(data.validTime, "eeee"),
            date: getDate(data.validTime),
            month: format(getMonth(data.validTime), "MMM"),
            time: format(data.validTime, "HH:mm"),
            sunrise: format(sunRise, "HH:mm"),
            sunset: format(sunSet, "HH:mm"),
            sunDuration: (sunDuration / 60).toFixed(1),
            temperature: findOneTemp(data.parameters),
            lowest: "",
            highest: "",
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

    // Kolla hur många i varje lista
    if (currentDateList.length === 2) {
        while (currentDateList.length <= 12) {
            currentDateList.unshift(currentDateList[0])
        }
        while (currentDateList.length < 24) {
            currentDateList.push(currentDateList[12])
        }
    }
    if (currentDateList.length === 3) {
        const placeHolder = currentDateList[0]
        const val1 = currentDateList[0]
        const val2 = currentDateList[1]
        const val3 = currentDateList[2]

        while (currentDateList.length < 24) {
            currentDateList.push(placeHolder)
        }
        // currentDateList.fill(val1, 0, 23)
        currentDateList.fill(val1, 0, 8)
        currentDateList.fill(val2, 8, 16)
        currentDateList.fill(val3, 16, 24)
    }
    if (currentDateList.length === 4) {
        const placeHolder = currentDateList[0]
        const val1 = currentDateList[0]
        const val2 = currentDateList[1]
        const val3 = currentDateList[2]
        const val4 = currentDateList[3]

        while (currentDateList.length < 24) {
            currentDateList.push(placeHolder)
        }
        // currentDateList.fill(val1, 0, 23)
        currentDateList.fill(val1, 0, 6)
        currentDateList.fill(val2, 6, 12)
        currentDateList.fill(val3, 12, 18)
        currentDateList.fill(val4, 18, 24)
    }
    if (currentDateList.length === 6) {
        const placeHolder = currentDateList[0]
        const val1 = currentDateList[0]
        const val2 = currentDateList[1]
        const val3 = currentDateList[2]
        const val4 = currentDateList[3]
        const val5 = currentDateList[4]
        const val6 = currentDateList[5]

        while (currentDateList.length < 24) {
            currentDateList.push(placeHolder)
        }
        // currentDateList.fill(val1, 0, 23)
        currentDateList.fill(val1, 0, 4)
        currentDateList.fill(val2, 4, 8)
        currentDateList.fill(val3, 8, 12)
        currentDateList.fill(val4, 12, 16)
        currentDateList.fill(val5, 16, 20)
        currentDateList.fill(val6, 20, 24)
    }
    if (currentDateList.length === 8) {
        const placeHolder = currentDateList[0]
        const val1 = currentDateList[0]
        const val2 = currentDateList[1]
        const val3 = currentDateList[2]
        const val4 = currentDateList[3]
        const val5 = currentDateList[4]
        const val6 = currentDateList[5]
        const val7 = currentDateList[6]
        const val8 = currentDateList[7]

        while (currentDateList.length < 24) {
            currentDateList.push(placeHolder)
        }
        currentDateList.fill(val1, 0, 3)
        currentDateList.fill(val2, 3, 6)
        currentDateList.fill(val3, 6, 9)
        currentDateList.fill(val4, 9, 12)
        currentDateList.fill(val5, 12, 15)
        currentDateList.fill(val6, 15, 18)
        currentDateList.fill(val7, 18, 21)
        currentDateList.fill(val8, 21, 24)
    } else {
        while (currentDateList.length < 24) {
            currentDateList.unshift(currentDateList[0])
        }
    }

    // console.log("Logging matchDate:")
    console.log("date object filler function ", currentDateList)
    return currentDateList
}

function sortByDate(dataSet) {
    const sortedDataList = []
    const today = new Date().getDate()

    // Gör 10st listor av objekt baserat på objektens datum
    for (let i = 0; i < 10; ++i) {
        sortedDataList.push(matchDate(dataSet, today + i))
    }

    return findHighAndLowTemp(sortedDataList)
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
function findHighAndLowTemp(sortedDataList) {
    let highest = -1000
    let lowest = 1000

    for (let dates of sortedDataList) {
        for (let date of dates) {
            if (date.temperature > highest) {
                highest = date.temperature
            }
            if (date.temperature < lowest) {
                lowest = date.temperature
            }
        }
        for (let date of dates) {
            date.lowest = lowest
            date.highest = highest
        }
    }
    console.log("test if lowest exists in object: ", sortedDataList)
    return sortedDataList
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
