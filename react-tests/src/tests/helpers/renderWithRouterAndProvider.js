import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import AppRouter from '../../appRouter/AppRouter.jsx'
import { Provider } from 'react-redux'
import { createReduxStore } from '../../store/appStore.js'

export const renderWithRouterAndProvider = (component = null, initialState = {}, initialRoute = '/') => {
    return render(
        <Provider store={createReduxStore(initialState)}>
            <MemoryRouter initialEntries={[initialRoute]}>
                <AppRouter/>
                {component}
            </MemoryRouter>
        </Provider>,
    )
}