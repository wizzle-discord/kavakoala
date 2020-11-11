export interface Product {
  id: number
  name: string
  price: number
}

export interface CcPaymentInfo {
  name: string
  expiresAt: string
  number: string
  ccv: string
}

export interface BtcPaymentInfo {
  address: string
}

export interface Country {
  code: string
  name: string
}

export interface CustomerAddress {
  firstName: string
  lastName: string
  email: string
  emailConfirm: string
  address1: string
  address2?: string
  city: string
  state: string
  postcode: string
  country: Country
}

export interface CartItem {
  product: Product
  qty: number
}
export type PaymentMethod = 'Bitcoin' | 'Credit Card'
export interface Cart {
  items: CartItem[]
  coupon: string
  paymentMethod: PaymentMethod
  paymentInfo: BtcPaymentInfo|CcPaymentInfo
  address: CustomerAddress
  totalCost: number
}