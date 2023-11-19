import { Order } from "../../types/Order";
import { OrdersBoard } from "../OrdersBoard";
import { Container } from "./styles";

const orders: Order[] = [
  {
		"_id": "655a951b9e604d55af62ab68",
		"table": "01",
		"status": "WAITING",
		"products": [
			{
				"product": {
					"name": "Camarão",
					"imagePath": "1700184778146-camarao-empanado.jpg",
					"price": 35,
				},
				"quantity": 1,
				"_id": "655a951b9e604d55af62ab69"
			},
			{
				"product": {
					"name": "Suco de Laranja",
					"imagePath": "1700189969057-suco-de-laranja.png",
					"price": 13,
				},
				"quantity": 2,
				"_id": "655a951b9e604d55af62ab6a"
			}
		],
	}
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon="🕒"
        title="Fila de espera"
        orders={orders}
      />

      <OrdersBoard
        icon="👨🏼‍🍳"
        title="Em preparação"
        orders={[]}
      />

      <OrdersBoard
        icon="✅"
        title="Pronto!"
        orders={[]}
      />
    </Container>
  )
}
