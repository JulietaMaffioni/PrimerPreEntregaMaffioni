import cart from './assets/cart4.svg'

const CartWidget = () => {
    return (
        <div>
           <button className="btn" type="submit"> 
           <img src={cart} alt="cart-widget"/>
           </button>
           <h5>0</h5>
        </div>
    )
}

export default CartWidget