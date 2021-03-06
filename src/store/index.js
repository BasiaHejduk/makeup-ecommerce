import { createStore } from 'redux';
import { v4 as uuid } from 'uuid';

export const addToCart = (payload) => {
    return {
        type: "cart/add",
        payload: {
            key: uuid(),
            ...payload,
        }

    }
};

export const removeFromCart = (payload) => {
    return {
        type: "cart/remove",
        payload: {
            key: uuid(),
            ...payload,
        }
    }
};

const initialState = {
    cart: []
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "cart/add":
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        case "cart/remove":
            return {
                ...state, 
                cart: state.cart.filter((product) => product.key !== action.payload.key)
            };
        default:
            return state;
    }
};

export const store = createStore(cartReducer);


