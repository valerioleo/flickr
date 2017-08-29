import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from 'reducers'
import {BrowserRouter} from 'react-router-dom'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = preloadedState => {
  const store = createStore(rootReducer, preloadedState, composeEnhancers(applyMiddleware(thunk)))

  if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
      module.hot.accept('reducers', () => {
        store.replaceReducer(rootReducer)
      })
    }
  }

  return store
}

// const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={configureStore()}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
