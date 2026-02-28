// One database
const database = {
  orders_2024: [],
  orders_2025: []
};

function saveOrder(order) {
  if (order.year === 2024) {
    database.orders_2024.push(order);
  } else if (order.year === 2025) {
    database.orders_2025.push(order);
  }
}

saveOrder({ id: 1, item: "Shoes", year: 2024 });
saveOrder({ id: 2, item: "Phone", year: 2025 });

console.log(database);