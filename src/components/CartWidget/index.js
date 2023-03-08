import { FaShoppingCart } from 'react-icons/fa';
import './styles.css';


function CartWidget() {
    return (
        <a>
            <FaShoppingCart className='icon-cart'/>
            <span className='cart-noti'>4</span>
        </a>
     
    );
  }

  export default CartWidget;
