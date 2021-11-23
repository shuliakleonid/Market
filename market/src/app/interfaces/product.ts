export interface Product {
  id: number;
  description: string;
  image: string;
  price: number;
  quantity: string;
  title: string;
  quantityCart: number;
}
export interface Order {
  products:Product[];
  totalPrice:number;
  user:{
    city:string;
    country:string;
    email:string;
    firstName:string;
    LastName:string;
    phone:string;
    street:string;
    postCode:number;
  }
}
