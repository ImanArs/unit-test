const validateValue = require('./validateValue')

test('валидация значения', () => {
    expect(validateValue(50)).toBe(true)
})