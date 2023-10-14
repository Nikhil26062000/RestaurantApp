import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        items:[],
        sum:0
    },
    reducers:{
        addItem : (state,action) =>{
            const existingItem = state.items.find(
                (item)=>item.name === action.payload.name
            );
            if(existingItem){
                existingItem.quantity += 1; 
                existingItem.price ? state.sum+=existingItem.price : state.sum+=existingItem.defaultPrice;
            }else{
                state.items.push({...action.payload,quantity:1});
               
                action.payload.price ? state.sum+=action.payload.price : state.sum+=action.payload.defaultPrice;

            }
            
        },
        removeItem:(state,action)=>{
            // const {name,price} = action.payload;
           state.items = state.items.filter((item)=>{
                return item.name != action.payload;
            });
            
           

           
           
        },
        clearCart:(state)=>{
            state.items.length = 0;
            state.sum=0;
        },
        increaseQuantity:(state,action)=>{

            const tempItem =  state.items.find(
                (item)=> item.name === action.payload)
                
                if(tempItem){
                   tempItem.quantity+=1;
                //   tempItem.price? state.sum+=tempItem.price : state.sum+=tempItem.defaultPrice
                    console.log(tempItem.quantity);
                }
        
                
            
           
        },
        decreaseQuantity:(state,action)=>{

            const tempItem =  state.items.find(
                (item)=> item.name === action.payload)
                
                if(tempItem && tempItem.quantity>1){
                   tempItem.quantity-=1;
                //    tempItem.price? state.sum-=tempItem.price : state.sum-=tempItem.defaultPrice
                    console.log(tempItem.quantity);
                }
        },
        deductPrice:(state,action)=>{
          
            state.sum-=action.payload;
        },
        addingPrice:(state,action)=>{
          
            state.sum+=action.payload;
        }
        
    }
});

export const {addItem,removeItem,clearCart,increaseQuantity,decreaseQuantity,deductPrice,addingPrice} = cartSlice.actions;

export default cartSlice.reducer;

