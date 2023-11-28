import { FlatList } from 'react-native';
import { CartItem } from '../../types/CartItem';
import { Actions, Item, ProductContainer, Image, QuantityContainer } from './styles';
import { Text } from '../Text';

interface CartProps {
  cartItems: CartItem[];
}

export function Cart({ cartItems }: CartProps) {
  return (
    <FlatList
      data={cartItems}
      keyExtractor={cartItem => cartItem.product._id}
      showsVerticalScrollIndicator={false}
      renderItem={({ item: cartItem }) => (
        <Item>
          <ProductContainer>
            <Image
              source={{
                uri: `http://192.168.15.15:3001/uploads/${cartItem.product.imagePath}`,
              }}
            />

            <QuantityContainer>
              <Text size={14} color="#666">
                {cartItem.quantity}x
              </Text>
            </QuantityContainer>
          </ProductContainer>
          <Actions></Actions>
        </Item>
      )}
    />
  );
}
