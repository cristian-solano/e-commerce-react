import { deleteProductFromCart, getFilterCategories, getFilterProducts, getProductById, getProducts, getProductsFromCart } from "../../Services"

export const actions = {
    productSetAll: "@product/setAll",
    productInfoSetById: "@product/setById",
    categoriesSetValues: "@categories/setValues",
    cartSetProducts: "@cart/setProducts",
    
}

//! const dispatch = useDispatch()
//? dispatch( {type: "@product/setAll", payload: data})
//* dispatch (productSetAll (data))

export const productSetAll = (data) => ({
    type: actions.productSetAll,
    payload: data
})

export const setProductInfo = (data) => ({
    type: actions.productInfoSetById,
    payload: data
})

export const setCategories = (data) => ({
    type: actions.categoriesSetValues,
    payload: data
})

export const setProductsToCart = (data) => ({
    type: actions.cartSetProducts,
    payload: data
})



export const setProductThunk = (category) => {
    return (dispatch) => {
        if(category){
            getFilterProducts(category)
                .then((res) => {
                    dispatch(productSetAll(res))
                })
        } else {
            getProducts()
                .then((res) => {
                    dispatch(productSetAll(res))
                })
        }
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

export const setCategoriesThunk = () => {
    return (dispatch) => {
        getFilterCategories()
        .then((res) => {
            return dispatch(setCategories(res))
        })
    }
}

export const setCartProductsThunk = () => {
    return (dispatch) => {
        getProductsFromCart()
            .then((res) => {
                return dispatch(setProductsToCart(res))
            })
    }
}

export const deleteCartProductThunk = (id) => {
    return (dispatch) => {
        deleteProductFromCart(id)
            .then(() => {
                return dispatch(setCartProductsThunk())
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