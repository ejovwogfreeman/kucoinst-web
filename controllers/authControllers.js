const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const accessToken = require("../middlewares/accessTokenMiddleware");

/////////////////////////////
////////REGISTER USER////////
/////////////////////////////

const registerUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    if (!username || !password) {
      res.status(400).json({ message: "please fill all fields" });
    } else {
      const userExists = await User.findOne({ username });
      if (userExists) {
        res.status(400).send({ message: "User already exists" });
      } else {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new User({
          username,
          password: hashedPassword,
        });

        await user.save();

        if (user) {
          const { password, ...others } = user._doc;
          res.status(200).json({
            ...others,
            token: accessToken(user),
          });
        } else {
          res.status(200).json({ message: "An error occured" });
        }
      }
    }
  } catch (err) {
    res.status(400).json(err);
  }
};

/////////////////////////////
/////////LOGIN USER//////////
/////////////////////////////

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    if (!username || !password) {
      res.status(400).json({ message: "please fill all fields" });
    } else {
      const user = await User.findOne({ username });
      if (user) {
        const hashedPassword = user.password;
        const comparedPassword = await bcrypt.compare(password, hashedPassword);
        if (comparedPassword === true) {
          const { password, ...others } = user._doc;

          res.status(200).json({
            ...others,
            token: accessToken(user),
          });
        } else {
          res.status(400).json({ message: "passwords do not match" });
        }
      } else {
        res.status(400).json({ message: "User not found" });
      }
    }
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  registerUser,
  loginUser,
};
