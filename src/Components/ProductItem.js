import { Link } from "react-router-dom"

const ProductItem = ({productObj}) => {
    return (
        <Link to={`shop/${productObj.id}`}>
            <div>
                {productObj.name}
            </div>
        </Link>
    )
}

export default ProductItem