import { MemoryRouter } from 'react-router-dom'
import AppRouter from '../../appRouter/AppRouter.jsx'
import { render } from '@testing-library/react'

export const renderWithRouter = (component = null, initialRoute = '/') => {
   return render(
       <MemoryRouter initialEntries={[initialRoute]}>
           <AppRouter/>
           {component}
       </MemoryRouter>
   )

}