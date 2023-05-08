const userRegistration = (req, res) => {
    const { name, email, password,confirmPassword,age,dob,languages } = req.body;
    const newUser = { name, email, password, confirmPassword, age, dob, languages };

    try {
      res.status(201).send(newUser);
    } catch (error) {
      res.status(400).json({ message: 'Error is occured !' });
    }
}


const userLogin = (req, res) => {
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

module.exports = {userLogin,userRegistration};