type Product = {
  id : number;
  name : string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: "Laptop", price: 10000 },
  { id: 2, name: "Mobil", price: 5000 },
  { id: 3, name: "Hörlurar", price: 2000 },
];

const CartPrice = () => {
  const totalPrice = products.reduce((sum, products) => sum + products.price, 0);
  return <h3>Totalt pris: {totalPrice} kr</h3>
};

export default CartPrice;