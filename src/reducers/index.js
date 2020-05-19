import {combineReducers} from 'redux'
import TodoReducer from './TodoReducer'
import visiableFilter from './FilterReducer'

export default combineReducers({
    TodoReducer,
    visiableFilter
})