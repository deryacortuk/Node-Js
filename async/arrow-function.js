//const multiple = (x) => x * x
//console.log(multiple(7))

//const multiple = function(x, y) {
//return x * y
//}
//console.log(multiple(7, 17))

const multiple = (x, y) => {
    return x * y
}
console.log(multiple(7, 13))

const event = {
    name: "birthday party",
    printGuestList: function() {
        console.log('guest list for' + this.name)
    }
}
event.printGuestList()