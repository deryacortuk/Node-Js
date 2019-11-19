// object property shorthand

const name = 'Joseph'
const occupation = 'software engineer'
const user = {
    name,
    occupation,
    location: 'Melbourne'
}
console.log(user)


// Object destructuring

const product = {
        pen: 'black pen',
        price: 7,
        stock: 17,
        salePrice: undefined
    }
    //const pen = product.pen
    //const stock= product.stock
const { pen, stock, rating = 19 } = product
console.log(pen)
console.log(stock)
console.log(rating)

//
const transaction = (type, { pen, stock }) => {
    console.log(pen, stock)
}
transaction('order', product)