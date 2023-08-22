const validateValue = require('./validateValue')

test('validation', () => {
    expect(validateValue(50)).toBe(true)
})

describe('validateValue', () => {

    test('корректное значение', () => {
        expect(validateValue(50)).toBe(true)
    })
    test('мин. пограничное значение', () => {
        expect(validateValue(0)).toBe(true)
    })
    test('макс. пограничное значение', () => {
        expect(validateValue(100)).toBe(true)
    })
    test('меньше корректного', () => {
        expect(validateValue(-1)).toBe(false)
    })
    test('больше корректного', () => {
        expect(validateValue(101)).toBe(false)
    })

})