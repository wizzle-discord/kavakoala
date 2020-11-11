export interface Product {
  id: number
  name: string
}

export interface CcPaymentInfo {
  name: string
  number: number
  ccv: number
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

export type PaymentMethod = 'Bitcoin' | 'Credit Card'
export interface Cart {
  items: {
    product: Product
    qty: number
  }[]
  coupon: string
  paymentMethod: PaymentMethod
  paymentInfo: BtcPaymentInfo|CcPaymentInfo
  address: CustomerAddress
}