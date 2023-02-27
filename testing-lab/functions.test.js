const {
    returnTwo,
    greeting,
    add
 } = require('./function')

describe(`Testing returnTwo function`, () => {
    test(`returns integer 2`, () => {
        expect(returnTwo()).toEqual(2)
    })
})

describe(`Test greeting function`, () => {
    expect(greeting('James')).toEqual('Hello, James.')
})

describe(`Test Add function`, () => {
    expect(add(1, 2)).toEqual(3)
})