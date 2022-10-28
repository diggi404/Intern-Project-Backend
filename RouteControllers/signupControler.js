const { users } = require("../DbModels");
const { validateSchema } = require("../validations/reqValidation");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { signupSchema } = require("../validations/reqValidationSchemas");
const crypto = require("crypto");

const signupController = async (req, res) => {
  // first validate the request body of the signup route to prevent db query errors.
  const new_salt = crypto.randomBytes(32).toString("hex");
  if (validateSchema(signupSchema, req, res)) {
    const findusers = await users.findOne({ email: req.body.email });
    if (findusers) {
      res.status(400).send({
        message: "users already exist!",
      });
    } else {
      const registerusers = await users.create({
        ...req.body,
        password: await bcrypt.hash(req.body.password, 10),
        jwt_salt: new_salt,
      });
      if (registerusers) {
        console.log(new_salt);
        const token = jwt.sign(
          {
            id: registerusers._id,
            email: registerusers.email,
          },
          `${process.env.SECRET_KEY}${new_salt}`,
          { expiresIn: "1d" }
        );
        res.status(200).send({
          access_token: token,
        });
      } else {
        res.status(400).send({
          message: "users registration failed!",
        });
      }
    }
  }
};

module.exports = { signupController };
