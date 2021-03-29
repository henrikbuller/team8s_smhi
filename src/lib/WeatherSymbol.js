function setWeatherSymbol(currentWeatherSymbol) {
    let imgUrl = ""

    if (currentWeatherSymbol == 1 || currentWeatherSymbol == 2) {
        imgUrl = "../assets/sun.png"
    } else if (currentWeatherSymbol == 3 || currentWeatherSymbol == 4) {
        imgUrl = "..assets/sun_cloudy.png"
    } else if (currentWeatherSymbol == 5 || currentWeatherSymbol == 6 || currentWeatherSymbol == 7) {
        imgUrl = "../assets/cloudy.png"
    } else
        currentWeatherSymbol == 8 ||
            currentWeatherSymbol == 9 ||
            currentWeatherSymbol == 18 ||
            currentWeatherSymbol == 19
    {
        imgUrl = "../assets/cloudy.png"
    }
    return imgUrl
}

export default {
    setWeatherSymbol,
}
