import React from 'react';
import Container from 'react-bootstrap/Container';
import { TopNav, Footer } from 'components/Layout';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { BtcPaymentInfo, Cart, CustomerAddress } from 'interfaces';
import CheckoutContainer from 'components/Checkout/Checkout';

interface CheckoutProps extends RouteComponentProps<any> {
  history: any
}

interface CheckoutState {
  cart: Cart
}

const defaultCart: Cart = {
  items: [{ qty: 40, product: { id: 1, name: 'Kava ' }}],
  coupon: '',
  paymentMethod: 'Bitcoin',
  paymentInfo: {} as BtcPaymentInfo,
  address: { firstName: '', lastName: '' } as CustomerAddress
};

class Checkout extends React.Component<CheckoutProps, CheckoutState> {
  constructor(props: CheckoutProps) {
    super(props);
    this.state = {
      cart: {...defaultCart}
    }
  }

  onChange = (data: Partial<Cart>) => {
    this.setState(prevState => ({
      cart: {
        ...prevState.cart,
        ...data
      }
    }));
  }

  render () {
    return (
      <Container fluid className="App">
        <TopNav />
          <CheckoutContainer cart={this.state.cart} onChange={this.onChange} />
        <Footer />
      </Container>
    );
  }
}

export default withRouter(Checkout);
