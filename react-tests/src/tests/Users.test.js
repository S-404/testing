import { render, screen } from '@testing-library/react'
import Users from '../components/users/Users.js'
import axios from 'axios'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import React from 'react'
import { renderWithRouter } from './helpers/renderWithRouter.js'

jest.mock('axios')

describe('users', () => {
    let response

    beforeAll(() => {
        response = {
            data: [
                {
                    'id': 1,
                    'name': 'Leanne Graham',
                },
                {
                    'id': 2,
                    'name': 'Ervin Howell',
                },
                {
                    'id': 3,
                    'name': 'Clementine Bauch',

                },
            ],
        }
    })

    test('user list', async () => {
        axios.get.mockReturnValue(response)
        render(<MemoryRouter><Users/></MemoryRouter>)
        const users = await screen.findAllByTestId('user-item')
        expect(users.length).toBe(3)

        expect(axios.get).toHaveBeenCalledTimes(1)

        screen.debug()
    })

    test('redirect to userInfo', async () => {
        axios.get.mockReturnValue(response)
        renderWithRouter(null, '/users')
        const users = await screen.findAllByTestId('user-item')
        expect(users.length).toBe(3)

        expect(axios.get).toHaveBeenCalledTimes(1)

        const user = userEvent.setup()
        await user.click(users[0])
        screen.debug()
        expect(screen.getByTestId('user-info')).toBeInTheDocument()
    })

    afterEach(() => {
            jest.clearAllMocks()
        },
    )
})