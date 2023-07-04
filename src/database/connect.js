const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@coursenodejs.lpbxgim.mongodb.net/database?retryWrites=true&w=majority)`,
    (error) => {
      if (error) {
        return console.log("Error connecting to database", error);
      }
      console.log("Connecting to database successfully");
    }
  );
};

module.exports = connectToDatabase;
