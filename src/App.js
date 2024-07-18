import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux"
import { fetchData } from './store';

let isFirstRendering = true
function App() {
  const dispatch = useDispatch();
  const isShowCart = useSelector(state => state.showCart)
  const cart = useSelector(state => state.items);
  const didStateChange = useSelector(state => state.stateChanged)

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  useEffect(() => {
    if (isFirstRendering) {
      isFirstRendering = false;
      return
    }
    if (didStateChange) {
      fetch('https://async-code-default-rtdb.europe-west1.firebasedatabase.app/:cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart)
      })
    }
  }, [cart, didStateChange])
  return (

    <Layout>
      {isShowCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
