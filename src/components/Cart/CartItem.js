import { cartActions } from '../../store';
import classes from './CartItem.module.css';
import { useDispatch } from "react-redux";

const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;
  const dispatch = useDispatch();
  const handleDecrease = () => {
    dispatch(cartActions.removeFromCart(id))
  }

  const handleAddToCart = () => {
    dispatch(cartActions.addToCart({
      item: { title, quantity, total, price }
    }))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleDecrease}>-</button>
          <button onClick={handleAddToCart}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
