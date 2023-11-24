import { Modal, TouchableOpacity, Platform } from 'react-native';

import { Text } from '../Text';

import {
  Overlay,
  ModalBody,
  Header,
  Form,
  Input
} from './styles';
import { Close } from '../Icons/Close';
import { Button } from '../Button';

interface TableModalProps {
  visible: boolean;
}

export function TableModal({ visible }: TableModalProps) {
  return (
    <Modal
      visible={visible}
      transparent
    >
      <Overlay behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
        <ModalBody>
          <Header>
            <Text weight="600">Informe a mesa</Text>

            <TouchableOpacity>
              <Close color="#666"/>
            </TouchableOpacity>
          </Header>

          <Form>
            <Input
              placeholder="Número da mesa"
              placeholderTextColor="#666"
              keyboardType="number-pad"
            />

            <Button onPress={() => alert('Salvou!')}>
              Salvar
            </Button>
          </Form>
        </ModalBody>
      </Overlay>
    </Modal>
  );
}
