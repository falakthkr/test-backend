const User = require("../models/users/login")
const { loginValidation } = require("../validation");
// const bcrypt = require("bcryptjs");

const authenticateUserLogin = async(req, res, next) => {
    const { error } = loginValidation(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const user = await User.findOne({ username: req.body.username });
    if (!user) {
        return res.status(400).send("Login credentials not found, check username and password again.");
    }

    var validPass = false;
    if (req.body.password === user.password) {
        validPass = true;
    }
    if (!validPass) return res.status(400).send("Invalid password");

    res.status(200).send("Login successful");
}

module.exports = { authenticateUserLogin }