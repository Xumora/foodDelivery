import { ADD_ONE, ADD_ORDER, DELETE_ORDER, SET_METHOD, DEL_ONE } from "../types";

const initialState = {
    chosenMethod: "dineIn",
    basket: [
    ]
}

const reducer = (state = initialState, action) => {
    let newBasket;
    switch (action.type) {
        case ADD_ORDER:
            let a = { ...action.payload, qty: 1, sum: action.payload.price }
            newBasket = [...state.basket];
            newBasket.push(a)
            return { ...state, basket: newBasket };

        case DELETE_ORDER:
            newBasket = [...state.basket];
            newBasket.splice(action.payload, 1)
            return { ...state, basket: newBasket };

        case SET_METHOD:
            return { ...state, chosenMethod: action.payload };

        case ADD_ONE:
            newBasket = [...state.basket];
            newBasket[action.payload].qty = newBasket[action.payload].qty + 1;
            newBasket[action.payload].sum = parseFloat(Number(newBasket[action.payload].sum) + Number(newBasket[action.payload].price)).toFixed(2);
            return { ...state, basket: newBasket };

        case DEL_ONE:
            newBasket = [...state.basket];
            if (newBasket[action.payload].qty > 1) {
                newBasket[action.payload].qty = newBasket[action.payload].qty - 1;
                newBasket[action.payload].sum = parseFloat(Number(newBasket[action.payload].sum) - Number(newBasket[action.payload].price)).toFixed(2);
                return { ...state, basket: newBasket };
            } else {
                return { ...state };
            }

        default: return state;
    }
}

export default reducer;