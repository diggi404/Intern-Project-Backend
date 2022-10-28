const { users } = require("../DbModels");
const { validateSchema } = require("../validations/reqValidation");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { loginSchema } = require("../validations/reqValidationSchemas");
const crypto = require("crypto");

const loginController = async (req, res) => {
  // first validate the request body of the login route to prevent db query errors.
  if (validateSchema(loginSchema, req, res)) {
    const new_salt = crypto.randomBytes(32).toString("hex");
    const checkEmail = await users.findOne({ email: req.body.email });
    if (checkEmail) {
      const checkPass = await bcrypt.compare(
        req.body.password,
        checkEmail.password
      );
      if (checkPass) {
        const token = jwt.sign(
          {
            id: checkEmail._id,
            email: checkEmail.email,
          },
          `${process.env.SECRET_KEY}${new_salt}`,
          { expiresIn: "1y" }
        );
        await users.findByIdAndUpdate(
          { _id: checkEmail._id },
          { jwt_salt: new_salt, updatedAt: Date.now() }
        );
        res.status(200).send({
          access_token: token,
        });
      } else {
        res.status(400).send({
          message: "Invalid Password!",
        });
      }
    } else {
      res.status(400).send({
        message: "Invalid Email address!",
      });
    }
  }
};

module.exports = { loginController };
