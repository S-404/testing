import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div style={{display:"flex", flexDirection:"column" , marginBottom: "20px"}}>
            <Link data-testid="main-link" to={'/'} >main</Link>
            <Link data-testid="about-link" to={'/about'} >about</Link>
            <Link data-testid="users-link" to={'/users'} >users</Link>
            <Link data-testid="app-link" to={'/app'} >app</Link>
        </div>
    )
}

export default NavBar