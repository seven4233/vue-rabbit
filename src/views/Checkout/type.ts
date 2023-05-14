export interface Checkout {
  userAddresses: any[]
  goods: any[]
  summary: any
}
export interface Address {
  id: string
  receiver: string
  contact: string
  provinceCode: string
  cityCode: string
  countyCode: string
  address: string
  isDefault: number
  fullLocation: string
}
