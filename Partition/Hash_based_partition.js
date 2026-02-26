function getPartition(userId) {
  const totalPartitions = 4;
  const hash = userId % totalPartitions;
  return `users_part_${hash}`;
}

console.log(getPartition(25)); // users_part_1