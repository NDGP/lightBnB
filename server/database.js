const properties = require('./json/properties.json');
const users = require('./json/users.json');
const { Pool } = require('pg')
const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'lightbnb'
})

pool.connect(() => {
  console.log("consected to postgress")
})
/// Users

/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithEmail = function(email) {
  return pool.query(`
  select *
  from users
  where email = $1`, [email])
  .then(res => {return res.rows[0] })
  .catch(e => {return null});
}
exports.getUserWithEmail = getUserWithEmail;

/**
 * Get a single user from the database given their id.
 * @param {string} id The id of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithId = function(id) {
  return pool.query(`
  select *
  from users
  where id = $1`, [id])
  .then(res => {return res.rows[0] })
  .catch(e => {return null});
}
exports.getUserWithId = getUserWithId;


/**
 * Add a new user to the database.
 * @param {{name: string, password: string, email: string}} user
 * @return {Promise<{}>} A promise to the user.
 */
const addUser =  function(user) {
  let name = user.name
  let email = user.email
  let password = user.password
  let queryParams = [name, email, password]
  return pool.query(`
  INSERT INTO users (name, email, password)
  values($1, $2, $3)
  RETURNING *`, queryParams)
  .then(res => {return res.rows[0] })
  .catch(e => {return null});

}
exports.addUser = addUser;

/// Reservations

/**
 * Get all reservations for a single user.
 * @param {string} guest_id The id of the user.
 * @return {Promise<[{}]>} A promise to the reservations.
 */
const getAllReservations = function(guest_id, limit = 10) {
  return getAllProperties(null, 2);
}
exports.getAllReservations = getAllReservations;

/// Properties

/**
 * Get all properties.
 * @param {{}} options An object containing query options.
 * @param {*} limit The number of results to return.
 * @return {Promise<[{}]>}  A promise to the properties.
 */
const getAllProperties = function(options, limit = 10) {
  return pool.query(`
  SELECT properties.*, avg(rating) as average_rating
  FROM properties
  JOIN property_reviews ON properties.id = property_reviews.property_id 
  GROUP BY properties.id
  LIMIT $1;
  `, [limit])
  .then(res => {return res.rows});
}

exports.getAllProperties = getAllProperties;


/**
 * Add a property to the database
 * @param {{}} property An object containing all of the property details.
 * @return {Promise<{}>} A promise to the property.
 */
const addProperty = function(property) {
  const propertyId = Object.keys(properties).length + 1;
  property.id = propertyId;
  properties[propertyId] = property;
  return Promise.resolve(property);
}
exports.addProperty = addProperty;
