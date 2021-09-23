
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { 
          username: 'user1',
          phoneNumber: "555-555-5555",
          password: "123456"
      
        },
      ]);
    });
};
