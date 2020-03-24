import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

import { Container, ProductTable, Total, EmptyCart } from './styles';

function Cart({ cart, removeFromCart, updateAmountRequest, total, history }) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }
  const checkCart = () => {
    if (cart.length === 0) {
      return false;
    }
    return true;
  };

  return (
    <Container>
      {checkCart() ? (
        <ProductTable>
          <thead>
            <tr>
              <th />
              <th>PRODUTO</th>
              <th>QUANTIDADE</th>
              <th>SUBTOTAL</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {cart.map(product => (
              <tr key={product.id}>
                <td>
                  <img src={product.image} alt={product.title} />
                </td>
                <td>
                  <strong>{product.title}</strong>
                  <span>{product.priceFormatted}</span>
                </td>
                <td>
                  <div>
                    <button type="button" onClick={() => decrement(product)}>
                      <MdRemoveCircleOutline size={20} color="#333" />
                    </button>
                    <input type="number" readOnly value={product.amount} />
                    <button type="button" onClick={() => increment(product)}>
                      <MdAddCircleOutline size={20} color="#333" />
                    </button>
                  </div>
                </td>
                <td>
                  <strong>{product.subtotal}</strong>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => removeFromCart(product.id)}
                  >
                    <MdDelete size={20} color="red" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </ProductTable>
      ) : (
        <EmptyCart>
          Seu carrinho está vazio
          <span role="img" aria-label="sadface">
            🛒
          </span>
          <button onClick={() => history.push('/')} type="button">
            Retorne à loja
          </button>
        </EmptyCart>
      )}
      <footer>
        <button type="button">Finalizar Pedido</button>
        <Total>
          <span>TOTAL </span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
}
const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
