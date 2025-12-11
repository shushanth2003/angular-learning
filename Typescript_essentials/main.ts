
type OrderStatus = 'pending' | 'shipped' | 'delivered';

interface Order {
  id: number;
  status: OrderStatus;
}

const order: Order = { id: 101, status: 'delivered' };
console.log(order);