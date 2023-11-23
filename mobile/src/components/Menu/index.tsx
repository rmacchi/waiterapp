import { FlatList } from 'react-native';

import { products } from '../../mocks/products';
import { Text } from '../Text';

import { Product, Image, ProductDetails } from './styles';

export function Menu() {
  return (
    <FlatList
      data={products}
      keyExtractor={product => product._id}
      renderItem={({ item: product }) => (
        <Product>
          <Image />
          <ProductDetails>
            <Text>{product.name}</Text>
            <Text>{product.description}</Text>
            <Text>{product.price}</Text>
          </ProductDetails>
        </Product>
      )}
    />
  );
}
