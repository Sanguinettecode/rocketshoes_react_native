import Styled from 'styled-components/native';

export const Container = Styled.View`
background-color: #191920;
`;

export const Card = Styled.View`
width: 220px;
padding: 12px;
margin: 15px;
background-color: #fff;
border-radius: 4px;
`;
export const ProductImage = Styled.Image`
width: 200px;
height: 200px;
`;
export const ProductTitle = Styled.Text`
font-size: 16px;
`;
export const ProductPrice = Styled.Text`
font-size: 20px;
font-weight: bold;
margin-bottom: 14px;
margin: 14px 0;
`;
export const ProductAmount = Styled.View`
flex-direction: row;
justify-content: center;
align-items:center;
margin-right: 10px;
background-color: rgba(0,0,0,0.1);
padding:12px;
`;
export const ProductAmountText = Styled.Text`
color: #fff;
  margin: 0px 4px 0px 10px;
`;
export const AddButton = Styled.TouchableOpacity`
flex-direction: row ;
background-color: #7159c1;
border-radius: 4px;
margin-top: auto;
align-items: center;
`;
export const AddButtonText = Styled.Text`
font-weight:bold;
text-transform: uppercase;
color: #fff;
align-items:center;
text-align:center;
flex:1;
`;
