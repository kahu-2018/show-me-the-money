var hash = require('../auth/hash')

function createUser (user_name, first_name, last_name, password, hourly_wage, db) {
  return new Promise ((resolve, reject) => {
    hash.generate(password, (err, hash) => {
      if (err) reject(err)
      db('users')
        .insert({user_name, first_name, last_name, hourly_wage, hash})
        .then(user_id => resolve(user_id))
        .catch(err => reject(err))
    })
  })
}

function userExists (user_name, db) {
  return db('users')
    .where('user_name', user_name)
    .first()
}

function getUserByName (user_name, db) {
  return db('users')
    .where('user_name', user_name)
    .first()
}

function getUsers(db) {
  return db('users').select()
}


module.exports = {
  createUser,
  userExists,
  getUserByName,
  getUsers
}
