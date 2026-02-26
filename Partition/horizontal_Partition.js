function getPartition(userId) {
  if (userId < 100000) {
    return "users_part_1";
  } else if (userId < 200000) {
    return "users_part_2";
  } else {
    return "users_part_3";
  }
}

// Usage
const table = getPartition(145678);
console.log(`SELECT * FROM ${table} WHERE id = 145678`);