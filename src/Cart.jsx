function Cart({ cartItems, onIncreaseQuantity, onDecreaseQuantity, onRemoveItem, onConfirmOrder }) {

    const total = cartItems.reduce((sum, item) => {
        return sum + item.price * item.quantity;
    },0);

    return (

        <div className="cart">
            <h2>Your Cart ({cartItems.length})</h2>
            {cartItems.length === 0 && (
                <p className="empty-cart-message">
                    Your added items will appear here.
                </p>
            )}
            <div className="cart-Items">
                {cartItems.map((item, index) => (
                    <div key={`${item.name}-${index}`}>
                        <p className="cart-item-name">{item.name}</p>

                        <div className="quantity-controls">
                            <button 
                                className="quantity-btn"
                                onClick={() => onDecreaseQuantity(item.name)}
                            >
                                -
                            </button>

                            <span>{item.quantity}</span>

                            <button 
                                className="quantity-btn"
                                onClick={() => onIncreaseQuantity(item.name)}
                            >
                                +
                            </button>
                        </div>

                        <p className="cart-item-price">
                            ${item.price.toFixed(2)} each
                        </p>

                        <p className="cart-item-subtotal">
                            Subtotal: ${(item.price * item.quantity).toFixed(2)}
                        </p>

                        <button className="remove-item-btn" onClick={() => onRemoveItem(item.name)}>Remove</button>
                        
                    </div>
                ))}
            </div>

            <div className="cart-total">
                <span>Order Total</span>
                <strong>${total.toFixed(2)}</strong>
            </div>

            <button className="confirm-order-btn" onClick={onConfirmOrder} disabled={cartItems.length === 0}> 
                Confirm Order
            </button>

        </div>

    );
}

export default Cart;