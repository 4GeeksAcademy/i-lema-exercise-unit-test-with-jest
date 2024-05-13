const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("Un euro debe ser 1.07 dolares", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    const result = fromEuroToDollar();
    expect(fromEuroToDollar(3.5)).toBe(3.745);
    expect(typeof result).toBe("number");
})

test("Un dólar debe ser 146.26 yen", function() {
    const dollars = fromDollarToYen(1);
    const expected = 1 / 1.07 * 156.5;
    const result = fromDollarToYen();
    expect(fromDollarToYen(1)).toBe(146.26168224299064);
    expect(typeof result).toBe("number");
})

test("Un yen debe ser 0.0056 libras", function() {
    const dollars = fromYenToPound(1);
    const expected = 1 * 0.87 / 156.5;
    const result = fromYenToPound();
    expect(fromYenToPound(1)).toBe(0.0055591054313099035);
    expect(typeof result).toBe("number");
})
