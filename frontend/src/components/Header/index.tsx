import logo from '../../assets/images/logo.svg'

import { Container } from './styles'

export function Header() {
  return (
    <Container>
      <div className="page-details">
        <h1>Pedidos</h1>
        <h2>Acompanhe os pedidos dos clientes</h2>

        <img src={logo} alt='WAITERAPP' />
      </div>
    </Container>
  )
}
