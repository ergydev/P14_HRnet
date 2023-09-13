import { combineReducers, configureStore } from '@reduxjs/toolkit'
import employeeSlice from './employeeSlice'

const reducer = combineReducers({
    employeeSlice,
})  

const store = configureStore({
    reducer,
})

export default store