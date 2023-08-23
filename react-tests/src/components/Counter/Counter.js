import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCounterValue } from '../../store/reducers/counter/selectors/getCounterValue.js'
import { decrement, increment } from '../../store/reducers/counter/counterReducer.js'

const Counter = () => {
    const dispatch = useDispatch()
    const counterValue = useSelector(getCounterValue)

    const onIncrement = () => {
        dispatch(increment())
    }

    const onDecrement = () => {
        dispatch(decrement())
    }

    return (
        <div data-testid="counter">
            <h2 data-testid="counter-value">{counterValue}</h2>
            <button data-testid="counter-decrement" onClick={onDecrement}>decrement</button>
            <button data-testid="counter-increment" onClick={onIncrement}>increment</button>
        </div>
    )
}

export default Counter