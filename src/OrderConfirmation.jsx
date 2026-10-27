
import waffleDesktop from "./assets/images/image-waffle-desktop.jpg";
import cremeBruleeDesktop from "./assets/images/image-creme-brulee-desktop.jpg";
import macaronDesktop from "./assets/images/image-macaron-desktop.jpg";
import tiramisuDesktop from "./assets/images/image-tiramisu-desktop.jpg";
import baklavaDesktop from "./assets/images/image-baklava-desktop.jpg";
import meringueDesktop from "./assets/images/image-meringue-desktop.jpg";
import cakeDesktop from "./assets/images/image-cake-desktop.jpg";
import brownieDesktop from "./assets/images/image-brownie-desktop.jpg";
import pannaCottaDesktop from "./assets/images/image-panna-cotta-desktop.jpg";

const imageMap = {
    "Waffle with Berries": waffleDesktop,
    "Vanilla Bean Crème Brûlée": cremeBruleeDesktop,
    "Macaron Mix of Five": macaronDesktop,
    "Classic Tiramisu": tiramisuDesktop,
    "Pistachio Baklava": baklavaDesktop,
    "Lemon Meringue Pie": meringueDesktop,
    "Red Velvet Cake": cakeDesktop,
    "Salted Caramel Brownie": brownieDesktop,
    "Vanilla Panna Cotta": pannaCottaDesktop
};


function OrderConfirmation({cartItems, isOpen, onStartNewOrder}) {
    if(!isOpen) {
        return null;
    }

    const orderTotal = cartItems.reduce((sum, item) => {
        return sum + item.price * item.quantity;
    }, 0);

    return (
        <div className="modal-overlay">
            <div className="order-confirmation">
                <div className="confirmation-icon" aria-hidden="true">
                    ✓
                </div>
                
                <h2>Order Confirmed</h2>
                <p>We hope you enjoy your food!</p>

                <div className="confirmed-items">
                    {cartItems.map((item) => (
                        
                        <div className="confirmed-item" key={item.name}>
                            <img
                                src={imageMap[item.name]}
                                alt={item.name}
                                className="confirmed-item-image"
                            />

                            <div className="confirmed-item-details">
                                <p className="confirmed-item-name">{item.name}</p>

                                <div className="confirmed-item-pricing">
                                    <span className="confirmed-item-quantity">
                                        {item.quantity}x
                                    </span>

                                    <span className="confirmed-item-unit-price">
                                        @ ${item.price.toFixed(2)}
                                    </span>
                                </div>
                            </div>

                            <strong className="confirmed-item-subtotal">
                                ${(item.price * item.quantity).toFixed(2)}
                            </strong>
                        </div>

                    ))}
                </div>

                <div className="confirmed-total">
                    <span>Order Total</span>
                    <strong>${orderTotal.toFixed(2)}</strong>
                </div>

                <button className="new-order-btn" onClick={onStartNewOrder}>
                    Start New Order
                </button>
            </div>
        </div>
    );
}

export default OrderConfirmation;