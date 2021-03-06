import Styled from 'styled-components/native';

import logo from '../../assets/images/logo.png';

export const Wrapper = Styled.SafeAreaView`
min-height: 60px;
  flex: 0;
  background: #141419;
  flex-direction: row;
`;
export const Container = Styled.View`
flex-direction: row;
flex: 1;
justify-content: space-between;
padding: 20px;
`;
export const LogoHeader = Styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
width: 185px;
  height: 24px;
`;
export const ContainerCart = Styled.TouchableOpacity`
  height: 24px;
  width: 24px;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
`;
export const ItemCount = Styled.Text`
  position: absolute;
  text-align: center;
  top: -8px;
  right: -8px;
  min-width: 18px;
  min-height: 18px;
  background: #7159C1;
  color: #fff;
  font-size: 12px;
  padding: 2px;
  border-radius: 9px;
  overflow: hidden;
`;
