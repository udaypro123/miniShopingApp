import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"


export const getproductdatalink=createAsyncThunk('linkdata/links',async(id)=>{
    const res = await fetch(`https://fakestoreapi.com/products/category/${id}`)
    const data= await res.json()
    return data;
})


export const productSlcie=createSlice({
    name:"productslink",
    initialState:{
        datalinks:[],
        status:false,
        error:false,
    },
    reducers:{},

    extraReducers:(Builder)=>{
            Builder.addCase(getproductdatalink.pending,(state,action)=>{
                state.error=false
                state.status=false
            })
            Builder.addCase(getproductdatalink.fulfilled,(state,action)=>{
                state.datalinks=action.payload
                state.error=false
                state.status=true
            })
            Builder.addCase(getproductdatalink.rejected,(state,action)=>{
                state.error=true
                state.status=false
            })
    }
})

export default productSlcie.reducer;