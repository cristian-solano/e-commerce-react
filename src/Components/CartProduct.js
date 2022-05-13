import { useEffect } from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { deleteCartProductThunk } from "../redux/actions"

const CartProduct = ({prodObj}) => {

    const dispatch = useDispatch()
    const [deleteId, setDeleteId] = useState(null)


    useEffect(() => {
        if (deleteId){
            dispatch(deleteCartProductThunk(deleteId))
        }

    }, [dispatch, deleteId])

    return (
        <div>
            <h1>{prodObj.product.name}</h1>
            <h3>Quantity: {prodObj.quantity}</h3>
            <h4>Total: {prodObj.product.price * prodObj.quantity}</h4>
            <button onClick={() => setDeleteId(prodObj.id)}>X</button>
        </div>
    )
}

export default CartProduct