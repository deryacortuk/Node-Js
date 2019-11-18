const fs = require('fs')

const dataBuffer = fs.readFileSync('fs-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)
user.author = 'Joseph'
user.age = '40'
user.occupation = 'Software Engineer'
const userJSON = JSON.stringify(user)
fs.writeFileSync('fs-json.json', userJSON)