const request = require('request')
const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/eeb0a97660650f4b9a5db6a96aefef5c/37.8267,-122.4233'
    request({ url, json: true }, (err, { body }) => {
        if (err) {
            callback('unable to connect to service', undefined)
        } else if (body.err) {
            callback('unable to find location', undefined)
        } else {
            callback(undefined, body.currently.time)

        }

    })
}

module.exports = forecast