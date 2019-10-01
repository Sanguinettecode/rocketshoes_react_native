import Styled from 'styled-components';

export const Products = Styled.View`
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  margin: 15px;
`;
export const Product = Styled.View`
`;
export const ProductInfo = Styled.View`
flex-direction: row;
  align-items: center;

`;
export const ProductDelete = Styled.TouchableOpacity`
padding: 6px;
`;
export const ProductDetails = Styled.View`
  flex: 1;
  margin-left: 10px;
  padding: 10px;
  `;
export const ProductImage = Styled.Image`
height: 80px;
  width: 80px;
`;
export const ProductTitle = Styled.Text``;
export const ProductPrice = Styled.Text`
font-size: 16px;
font-weight: bold;
margin-top: 5px;
`;
export const ProductControls = Styled.View`
 flex-direction: row;
  align-items: center;
  background: #eee;
  padding: 8px;
  border-radius: 4px;
`;
export const ProductControlButton = Styled.TouchableOpacity``;
export const ProductAmount = Styled.TextInput.attrs({
  readonly: true,
})`
background: #fff;
text-align: center;
border-radius: 4px;
padding: 5px;
  margin: 0 5px;
  max-width: 52px;
`;
export const ProductSubTotal = Styled.Text`
font-size: 16px;
font-weight: bold;
text-align: right;
flex: 1;
`;

export const TotalContainer = Styled.View`
justify-content: center;
align-items: center;
margin-top: 30px;
`;
export const TotalText = Styled.Text`
text-transform: uppercase;
font-size: 16px;
color: #999;
font-weight: bold;
`;
export const TotalPrice = Styled.Text`
text-transform: uppercase;
font-size: 30px;
color: #333;
font-weight: bold;
`;
export const ButtonOrder = Styled.TouchableOpacity`
background: #7159c1;
border-radius: 4px;
padding: 12px 48px;
margin-top: 30px;

`;
export const ButtonOrderText = Styled.Text`
text-transform: uppercase;
color: #fff;
font-size: 14px;
text-align: center;
font-weight: bold;
justify-content: center;
`;
