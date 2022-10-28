const jwt = require("jsonwebtoken");
const { users } = require("../DbModels");

async function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];

  //Check if Authorization Header is present in the request.
  if (typeof authHeader != "undefined") {
    const temp_token = authHeader.split(" ")[1];
    const decoded_jwt = jwt.decode(temp_token);
    const user_id = decoded_jwt["id"];
    const findJwtSalt = await users.findById({ _id: user_id });
    if (findJwtSalt) {
      const new_salt = findJwtSalt.jwt_salt;

      //verify the provided jwt token in the Authorization Header
      jwt.verify(
        temp_token,
        `${process.env.SECRET_KEY}${new_salt}`,
        (err, grant_token) => {
          if (err) {
            res.status(404).send({
              message: "user authentication failed",
            });
          } else {
            req.decodedToken = grant_token;
            next();
          }
        }
      );
    } else {
      res.status(404).send({
        message: "user authentication failed",
      });
    }
  } else {
    res.status(404).send({
      message: "authorization header is required",
    });
  }
}

module.exports = { verifyToken };
