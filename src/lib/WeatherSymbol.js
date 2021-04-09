function setWeatherSymbol(Wsymb2) {
    let imgUrl = ""
    function isNight() {
        let hour = new Date().getHours()
        // console.log(hour)
        if (hour > 20 || hour < 6) {
            return true
        }
        return false
    }

    if (Wsymb2 <= 2) {
        if (isNight()) {
            imgUrl = require("../assets/clear_night.png")
        } else {
            imgUrl = require("../assets/sun.png")
        }
    } else if (Wsymb2 <= 4) {
        if (isNight()) {
            imgUrl = require("../assets/cloudy_night.png")
        } else {
            imgUrl = require("../assets/sun_cloudy.png")
        }
    } else if (Wsymb2 <= 7) {
        imgUrl = require("../assets/cloudy.png")
    } else if (Wsymb2 <= 9 || Wsymb2 == 18 || Wsymb2 == 19) {
        imgUrl = require("../assets/light_rain.png")
    } else if (Wsymb2 === 11) {
        imgUrl = require("../assets/heavy_rain.png")
    } else if (Wsymb2 === 15 || Wsymb2 === 16 || Wsymb2 === 17 || Wsymb2 === 25 || Wsymb2 === 26 || Wsymb2 === 27) {
        imgUrl = require("../assets/snow.png")
    } else if (Wsymb2 === 21) {
        imgUrl = require("../assets/thunder.png")
    } else if (Wsymb2 === 12 || Wsymb2 === 13 || Wsymb2 === 14 || Wsymb2 === 22 || Wsymb2 === 23 || Wsymb2 === 24) {
        imgUrl = require("../assets/snow_cloudy.png")
    }
    return imgUrl
}

export default {
    setWeatherSymbol,
}
