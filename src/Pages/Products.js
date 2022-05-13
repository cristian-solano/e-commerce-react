import { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { setInfoProductThunk,  setProductThunk } from "../redux/actions"
import { addProductToCart } from "../Services"
import '../shop.css'


const Product = () => {

    const { id } = useParams()
    const dispatch = useDispatch()
    const product = useSelector(state => state.productsInfo)
    const filterProducts = useSelector(state => state.products)


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


    useEffect(() => {
        if(product.category){
            dispatch(setProductThunk(product.category.id))
            
            // setFiltProd(filtProd.filter((item) => item.id !== product.id))
        }
        
    }, [dispatch, product])

    // useEffect(() => {
    //     if(filterProducts){
    //         setFiltProd(filtProd.filter((item) => item.id !== product.id))
    //     } 
    // }, [filtProd, id, product, filterProducts])


    const decrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1)
        }
    }
    
   
    return (
        <div style={{backgroundColor: "#f5e0c7"}}>
          <h1>{product.name}</h1>
          
          <div>
          <button onClick={decrement} className="btn btn-outline-danger less">-</button>
          {quantity}
          <button onClick={() => setQuantity(quantity + 1)} className="btn btn-outline-info plus">+</button>
            <br />
          <button onClick={() => setConfirm(true)} className="btn btn-outline-warning">Add to Cart</button>
          </div>
          <p style={{fontSize: "25px", padding:"30px"}}>{product.description}</p>
          {product.images?.map((item) => <img style={{width: '300px', border: '1px solid black'}}src={item.url} alt='' key={item.url} />)}
          <p style={{fontSize: "40px", padding: "10px"}}>$: {product.price}</p>
          <h2>Productos relacionados</h2>
          <div className="relation ">
                {filterProducts.map(product => (
                    <div key={product?.id} style={{border: "1px  gray", padding: "20px"}}>
                        <h3 style={{fontSize: "20px", fontFamily: "Optima, sans-serif"}}>{product.name}</h3>
                        <img src={product.images[0].url} alt={product} style={{width: '150px'}}/>
                    </div>

                ))}
          </div>
          
        </div>
    )
}

export default Product