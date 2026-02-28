// Simulating 3 database servers
const shard1 = [];
const shard2 = [];
const shard3 = [];

function getShard(userId) {
  if (userId % 3 === 0) return shard1;
  if (userId % 3 === 1) return shard2;
  return shard3;
}

function saveUser(user) {
  const shard = getShard(user.id);
  shard.push(user);
}

saveUser({ id: 1, name: "Nawin" });
saveUser({ id: 2, name: "Arjun" });
saveUser({ id: 3, name: "Karthik" });

console.log("Shard1:", shard1);
console.log("Shard2:", shard2);
console.log("Shard3:", shard3);