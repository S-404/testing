import { screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { renderWithRouter } from './helpers/renderWithRouter.js'
import { renderWithRouterAndProvider } from './helpers/renderWithRouterAndProvider.js'


describe('router', () => {

    test('error page', () => {
        renderWithRouterAndProvider(null, {},'/abcde')

        expect(screen.getByTestId('notfound-page')).toBeInTheDocument()
    })
})