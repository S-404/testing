import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './appRouter/AppRouter.jsx'
import { Provider } from 'react-redux'
import { createReduxStore } from './store/appStore.js'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={createReduxStore()}>
            <BrowserRouter>
                <AppRouter/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
)
