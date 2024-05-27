const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("1.07 dollars should be 156.5 yen", function() {

    // Uso la función como debe ser usada
    const yen = fromDollarToYen(1.07);

    // Si 156.5 yen es 1 euro, y 1 euro es 1.07 dólares, entonces 1.07 dólares debe ser 156.5 yen
    const expected = 1.07 / 1.07 * 156.5;

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(1.07)).toBe(156.5); // 1.07 dólares son 156.5 yen
})

test("1.07 dollars should be 156.5 yen", function() {

    // Uso la función como debe ser usada
    const pound = fromYenToPound(156.5);

    // Si 156.5 yen es 1 euro, y 1 euro es 0.87 pounds, entonces 156.5 yen debe ser 0.87 pound
    const expected = 156.5 / 156.5 * 0.87;

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(156.5)).toBe(0.87); // 156.5 yen son 0.87 pound
})
