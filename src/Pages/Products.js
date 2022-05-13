import { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { setInfoProductThunk } from "../redux/actions"
import { addProductToCart } from "../Services"
import '../shop.css'


const Product = () => {

    const { id } = useParams()
    const dispatch = useDispatch()
    const product = useSelector(state => state.productsInfo)
    
    const [quantity, setQuantity] = useState(0)
    const [confirm, setConfirm] = useState(false)

    useEffect(() => {
        dispatch(setInfoProductThunk(id))
    }, [dispatch, id])

    useEffect(() => {
        if(quantity && confirm) {
            addProductToCart({
                product: id,
                quantity: quantity
            })
            .then((res) => {
                console.log(res)
                setConfirm(false)
            })
        }
    }, [quantity, confirm, id])



    const decrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1)
        }
    }
    
   
    return (
        <div>
            
          <h1>{product.name}</h1>
          <div>
          <button onClick={decrement} className="btn btn-outline-danger less">-</button>
          {quantity}
          <button onClick={() => setQuantity(quantity + 1)} className="btn btn-outline-info plus">+</button>
            <br />
          <button onClick={() => setConfirm(true)} className="btn btn-outline-warning">Add to Cart</button>
          </div>
          <p>{product.description}</p>
          {product.images?.map((item) => <img style={{width: '300px', border: '1px solid black'}}src={item.url} alt='' key={item.url} />)}
      
        </div>
    )
}

export default Product