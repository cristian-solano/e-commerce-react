import { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import ProductItem from "../Components/ProductItem"
import { setCategoriesThunk, setProductThunk } from "../redux/actions"

const Shop = () => {

    const dispatch = useDispatch()
    const productArr = useSelector(state => state.products)
    const categoriesArr = useSelector(state => state.categories)


    const [currentCategory, setCurrentCategory] = useState('')    

    useEffect(() => {
        dispatch(setProductThunk(currentCategory))
        dispatch(setCategoriesThunk())
    }, [dispatch, currentCategory])


   

    const list = productArr.map((item) => <ProductItem key={item.id} productObj={item} />)
    const categoriesList = categoriesArr.map(item => <button type="button" className="btn btn-warning" style={{margin: '5px'}} 
            key={item.id} onClick={() => setCurrentCategory(item.id)} >{item.name}</button>)
    return (
        <div style={{backgroundColor: "#f5e0c7"}}>
            <h1 style={{padding: "15px"}}>Welcome to Store Accesories </h1>
            <button type="button" className="btn btn-dark" onClick={() => setCurrentCategory('')} style={{margin: '5px'}}>
                All products
            </button>
            {categoriesList}
            {list}

        </div>
    )
}

export default Shop