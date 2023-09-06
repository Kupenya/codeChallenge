const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fs = require("fs");
require("dotenv").config();
const User = require("./models/User");

const app = express();
const port = process.env.PORT || 4000;
const mongoURI = process.env.MONGO_URI;

//Middleware
app.use(cors());
app.use(express.json());

//MongoDB connection
const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

//Import route files
const userRoutes = require("./routes/userRoutes");
const suggestionsRoutes = require("./routes/suggestionsRoutes");

//Use the route files
app.use("/api/users", userRoutes);
app.use(suggestionsRoutes);

//Connect to MongoDB using the MONGO_URI variable
mongoose
  .connect(mongoURI, dbOptions)
  .then(async () => {
    console.log("Connected to MongoDB");

    //Read JSON file
    const datasetPath = "./users-data.json"; 
    const dataset = JSON.parse(fs.readFileSync(datasetPath, "utf8"));

    // Insert the dataset into the User collection
    await User.insertMany(dataset);

    console.log("Data imported successfully");

    //Start server
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the application if MongoDB connection fails
  });
