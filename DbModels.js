const mongoose = require("mongoose");

//MongoDB connection configuration.
async function connectDb() {
  await mongoose
    .connect(process.env.DATABASE_URI)
    .then(() => console.log("Database connected successfully!"))
    .catch((error) => console.log(error));
}

// A Schema for players collection.
const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
});

// A Schema for the application users.
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  jwt_salt: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
});

// create the actual model collections from the Schema defined above.
const users = mongoose.model("users", userSchema);
const players = mongoose.model("players", playerSchema);

module.exports = { connectDb, users, players };
