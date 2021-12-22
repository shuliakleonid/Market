export interface PeriodicElement {
  name: string;
  position: number;
  price: number;
  quantity: string;
}

export const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Pizza', price: 1.0079, quantity:' 2' },
  { position: 2, name: 'Pizza', price: 4.0026, quantity: '20' },
  { position: 3, name: 'Pizza', price: 6.941, quantity: '3' },
  { position: 4, name: 'Pizza', price: 9.0122, quantity: '1' },
  { position: 5, name: 'Pizza', price: 10.811, quantity: '3' },
  { position: 6, name: 'Pizza', price: 12.0107, quantity: '4' },
  { position: 7, name: 'Pizza', price: 14.0067, quantity: '5' },
  { position: 8, name: 'Pizza', price: 15.9994, quantity: '8' },
  { position: 9, name: 'Pizza', price: 18.9984, quantity: '1' },
  { position: 10, name: 'Pizza', price: 20.1797, quantity: '1' },
];
