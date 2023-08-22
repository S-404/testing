const square = require('./square')


describe('square', () => {
    let mockValue

    //вызывется перед каждым кейсом
    beforeEach(() => {
        mockValue = Math.random() * 10
        //добавить в бд
    })

    //вызывается один раз
    beforeAll(() => {
    })

    test('корректное значение', () => {
        expect(square(mockValue)).toBe(mockValue * mockValue)
        expect(square(mockValue)).not.toBeUndefined()
    })

    test('вызывается mathpow', () => {
        const spyMathPow = jest.spyOn(Math, 'pow')
        square(2);
        expect(spyMathPow).toBeCalledTimes(1)
    })

    test('не вызывается mathpow', () => {
        const spyMathPow = jest.spyOn(Math, 'pow')
        square(1);
        expect(spyMathPow).toBeCalledTimes(0)
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    afterAll(()=>{

    })


})