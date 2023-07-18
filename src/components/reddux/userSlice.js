import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const statuss = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
})

export const getuserdata = createAsyncThunk('userhai/userpagal', async (person) => {
    const response = await fetch(`https://randomuser.me/api/?results=30&gender=${person}`)
    const data = await response.json()
    return data.results;
})

export const userSlice = createSlice({

    name: 'users',
    initialState: {
        userdata: [],
        filtersuserdata:[], // this is filter data of users
        status: statuss.IDLE
    },
    reducers: {
        filterddata:(state,action)=>{
            state.userdata = state.filtersuserdata.filter((ele)=> (ele.name.first).toLowerCase().includes(action.payload))
        },
       
    },
    extraReducers: (builder) => {
        builder.addCase(getuserdata.pending, (state, action) => {
            state.status = statuss.LOADING
        })
        builder.addCase(getuserdata.fulfilled, (state, action) => {
            state.userdata = action.payload;
            state.filtersuserdata = action.payload;
            state.status = statuss.IDLE
        })
        builder.addCase(getuserdata.rejected, (state, action) => {
            state.status = statuss.ERROR
        })
    }


})

export const {filterddata}=userSlice.actions;
export default userSlice.reducer;