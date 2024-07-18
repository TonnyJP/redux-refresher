import { cartActions } from '../../store';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch } from "react-redux";

const ProductItem = (props) => {
  const { title, price, description, id } = props;
  const dispatch = useDispatch();
  const handleAddItemTocart = () => {
    dispatch(cartActions.addToCart({ item: { id, title, price, description, quantity: 1 } }))
  }


  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handleAddItemTocart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
