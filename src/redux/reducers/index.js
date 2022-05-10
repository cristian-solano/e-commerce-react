import { actions } from "../actions";

const INITIAL_STATE = {
    products: [],
    productsInfo: {}
}

export const rootReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.productSetAll:
            return {
                ...state,
                products: action.payload
            }
        case actions.productInfoSetById:
            return {
                ...state,
                productsInfo: action.payload
            }
    
        default:
            return state;
    }
}