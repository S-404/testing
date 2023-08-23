import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { renderWithRouter } from './helpers/renderWithRouter.js'

describe('navbar', () => {
    test('pages links', async () => {

        renderWithRouter()

        const mainLink = screen.getByTestId('main-link')
        const aboutLink = screen.getByTestId('about-link')
        const usersLink = screen.getByTestId('users-link')
        const appLink = screen.getByTestId('app-link')

        const user = userEvent.setup()

        await user.click(aboutLink)
        expect(screen.getByTestId('about-page')).toBeInTheDocument()

        await user.click(mainLink)
        expect(screen.getByTestId('main-page')).toBeInTheDocument()

        await user.click(usersLink)
        expect(screen.getByTestId('users-page')).toBeInTheDocument()

        await user.click(appLink)
        expect(screen.getByTestId('app-page')).toBeInTheDocument()
    })
})