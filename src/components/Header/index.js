import React from 'react';
import {TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  ContainerCart,
  LogoHeader,
  Wrapper,
  ItemCount,
} from './styles';

function Header({navigation, cartSize}) {
  return (
    <Wrapper>
      <Container>
        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
          <LogoHeader />
        </TouchableOpacity>
        <ContainerCart onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" size={28} color="#fff" />
          <ItemCount>{cartSize}</ItemCount>
        </ContainerCart>
      </Container>
    </Wrapper>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
