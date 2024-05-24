import mysql from 'mysql2'
import bcrypt from 'bcryptjs'

const salt = bcrypt.genSaltSync(10)

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'jwt',
})

const hashUserPassword = (userPassword) => {
  let hashPassword = bcrypt.hashSync(userPassword, salt)
  return hashPassword
}

const createNewUser = (email, password, username) => {
  let hashPass = hashUserPassword(password)

  connection.query(
    'INSERT INTO users (email, password, username) VALUES (?,?,?)',
    [email, hashPass, username],
    function (err, results, fields) {
      if (err) {
        console.log(err)
      }
    }
  )
}

const getUserList = () => {
  connection.query('SELECT * FROM users', function (err, results, fields) {
    if (err) {
      console.log(err)
    }
  })
}

module.exports = {
  createNewUser,
  getUserList,
}
