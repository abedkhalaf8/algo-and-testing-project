const searchInsert = require('./searchInsertPosition.easy')


test('check tagert if exist', () => {
    expect(searchInsert([1,2,3,4],3)).toStrictEqual(2)
    expect(searchInsert([1,2,3,4],4)).toStrictEqual(3)
    expect(searchInsert([1,2,3,4],5)).toStrictEqual(4)
    expect(searchInsert([1,2,3,4],7)).toStrictEqual(4)

})