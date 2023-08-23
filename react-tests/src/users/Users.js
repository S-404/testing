import { useEffect, useState } from 'react'
import axios from 'axios'

const Users = () => {
    const [users, setUsers] = useState([])

    const loadUsers = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(response.data)
    }

    useEffect(() => {
        loadUsers()
    }, [])

    return (
        <div>
            {users.map(user => (
                <div
                    data-testid="user-item"
                    key={user.id}
                >
                    {user.name}
                </div>
            ))}
        </div>
    )
}

export default Users