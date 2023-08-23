import { getCounterValue } from './getCounterValue.js'

describe('getCounterValue', () => {

    test('get empty value', () => {
        expect(getCounterValue({})).toBe(0)
    })

    test('get filled value', () => {
        expect(getCounterValue({
            counter: {
                value: 100
            }
        })).toBe(100)
    })
})