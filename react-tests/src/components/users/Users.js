import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
                <Link
                    to={`/users/${user.id}`}
                    data-testid="user-item"
                    key={user.id}
                >
                    {user.name}
                </Link>
            ))}
        </div>
    )
}

export default Users