import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'

import Routes from 'routes'
import { store } from 'store'

function App() {
  return (
    <Provider store={store}>
      <Routes />
      <Toaster />
    </Provider>
  )
}

export default App
