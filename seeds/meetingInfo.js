
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('meetings').del()
    .then(function () {
      // Inserts seed entries
      return knex('meetings').insert([
        {id: 1, meeting_name: 'EDA Staff', attendees: 6, cost: 12.0},
        {id: 2, meeting_name: 'EDA Students', attendees: 10, cost: 300.0},
        {id: 3, meeting_name: 'Kubo club', attendees: 20, cost: 1000.0},
        {id: 4, meeting_name: 'Tea with Harrison', attendees: 5, cost: 50.0},
        {id: 5, meeting_name: 'Ross talks coffee and code', attendees: 5, cost: 50.0},
        {id: 6, meeting_name: 'Joshua hour', attendees: 5, cost: 50.0}
      ]);
    });
};
