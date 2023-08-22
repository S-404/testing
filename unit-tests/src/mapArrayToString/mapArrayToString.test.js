const mapArrayToString = require('./mapArrayToString')

describe('mapArrayToString', () => {
    test('Корректное значение', () => {
        //toEqual сравнивает объекты по значению
        expect(mapArrayToString([1, 2, 3])).toEqual(['1', '2', '3'])
    })

    test('Смешанные значения', () => {
        //toEqual сравнивает объекты по значению
        expect(mapArrayToString([1, 2, 3, null, undefined, 'abc'])).toEqual(['1', '2', '3'])
    })

    test('пустой массив', () => {
        //toEqual сравнивает объекты по значению
        expect(mapArrayToString([])).toEqual([])
    })

    test('отрицание', () => {
        //toEqual сравнивает объекты по значению
        expect(mapArrayToString([1, 2, 3])).not.toEqual(['1', '2'])
    })
})