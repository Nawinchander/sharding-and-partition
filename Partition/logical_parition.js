// Single database simulation
const database = {
  partition1: [],
  partition2: []
};

function saveUser(user) {
  const firstLetter = user.name[0].toLowerCase();

  if (firstLetter < 'n') {
    database.partition1.push(user);
  } else {
    database.partition2.push(user);
  }
}

saveUser({ id: 1, name: "Nawin" });
saveUser({ id: 2, name: "Arjun" });

console.log(database);