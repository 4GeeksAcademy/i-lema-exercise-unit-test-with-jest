const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar / 1.07 * 156.5;
    return valueInYen
}
const fromYenToPound = function(valueInYen) {
    let valueInPound = valueInYen / 156.5 * 0.87;
    return valueInPound
}

const sum = (a,b) => {
    return a + b
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };