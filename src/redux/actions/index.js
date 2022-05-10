import { getProductById, getProducts } from "../../Services"

export const actions = {
    productSetAll: "@product/setAll",
    productInfoSetById: "@product/setById"
}

export const productSetAll = (data) => ({
    type: actions.productSetAll,
    payload: data
})

export const setProductInfo = (data) => ({
    type: actions.productInfoSetById,
    payload: data
})


export const setProductThunk = () => {
    return dispatch => {
        getProducts()
        .then((res) =>  {
            return dispatch(productSetAll(res))
        })
    }
}


export const setInfoProductThunk = (id) => {
    return (dispatch) => {
        getProductById(id)
        .then((res) => {
            dispatch(setProductInfo(res))
        })
    }
}



/*

! 1.Ejecutamos el dispatch (actualiza nuestro estado global)
1. dispatch{{type: "@product/setAll", payload: data}}

! 2. Utilizando un middleware, vamos a manipular la informacion que vamos a setear
en nuestro payload.
2.
*/