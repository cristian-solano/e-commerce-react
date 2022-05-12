const CartProduct = ({prodObj}) => {
    return (
        <div>
            <h1>{prodObj.product.name}</h1>
            <h3>Quantity: {prodObj.quantity}</h3>
            <h4>Total: {prodObj.product.price}</h4>
        </div>
    )
}

export default CartProduct