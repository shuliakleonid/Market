export interface PeriodicElement {
  name: string;
  position: number;
  price: number;
  quantity: string;
}

export const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', price: 1.0079, quantity: 'H' },
  { position: 2, name: 'Helium', price: 4.0026, quantity: 'He' },
  { position: 3, name: 'Lithium', price: 6.941, quantity: 'Li' },
  { position: 4, name: 'Beryllium', price: 9.0122, quantity: 'Be' },
  { position: 5, name: 'Boron', price: 10.811, quantity: 'B' },
  { position: 6, name: 'Carbon', price: 12.0107, quantity: 'C' },
  { position: 7, name: 'Nitrogen', price: 14.0067, quantity: 'N' },
  { position: 8, name: 'Oxygen', price: 15.9994, quantity: 'O' },
  { position: 9, name: 'Fluorine', price: 18.9984, quantity: 'F' },
  { position: 10, name: 'Neon', price: 20.1797, quantity: 'Ne' },
];
