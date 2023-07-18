import { createSlice } from "@reduxjs/toolkit";


export const showitemSlice = createSlice({
    name: 'leftedata',
    initialState: {
        showdataoflink: [],
        quickviewdatalist: [], /// this state will update the filter data 
        addtocartitem: [],
    },
    reducers: {
        additem(state, action) {
            state.showdataoflink = action.payload;
        },

        quickviewdata(state, action) {
            state.quickviewdatalist = action.payload;
        },

        addtocart(state, action) {
            const findindex = state.addtocartitem.findIndex((ele) => (ele.id === action.payload.id))
            if(findindex >=0){
                state.addtocartitem[findindex].cartquantity += 1
            }else{
                const cartproduct = {...action.payload,cartquantity:1}
                state.addtocartitem.push(cartproduct)
            }  
        },


        INcreasecartitem(state, action) {
            // console.log(action.payload)
            const findindex = state.addtocartitem.findIndex((ele) => (ele.id === action.payload))
            if(findindex >=0){
                state.addtocartitem[findindex].cartquantity += 1
            }else{
                const cartproduct = {...action.payload,cartquantity:1}
                state.addtocartitem.push(cartproduct)
            } 
        },

        removesingleItem(state, action) {
            const itemindex = state.addtocartitem.findIndex((ele)=> ele.id === action.payload)

            if(state.addtocartitem[itemindex].cartquantity >1){
                state.addtocartitem[itemindex].cartquantity -= 1
            }else if(state.addtocartitem[itemindex].cartquantity === 1){
               const deletedaata = state.addtocartitem.filter((item) => item.id !== action.payload)

               state.addtocartitem=deletedaata
            }
        },

        removeitems(state, action) {
            state.addtocartitem = state.addtocartitem.filter((item)=>item.id !== action.payload)
        },

    }
})

export const { additem, quickviewdata, addtocart, removeitems,removesingleItem,INcreasecartitem } = showitemSlice.actions;

export default showitemSlice.reducer;
