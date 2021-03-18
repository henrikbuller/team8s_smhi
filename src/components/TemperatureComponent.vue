<template>
    <div>
        <h1>SMHI</h1>
        <p>Current temp: {{ currentTemp }}</p>
    </div>
</template>

<script>
const BASE_URL = "https://opendata-download-metfcst.smhi.se/api"
const gbg = { name: "Göteborg", lng: 16.158, lat: 58.5812 }

async function updateWeatherData() {
    const url = `${BASE_URL}/category/pmp3g/version/2/geotype/point/lon/${gbg.lng}/lat/${gbg.lat}/data.json`
    const response = await fetch(url)
    const forecast = await response.json()
    console.log(forecast.timeSeries)

    this.currentTemp = findTemperature(forecast.timeSeries[0].parameters)
}

function findTemperature(parameters) {
    for (const param of parameters) {
        if (param.name === "t") {
            return param.values[0]
        }
    }

    throw new Error("unable to find parameter for temperature")
}

updateWeatherData()
export default {
    name: "TemperatureComponent",
    emits: {
        currentTemp: Number,
    },
}
</script>

<style scoped></style>
