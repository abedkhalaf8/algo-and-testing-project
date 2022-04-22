const { TestWatcher } = require('jest')
const isValid = require('./validParentheses.easy')

test('check brackets',  () => {
   expect(isValid("()")).toBe(true);
   expect(isValid("(}")).toBe(false);
   expect(isValid("(){}[]")).toBe(true);
})