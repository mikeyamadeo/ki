import React from 'react-native'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router } from 'react-native-router-flux'
import { scenes } from './config.scenes'

import * as reducers from './redux.reducers'

const createStoreWithMiddleware = applyMiddleware()(createStore)
const reducer = combineReducers(reducers)
const store = createStoreWithMiddleware(reducer)

export default React.createClass({
  render () {
    return (
      <Provider store={store}>
        <Router scenes={scenes} />
      </Provider>
    )
  }
})
