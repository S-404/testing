import Counter from '../components/Counter/Counter.js'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { renderWithProvider } from './helpers/renderWithProvider.js'
import counter from '../components/Counter/Counter.js'

describe('counter', () => {
    test('increment', async () => {
        const {
            getByTestId
        } = renderWithProvider(<Counter/>, {counter:{value: 10}})

        const incrementButton = getByTestId('counter-increment')
        const user = userEvent.setup()

        expect(getByTestId('counter-value')).toHaveTextContent('10')
        await user.click(incrementButton)
        expect(getByTestId('counter-value')).toHaveTextContent('11')
    })
})