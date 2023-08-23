import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import MainPage from '../pages/mainPage.jsx'
import AboutPage from '../pages/aboutPage.jsx'
import UsersPage from '../pages/usersPage.jsx'
import AppPage from '../pages/appPage.jsx'
import NotFoundPage from '../pages/notFoundPage.jsx'
import UserInfo from '../components/userInfo/UserInfo.jsx'

const AppRouter = () => {
    return (
        <>
            <div style={{display:"flex", flexDirection:"column" , marginBottom: "20px"}}>
                <Link data-testid="main-link" to={'/'} >main</Link>
                <Link data-testid="about-link" to={'/about'} >about</Link>
                <Link data-testid="users-link" to={'/users'} >users</Link>
                <Link data-testid="app-link" to={'/app'} >app</Link>
            </div>

            <Routes>
                <Route path={'/'} element={<MainPage/>}/>
                <Route path={'/about'} element={<AboutPage/>}/>
                <Route path={'/users'} element={<UsersPage/>}/>
                <Route path={'/users/:id'} element={<UserInfo/>}/>
                <Route path={'/app'} element={<AppPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Routes>
        </>
    )
}

export default AppRouter