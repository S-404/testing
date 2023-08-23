import { screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { renderWithRouter } from './helpers/renderWithRouter.js'


describe('router', () => {

    test('error page', () => {
        renderWithRouter(null, '/abcde')

        expect(screen.getByTestId('notfound-page')).toBeInTheDocument()
    })
})