// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromDollarToYen(dollars) {
    let euros = dollars / oneEuroIs["USD"];
    let yenes = euros * oneEuroIs["JPY"];
    return yenes;
}

function fromEuroToDollar(euros) {
    let dollars = euros * oneEuroIs["USD"];
    return dollars;
}

function fromYenToPound(yenes) {
    let euros = yenes / oneEuroIs["JPY"];
    let pounds = euros * oneEuroIs["GBP"];
    return pounds;
}

const sum = (a,b) => {
    return a + b
}


// const fromEuroToDollar = function(valueInEuro) {
//     let valueInDollar = valueInEuro * 1.07;
//     return valueInDollar;
// }
// const fromDollarToYen = function(valueInDollar) {
//     let valueInEuro =  valueInDollar / 1.07;
//     let valueInYen = valueInEuro * 156.5;
//     return valueInYen
// }
// const fromYenToPound = function(valueInYen) {
//     let valueInEuro = valueInYen / 156.5;
//     let valueInPound = valueInEuro * 0.87;
//     return valueInPound
// }

// const sum = (a,b) => {
//     return a + b
// }

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };