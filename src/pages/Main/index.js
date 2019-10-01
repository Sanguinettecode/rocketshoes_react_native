import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';
import * as ActionsCart from '../../store/modules/cart/actions';
import {
  Card,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductAmount,
  ProductAmountText,
  AddButton,
  AddButtonText,
  Container,
} from './styles';

class Home extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    products: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const response = await api.get('/products');

    this.setState({products: response.data});
  };

  addToCart = id => {
    const {addToCartRequest} = this.props;
    addToCartRequest(id);
  };

  rederProduct = ({item}) => {
    const {amount} = this.props;
    return (
      <Card>
        <ProductImage source={{uri: item.image}} />
        <ProductTitle>{item.title}</ProductTitle>
        <ProductPrice>R$ {item.price}</ProductPrice>
        <AddButton onPress={() => this.addToCart(item.id)}>
          <ProductAmount>
            <Icon name="add-shopping-cart" size={26} color="#fff" />
            <ProductAmountText>{amount[item.id] || 0}</ProductAmountText>
          </ProductAmount>
          <AddButtonText>adicionar</AddButtonText>
        </AddButton>
      </Card>
    );
  };

  render() {
    const {products} = this.state;
    return (
      <Container>
        <FlatList
          horizontal
          data={products}
          renderItem={this.rederProduct}
          keyExtractor={item => String(item.id)}
        />
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(ActionsCart, dispatch);

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
