import { configureStore } from '@reduxjs/toolkit'
import formulaireReducer from './redeucers/formulaireReducer'

const store = configureStore(formulaireReducer)

export default store