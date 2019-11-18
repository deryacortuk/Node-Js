setTimeout(() => {
    console.log('seven seconds are up')
}, 7000)


const names = ['Joseph', 'Jen', 'Jeff', 'alexander', 'lessi', 'leonard']
const shortNames = names.filter((name) => {
    return name.length >= 6
})
console.log(shortNames)


const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }
        callback(data)
    }, 3000)
}
geocode('Londra', (process) => {
    console.log(process)
})


const multiple = (x, y, callback) => {
    setTimeout(() => {
        callback(x * y)
    }, 2000)
}
multiple(3, 7, (result) => {
    console.log(result)
})