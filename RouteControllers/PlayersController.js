const { players } = require("../DbModels");
const { validateSchema } = require("../validations/reqValidation");
const {
  addNewPlayerSchema,
  editPlayerSchema,
} = require("../validations/reqValidationSchemas");

const addNewPlayer = async (req, res) => {
  // first validate the body received for this request to prevent db query errors.
  if (validateSchema(addNewPlayerSchema, req, res)) {
    // check if player is already uploaded by a particular user
    const findUserPlayers = await players.find({
      $and: [{ name: req.body.name }, { user_id: req.decodedToken.id }],
    });
    if (findUserPlayers.length != 0) {
      res.status(400).send({
        message: "You have already uploaded this player!",
      });
    } else {
      uploadPlayer = await players.create({
        ...req.body,
        user_id: req.decodedToken.id,
      });
      if (uploadPlayer) {
        res.status(200).send({
          message: "Player has been uploaded successfully.",
        });
      } else {
        res.status(400).send({
          message: "Player upload failed!",
        });
      }
    }
  }
};

const getAllPlayers = async (req, res) => {
  res.status(200).send(await players.find({ user_id: req.decodedToken.id }));
};

const editPlayer = async (req, res) => {
  // first validate the body received for this request to prevent db query errors.
  if (validateSchema(editPlayerSchema, req, res)) {
    const editplayerById = await players.findByIdAndUpdate(
      { _id: req.params.id },
      { ...req.body, updatedAt: Date.now() }
    );
    if (editplayerById) {
      res.status(200).send({
        message: "Player has been successfully updated.",
      });
    } else {
      res.status(400).send({
        message: "Player update failed!",
      });
    }
  }
};

const deletePlayer = async (req, res) => {
  const delPlayerById = await players.findByIdAndDelete({ _id: req.params.id });
  if (delPlayerById) {
    res.status(200).send({
      message: "Player has been successfully deleted!",
    });
  } else {
    res.status(400).send({
      message: "Player delete failed!",
    });
  }
};

module.exports = { addNewPlayer, getAllPlayers, editPlayer, deletePlayer };
