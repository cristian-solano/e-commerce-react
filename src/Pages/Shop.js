import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import ProductItem from "../Components/ProductItem"
import { setProductThunk } from "../redux/actions"

const Shop = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setProductThunk())
    }, [dispatch])


    const productArr = useSelector(state => state.products)

    const list = productArr.map((item) => <ProductItem key={item.id} productObj={item}/>)

    return (
        <div>
            <h1>Esta es mi Tienda</h1>
            {list}

        </div>
    )
}

export default Shop