import { createStore,applyMiddleware,combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { TestReducer } from './reducers/TestReducer'
import thunk  from "redux-thunk"

const rootReducer=combineReducers({
    testState:TestReducer
})


const middleware=applyMiddleware(thunk)
const store=createStore(rootReducer,composeWithDevTools(middleware))
export default store