import '../Cart/Cart.scss'
import "bulma/css/bulma.css";
import { useId } from 'react'
import { CartIcon, ClearCartIcon } from '../../img/icons.jsx'
import { useCart } from '../../hooks/useCart.js'
import Checkout from '../../pages/Checkout.jsx';
import { Link } from 'react-router-dom';

function CartItem({ image, price, title, quantity, lot, addToCart, removeFromCart,minusToCart }) {

    return (


        <li>
            <img
                src={image}
                alt={title}
            />
            <div className='block'>
                <strong className='has-text-white'>{title}</strong> - ${price}
            </div>

            <footer>
                <button className='button is-danger' onClick={removeFromCart}>Eliminar</button>
                <button onClick={minusToCart}>-</button>
                <small >
                     {quantity}
                </small>
                <button onClick={addToCart}>+</button>
                <br></br>
            </footer>
            <br></br>
        </li>
    )
}


export function Cart() {
    const cartCheckboxId = useId()
    const { cart, clearCart, addToCart, removeFromCart, minusToCart } = useCart()

    return (
        <>
            <label className='cart-button' htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type='checkbox' hidden />

            <aside className='cart'>
                <Link className='button is-light' to="/checkout" state={{ arrayData: cart }}>
                    Pagar
                </Link><br></br>
                <ul>
                    <br></br>
                    {cart.map(product => (
                        <CartItem
                            key={product.id}
                            addToCart={() => addToCart(product)}
                            minusToCart={() => minusToCart(product)}
                            removeFromCart={() => removeFromCart(product)}
                            {...product}
                        />
                    ))}

                </ul>

                <button className='button is-light' onClick={clearCart}>
                    <ClearCartIcon />
                </button>

            </aside>
        </>
    )
}