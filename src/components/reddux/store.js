import {configureStore} from '@reduxjs/toolkit'
import userSlice from './userSlice'
import productSlice from './productSlice'
import showitemSlice from './showitemSlice'
import homeSlice from './homeSlice'


export const mystore=configureStore({
    reducer:{
        usersdata:userSlice,
        productslink:productSlice,
        leftedata:showitemSlice,
        homedata:homeSlice,
    }
})
