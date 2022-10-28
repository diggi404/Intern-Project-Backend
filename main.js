const epxress = require("express");
const app = epxress();
require("dotenv").config();
app.use(epxress.json());
const router = require("./routes");
const { connectDb } = require("./DbModels");

//connect to the MongoDb database.
connectDb();

//api route for users.
app.use("/api/users", router);

app.listen(process.env.PORT);
