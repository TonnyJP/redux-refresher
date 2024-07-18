import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 0,
    title: "Test",
    price: 6,
    description: "This is a first product - amazing!"
  },
  {
    id: 1,
    title: "My First Book",
    price: 5,
    description: "This is a first Book"
  }
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(item => {
          const { title, price, description, id } = item
          return <ProductItem
            key={id}
            title={title}
            price={price}
            description={description}
            id={id}
          />
        })

        }
      </ul>
    </section>
  );
};

export default Products;
