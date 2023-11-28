import { FlatList } from 'react-native';
import { CartItem } from '../../types/CartItem';

interface CartProps {
  cartItems: CartItem[];
}

export function Cart({ cartItems }: CartProps) {
  return (
    <FlatList
      data={[cartItems]}
    />
  );
}
