const faker = require('faker');
const fs = require('fs');

const generateUsers = () => {

  let records = 100;
  let users = [];


  for (var i = 0; i < records; i++) {
    
    let firstname = faker.name.firstName();
    let lastname = faker.name.lastName();
    let age = faker.random.number({min:18, max:50});

    users.push({
      "id": i,
      "firstname": firstname,
      "lastName": lastname,
      "age": age
    });

  }
  //console.log(users)
  return {"data": users};
};

let fakeUsers = generateUsers();


fs.writeFileSync('users.json', JSON.stringify(fakeUsers), null, '\n');