const https = require('https');
const url = 'https://api.darksky.net/forecast/eeb0a97660650f4b9a5db6a96aefef5c/37.8267,-122.4233'
const request = https.request(url, (res) => {
    let data = ''
    res.on('data', (chunk) => {
        data = data + chunk.toString()
        console.log(chunk)
    })
    res.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)

    })
})
request.on('error', (err) => {
    console.log('an error', err)
})

request.end()