import { Link } from "react-router-dom"
import '../product.css'

const ProductItem = ({productObj}) => {
    return (
        <Link to={`/shop/${productObj.id}`}>
            <div className="product ">
                <p>{productObj.name}</p>
                <img src={productObj.images[0].url} alt="card" className="rounded mx-auto d-block" style={{width: '250px', height: '250px', padding: "1px", border: "2px solid gray", margin: "3px"}} />
                <img src={productObj.images[1].url} alt="card" className="rounded mx-auto d-block" style={{width: '250px', height: '250px', padding: "1px", border: "2px solid gray", margin: "3px"}} />
                <img src={productObj.images[2].url} alt="card" className="rounded mx-auto d-block" style={{width: '250px', height: '250px', padding: "1px", border: "2px solid gray", margin: "3px"}} />
                
            </div>
        </Link>
    )
}

export default ProductItem