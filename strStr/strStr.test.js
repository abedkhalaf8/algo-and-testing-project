const strStr = require('./strStr.easy')

test("find if the needle in the haystack", () => {
    expect(strStr("hello", "ll")).toStrictEqual(2)
    expect(strStr("aaaaa", "bba")).toStrictEqual(-1)
})