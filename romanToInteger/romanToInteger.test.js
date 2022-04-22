const { TestWatcher } = require('jest')
const romanToInt = require('./romanToInteger.easy')


test("roman to intger", () => {
    expect(romanToInt('MCMXCIV')).toStrictEqual(1994)
    expect(romanToInt('LVIII')).toStrictEqual(58)
    expect(romanToInt('III')).toStrictEqual(3)
})