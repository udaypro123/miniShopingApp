import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const gethomedattaformapi = createAsyncThunk('homelist/homedata', async () => {
    const res = await fetch("https://fakestoreapi.com/products")
    const data = await res.json()
    return data;
})
export const homeSlice = createSlice({
    name: "homedata",
    initialState: {
        homedatalist: [],
        filterhomedatalist: [],// search datta
        status: false,
        error: false,
    },
    reducers: {
        searchdatafromlist: (state, action) => {
            state.homedatalist = state.filterhomedatalist.filter((ele) =>(ele.title.toLowerCase().includes(action.payload))
            )
        }
    },
    extraReducers: (Builder) => {
        Builder.addCase(gethomedattaformapi.pending, (state, action) => {
            state.status = false;
            state.error = false;
        })
        Builder.addCase(gethomedattaformapi.fulfilled, (state, action) => {

            state.homedatalist = action.payload;
            state.filterhomedatalist = action.payload;
            state.error = false;
            state.status = true;
        })
        Builder.addCase(gethomedattaformapi.rejected, (state, action) => {
            state.status = false;
            state.error = true;
        })
    }

})
export const { searchdatafromlist } = homeSlice.actions;
export default homeSlice.reducer;