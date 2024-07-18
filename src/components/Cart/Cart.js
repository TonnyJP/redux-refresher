import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from "react-redux";

const Cart = (props) => {
  const items = useSelector(state => state.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map((item) => {
          const toAdd = { ...item, total: item.quantity * item.price }
          return <CartItem item={toAdd} key={item.title} />
        })}
      </ul>
    </Card>
  );
};

export default Cart;
