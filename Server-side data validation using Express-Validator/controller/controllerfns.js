const userRegistration = async (req, res) => {
    const { name, email, password, dob } = req.body;
    const newUser = { name, email, password, dob };

    try {
      res.status(201).send(newUser);
    } catch (error) {
      res.status(400).json({ message: 'Error is occured !' });
    }
  }

  const userLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
      if (email === 'pranto318@gmail.com' && password === '123456') {
        return res.status(200).send('user is logged in');
      } else {
        return res.status(404).send('email/password is invalid');
      }
    } catch (error) {
      res.status(400).json({ message: 'Error is occured !' });
    }
  }

  module.exports = {userRegistration, userLogin}