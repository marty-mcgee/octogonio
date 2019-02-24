import React from 'react'
import ReactDOM from 'react-dom'
//import { browserHistory } from 'react-router'
import { createBrowserHistory } from 'history'
const browserHistory = createBrowserHistory();
import { AppContainer } from 'react-hot-loader'
import configureStore from 'store/configureStore'
import App from './components/App'

// [MM] chat
const store = configureStore()
//const initialState = window.__INITIAL_STATE__
//const store = configureStore(initialState)

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component store={store} history={browserHistory} />{/* {browserHistory} */}
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./components/App', () => { render(App) })
}
