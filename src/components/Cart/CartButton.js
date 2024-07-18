import { cartActions } from '../../store';
import classes from './CartButton.module.css';
import { useDispatch, useSelector } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.items);
  let totalQuantity = items.reduce((accumulator, item) => accumulator + item.quantity, 0)


  const handleShowCart = () => {
    dispatch(cartActions.toggleShowCart())
  }
  return (
    <button className={classes.button} onClick={handleShowCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
