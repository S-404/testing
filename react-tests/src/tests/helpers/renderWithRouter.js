import { MemoryRouter } from 'react-router-dom'
import AppRouter from '../../appRouter/AppRouter.jsx'

export const renderWithRouter = (component, initialRoute = '/') => {
    return (
        <MemoryRouter initialEntries={[initialRoute]}>
            <AppRouter/>
            {component}
        </MemoryRouter>
    )
}