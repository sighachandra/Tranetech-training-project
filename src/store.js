import { configureStore } from '@reduxjs/toolkit'
import combinedReducers from './reducer'

const store = configureStore({
  reducer: combinedReducers
})

export default store