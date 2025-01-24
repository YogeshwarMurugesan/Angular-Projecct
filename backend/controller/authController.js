const Register = require("../schema/authSchema");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.register = async (req, res) => {
  console.log('Register works')
  try {
    const {
      firstName,
      surName,
      selectedMonth,
      selectedDate,
      selectedYear,
      emailOrNumber,
      password,
      gender,
    } = req.body;


    if (
      (!firstName,
        !surName,
        !selectedMonth,
        !selectedDate,
        !selectedYear,
        !emailOrNumber,
        !password,
        !gender)
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const findUser = await Register.findOne({ emailOrNumber })
    if (findUser) {
      return res.status(400).json({ message: "User is already exists" });
    }

    // passwordHassed

    const salt = await bcrypt.genSalt(10)
    const hassedPassword = await bcrypt.hash(password, salt)



    console.log(findUser)
    const newUser = new Register({
      firstName,
      surName,
      selectedMonth,
      selectedDate,
      selectedYear,
      emailOrNumber,
      password: hassedPassword,
      gender,
    });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully", user: newUser });
    console.log("User registered successfully", newUser);
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

exports.login = async (req, res) => {


  try {
    console.log('login Worked')
    const { emailOrNumber, password } = req.body;

    const findUser = await Register.findOne({ emailOrNumber });

    if (!findUser) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isPasswordCorrect = await bcrypt.compare(password, findUser.password);

    if (!isPasswordCorrect) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const SECRECTKRY_APP = 'gfe4etghyujguyghy'

    const token = jwt.sign({ userId: findUser._id }, SECRECTKRY_APP, {
      expiresIn: '1h'
    })


    res.status(200).json({ message: 'Login successfully ' , token})

  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Server error', error });
  }

}
