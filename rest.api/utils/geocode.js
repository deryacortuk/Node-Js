const request = require('request')
const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?limit=2&access_token=pk.eyJ1IjoiZGVyeWFjb3J0dWsiLCJhIjoiY2szNGl5aml6MDlqMjNocGV0amM4dzF6YiJ9.kDr7x75e7O67AxyQcCJN0A'
    request({ url, json: true }, (err, { body }) => {
        if (err) {
            callback('unable to connect to location services', undefined)
        } else if (body.features.length === 0) {
            callback('unable to find location.try to another search', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name

            })

        }
    })
}

module.exports = geocode