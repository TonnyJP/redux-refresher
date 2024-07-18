import { configureStore, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items: [],
    showCart: false,
    stateChanged: false
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        replaceCart(state, action) {
            state.items = action.payload.items
        },
        addToCart(state, action) {
            state.stateChanged = true;
            if (state.items.length > 0) {
                const alreadyIn = state.items.findIndex((item) => {
                    return item.id === action.payload.item.id
                });
                if (alreadyIn > -1) {
                    state.items[alreadyIn].quantity += 1
                } else {
                    state.items = [...state.items, action.payload.item]
                }

            } else {
                state.items = [action.payload.item]
            }

        },
        removeFromCart(state, action) {
            const alreadyIn = state.items.findIndex((item) => item.id === action.payload);
            state.stateChanged = true;
            if (alreadyIn > -1 && state.items[alreadyIn].quantity > 1) {
                state.items[alreadyIn].quantity -= 1;
            } else if (alreadyIn > -1 && state.items[alreadyIn].quantity === 1) {
                state.items = state.items.filter(item =>
                    item.id !== action.payload
                )
            }
        },
        clearCart(state) {
            state.items = []
        },
        toggleShowCart(state) {
            state.showCart = !state.showCart
        }
    }
})
export const cartActions = cartSlice.actions

export const fetchData = (cartData) => {
    return async (dispatch) => {
        const getData = async () => {
            const response = await axios.get('https://async-code-default-rtdb.europe-west1.firebasedatabase.app/:cart.json');
            if (response.status !== 200) {
                return response.error.message
            }
            return response.data
        }

        try {
            const cartData = await getData();
            dispatch(cartActions.replaceCart({ items: cartData || [] }))
        } catch (error) {
            console.log(error.message)
        }

    }


}

export const store = configureStore({
    reducer: cartSlice.reducer
})