console.log("Hello")

//callback  => passing a function inside another function 

function user(name, callback) {
    console.log("Hi", name)
    callback()
}
//callback func
function callMe() {
    console.log("I am a callback function")
}

// user("jack", callMe)

setTimeout(function () {
    console.log("Hello")
}, 5000)

const cart = ["pants", "shoes", "trousers", "tshirts"]

// api.createOrder(cart, function () {
//     api.proceedToPayment(function () {
//         api.showOrderSummary(function () {
//             api.updateWallet()
//         })
//     })
// })

// callback hell || pyramid of Doom

//Promise

// createOrder(cart, function (orderId) {
//     proceedToPayment(orderId)
// }) //return orderId


// const promise = createOrder(cart)

//{ data: orderDetails }
//promise object => attach a callback function

// promise.then(function (orderId) {
//     proceedToPayment(orderId)
// })


// let text = "hello123"
// const promise = new Promise(function (resolve, reject) {
//     if (text == "hello") {
//         resolve("There is a text")
//     } else {
//         reject("There is no text")
//     }

// })

// console.log(promise)


const deployLink = "https://restcountries.com/v3.1/all"

const data = fetch(deployLink)

console.log(data)


//promise chaining


// createOrder(cart)
//     .then((orderId) => proceedToPayment(orderId))
//     .then((paymentInfo) => showOrderSummary(paymentInfo))
//     .then((paymentInfo) => updateWallet(paymentInfo))



//callback chaining

function timeToDelay(sec, callbackFunc) {
    setTimeout(callbackFunc, sec * 1000)
}

console.log("Start delaying")
timeToDelay(3, () => {
    console.log("3 seconds delay")
    timeToDelay(4, () => {
        console.log("4 seconds delay")
        timeToDelay(1, () => {
            console.log("1 seconds delay")
            timeToDelay(5, () => {
                console.log("5 seconds delay")
            })
        })
    })
})


//promise all

let p1 = Promise.resolve(30)
let p2 = 100
let p3 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 2000, "😆")
})

Promise.all([p1, p2, p3]).then(function (values) {
    console.log(values)
})