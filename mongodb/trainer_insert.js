const mongoose = require("mongoose");

const mongo_url = "mongodb://127.0.0.1:27017/nie_trainer_node_db?directConnection=true&serverSelectionTimeoutMS=2000";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongo_url);
    console.log("Connected to database");
  } catch (error) {
    console.log("Cannot connect to database", error);
    process.exit();
  }
};

const TrainerModel = (() => {
  const collection_name = 'trainer';
  const collection_fields = {
    name: String,
    location: String,
    technology: String,
    phone_number: String
  };
  const collection_config = {
    timestamps: false
  };

  const schema = mongoose.Schema(collection_fields, collection_config);
  const Model = mongoose.model(collection_name, schema);
  return Model;
})();

const createTrainer = async (trainerData) => {
  await connectToMongo();  // Ensure the connection is awaited

  try {
    const trainerModel = new TrainerModel(trainerData);
    const createdDocument = await trainerModel.save();
    console.log("Trainer inserted:", createdDocument);
  } catch (error) {
    console.log("Error creating trainer:", error);
  }
};

// Insert "swamy"
createTrainer({
  _id: new mongoose.Types.ObjectId(),
  name: 'swamy',
  location: 'hyderabad',
  technology: 'MERN',
  phone_number: '666777555'
});

// Insert "Mona"
createTrainer({
  _id: new mongoose.Types.ObjectId(),
  name: 'Mona',
  location: 'New York',
  technology: 'JavaScript',
  phone_number: '8887771122'
});
