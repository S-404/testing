import { render, screen } from '@testing-library/react'
import Users from './Users.js'
import axios from 'axios'
import '@testing-library/jest-dom'

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
        render(<Users/>)
        const users = await screen.findAllByTestId('user-item')
        expect(users.length).toBe(3)

        expect(axios.get).toHaveBeenCalledTimes(1)

        screen.debug()


    })
})