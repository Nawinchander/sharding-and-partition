// Simulating 2 database servers
const shardA = [];
const shardB = [];

function getShard(orderId) {
  return orderId % 2 === 0 ? shardA : shardB;
}

function saveOrder(order) {
  const shard = getShard(order.id);
  shard.push(order);
}

saveOrder({ id: 1, item: "Shoes" });
saveOrder({ id: 2, item: "Phone" });
saveOrder({ id: 3, item: "Watch" });

console.log("Shard A:", shardA);
console.log("Shard B:", shardB);