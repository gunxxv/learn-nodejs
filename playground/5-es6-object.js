const name = 'Jane'
const userAge = 150

const user = {
    name,
    age: userAge,
    location: 'Earth878'
}

console.log(user)

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

// const label = product.label
// const stock = product.stock

// const {label:productLabel, stock, rating=5} = product
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, { label, stock = 0} = {}) => {
    console.log(type, label,  stock)
}

transaction('order', product)

