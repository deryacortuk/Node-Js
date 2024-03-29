const request = require('request');
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const address = process.argv[2]

if (!address) {
    console.log('please provide an address')
} else {
    geocode(address, (err, { latitude, longitude, location }) => {
        if (err) {
            return console.log(err)
        }

        forecast(latitude, longitude, (err, forecastData) => {
            if (err) {
                return console.log(err)
            }
            console.log(location)
            console.log(forecastData)

        })

    })
}

//console.log(process.argv)