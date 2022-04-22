const { TestWatcher } = require("jest");
const twoSum = require('./twoSum.easy')


test("TwoSum of target num", () => {
    expect(twoSum([1,2,4],3)).toStrictEqual([0,1])
})