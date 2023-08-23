import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from '../pages/mainPage.jsx'
import AboutPage from '../pages/aboutPage.jsx'
import UsersPage from '../pages/usersPage.jsx'
import AppPage from '../pages/appPage.jsx'
import NotFoundPage from '../pages/notFoundPage.jsx'
import UserInfo from '../components/userInfo/UserInfo.jsx'
import NavBar from '../components/NavBar/NavBar.jsx'

const AppRouter = () => {
    return (
        <>
            <NavBar/>
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