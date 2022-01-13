import {createStore, applyMiddleware, combineReducers} from 'redux'
import createSagaMiddleware from '@redux-saga/core'
import Reducer from '../reducer/Reducer'
import mySaga from '../saga/Saga'
 const reducer =combineReducers({reducer: Reducer})
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)
export default store
  sagaMiddleware.run(mySaga)