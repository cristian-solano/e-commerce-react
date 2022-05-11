import { actions } from "../actions";

const INITIAL_STATE = {
    products: [],
    productsInfo: {},
    categories: []
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
        case actions.categoriesSetValues:
            return {
                ...state,
                categories: action.payload
            }
    
        default:
            return state;
    }
}