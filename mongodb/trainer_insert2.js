const insertTrainer = async () => {
    await connectToMongo();
  
    const trainerData = {
      name: 'Mona',
      location: 'New York',
      technology: 'JavaScript',
      phone_number: '1234567890'
    };
  
    try {
      const newTrainer = new TrainerModel(trainerData);
      await newTrainer.save();
      console.log("Trainer 'Mona' inserted successfully");
    } catch (error) {
      console.log("Error inserting trainer:", error);
    }
  };
  
  insertTrainer();
  