const { users } = require("../DbModels");
const crypto = require("crypto");

const logout = async (req, res) => {
  const new_salt = crypto.randomBytes(32).toString("hex");

  //update the jwt_salt in the user's collection then log out.
  const updateJwtSalt = await users.findByIdAndUpdate(
    { _id: req.decodedToken.id },
    { jwt_salt: new_salt, updatedAt: Date.now() }
  );
  if (updateJwtSalt) {
    res.status(200).send({
      message: "You have been logged out",
    });
  } else {
    res.status(400).send({
      message: "Log out failed!",
    });
  }
};

module.exports = { logout };
