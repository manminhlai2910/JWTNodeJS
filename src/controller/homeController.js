import userService from '../service/userService'

const handleHelloWord = (req, res) => {
  return res.render('home.ejs')
}

const handleUserPage = (req, res) => {
  return res.render('user.ejs')
}
const handelCreateNewUser = (req, res) => {
  let email = req.body.email
  let password = req.body.password
  let username = req.body.username

  userService.createNewUser(email, password, username)

  return res.send('It Worked!')
}
module.exports = {
  handleHelloWord,
  handleUserPage,
  handelCreateNewUser,
}
