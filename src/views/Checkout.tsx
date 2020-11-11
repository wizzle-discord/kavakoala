import React from 'react';
import Container from 'react-bootstrap/Container';
import { TopNav, Footer } from 'components/Layout';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Cart, CcPaymentInfo, CustomerAddress } from 'interfaces';
import CheckoutContainer from 'components/Checkout/Checkout';

interface CheckoutProps extends RouteComponentProps<any> {
  history: any
}

interface CheckoutState {
  cart: Cart
}

const defaultCart: Cart = {
  items: [{ qty: 40, product: { id: 1, name: 'Kava ', price: 1 }}],
  coupon: '',
  paymentMethod: 'Credit Card',
  paymentInfo: { number: '', name: '', ccv: '', expiresAt: '' } as CcPaymentInfo,
  address: { firstName: '', lastName: '' } as CustomerAddress,
  totalCost: 40
};

class Checkout extends React.Component<CheckoutProps, CheckoutState> {
  constructor(props: CheckoutProps) {
    super(props);
    this.state = {
      cart: {...defaultCart}
    }
  }

  onChange = (data: Partial<Cart>) => {
    const cart = { 
      ...this.state.cart,
      ...data,
    };
    // Recalculate total if changed
    if (data.items) {
      let qty = 0;
      for (const item of cart.items) {
        qty += item.qty * item.product.price
      }
      cart.totalCost = qty;
    }
    this.setState({ cart });
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
