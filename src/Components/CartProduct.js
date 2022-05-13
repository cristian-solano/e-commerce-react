import { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteCartProductThunk } from "../redux/actions"
import '../shop.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashCan } from "@fortawesome/free-solid-svg-icons"
const CartProduct = ({prodObj}) => {

    const dispatch = useDispatch()
    const [deleteId, setDeleteId] = useState(null)
    const filterProducts = useSelector(state => state.products)


    useEffect(() => {
        if (deleteId){
            dispatch(deleteCartProductThunk(deleteId))
        }

    }, [dispatch, deleteId])

    
    return (
        <div className="cart">
            <h1 >{prodObj.product.name}</h1>
            <div className="quantity" style={{border: "1px solid gray"}}>
                <h3>Quantity: {prodObj.quantity}</h3>
                <h4>Total: {prodObj.product.price * prodObj.quantity}</h4>
                {filterProducts.filter(product => (
                        <div key={product?.id}>
                            <img src={product.images[0].url} alt={product} style={{width: '150px'}}/>
                        </div>
                ))}
            </div>
            


            <button onClick={() => setDeleteId(prodObj.id)} className="btn btn-secondary"><FontAwesomeIcon icon={faTrashCan} /></button>
        </div>
    )
}

export default CartProduct