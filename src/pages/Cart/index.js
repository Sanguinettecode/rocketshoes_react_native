import React from 'react';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {bindActionCreators} from 'redux';
import * as ActionsCart from '../../store/modules/cart/actions';
import {
  Products,
  Product,
  ProductInfo,
  ProductDelete,
  ProductDetails,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductControls,
  ProductControlButton,
  ProductAmount,
  ProductSubTotal,
  TotalContainer,
  TotalPrice,
  TotalText,
  ButtonOrder,
  ButtonOrderText,
} from './styles';

function Cart({products, updateAmountRequest, removeFromCart, total}) {
  function increment(product) {
    const amount = product.amount + 1;
    return updateAmountRequest(product.id, amount);
  }
  function decrement(product) {
    const amount = product.amount - 1;
    return updateAmountRequest(product.id, amount);
  }
  return (
    <Products>
      {products.map(product => (
        <Product key={product.id}>
          <ProductInfo>
            <ProductImage source={{uri: product.image}} />
            <ProductDetails>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductPrice>{product.price}</ProductPrice>
            </ProductDetails>
            <ProductDelete onPress={() => removeFromCart(product.id)}>
              <Icon name="delete-forever" size={20} color="#7159c1" />
            </ProductDelete>
          </ProductInfo>
          <ProductControls>
            <ProductControlButton onPress={() => decrement(product)}>
              <Icon name="remove-circle-outline" size={20} color="#7159c1" />
            </ProductControlButton>
            <ProductAmount value={String(product.amount)} />
            <ProductControlButton onPress={() => increment(product)}>
              <Icon name="add-circle-outline" size={20} color="#7159c1" />
            </ProductControlButton>
            <ProductSubTotal>{product.subTotal}</ProductSubTotal>
          </ProductControls>
        </Product>
      ))}
      <TotalContainer>
        <TotalText>total</TotalText>
        <TotalPrice>R$ {total}</TotalPrice>
        <ButtonOrder>
          <ButtonOrderText>finalizar pedido</ButtonOrderText>
        </ButtonOrder>
      </TotalContainer>
    </Products>
  );
}

const mapStateToProps = state => ({
  products: state.cart.map(product => ({
    ...product,
    subTotal: product.amount * product.price,
  })),
  total: state.cart.reduce((total, product) => {
    return total + product.price * product.amount;
  }, 0),
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(ActionsCart, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
