import { fireEvent, render, screen } from '@testing-library/react'
import App from './App.jsx'
import '@testing-library/jest-dom'


describe('app test', () => {
    test('renders hello', () => {
        render(<App/>)
        const element = screen.getByText(/hello/i)
        expect(element).toBeInTheDocument()
    })

    test('renders button', () => {
        render(<App/>)
        const btn = screen.getByRole('button')
        expect(btn).toHaveTextContent('count is')
        expect(btn).toMatchSnapshot()
        screen.debug()
    })

    test('query: no element', () => {
        render(<App/>)
        const element = screen.queryByText(/hello2/i)
        expect(element).toBeNull()
    })

    test('has async data', async () => {
        render(<App/>)
        screen.debug()
        const element = await screen.findByText(/has data/i)
        expect(element).toBeInTheDocument()
        screen.debug()
    })

    test('toggle onClick', async () => {
        render(<App/>)
        const toggleButton = screen.getByTestId('toggle-button')

        expect(screen.queryByTestId('toggle-element')).toBeNull()
        fireEvent.click(toggleButton)
        expect(screen.queryByTestId('toggle-element')).toBeInTheDocument()
        fireEvent.click(toggleButton)
        expect(screen.queryByTestId('toggle-element')).toBeNull()
    })

    test('input text', async () => {
        render(<App/>)
        const input = screen.getByTestId('input')

        expect(screen.getByTestId('input-value')).toContainHTML('')
        fireEvent.input(input, {
            target: {value: '123abc'},
        })
        expect(screen.getByTestId('input-value')).toContainHTML('123abc')

    })
})

