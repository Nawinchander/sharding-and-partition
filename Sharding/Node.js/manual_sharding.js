const shards = [
  { name: "shard1", connection: db1 },
  { name: "shard2", connection: db2 },
  { name: "shard3", connection: db3 }
];

function getShard(userId) {
  const shardIndex = userId % shards.length;
  return shards[shardIndex];
}

async function getUser(userId) {
  const shard = getShard(userId);
  return shard.connection.query("SELECT * FROM users WHERE id = ?", [userId]);
}


// /// sharding stragties

// ///ranging
// if (userId < 100000) shard1
// else shard2

// //// hash based 

// userId % totalShards


// ///// geo based

// if (country === "US") use US shard
// else use EU shard


