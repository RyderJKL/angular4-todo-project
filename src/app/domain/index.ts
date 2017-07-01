/**
 * Created by root on 17-6-30.
 */

export interface User {
  id?: string,
  email: string,
  password: string,
  repeat: string,
  address: Address
}

export interface Address {
  province: string, // 省份
  city: string, // 城市
  area: string, // 区县
  street: string // 详细地址
}


