import { configureStore } from '@reduxjs/toolkit'
import dataStoreSlice from './dataStoreSlice'

export default configureStore({
  reducer: {
    dataStore: dataStoreSlice
  }
})