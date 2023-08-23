import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { createReduxStore } from '../../store/appStore.js'

export const renderWithProvider = (component = null, initialState = {}) => {
    return render(
        <Provider store={createReduxStore(initialState)}>
            {component}
        </Provider>,
    )

}