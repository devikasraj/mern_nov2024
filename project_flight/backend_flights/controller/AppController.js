class AppController {
    serverInit = () => {
        console.log(`Server is running on port ${server_port}`);
    }

    serverRootAction = (request, response) => {
        const rbody = { message: `Welcome to the Flight Booking System` };
        response.send(rbody);
    }

    connectToMongo = async () => {
        mongoose.Promise = global.Promise;
        try {
            await mongoose.connect(mongo_url, { useNewUrlParser: true, useUnifiedTopology: true });
            console.log("Connected to the database");
        } catch (error) {
            console.log("Cannot connect to database", error);
            process.exit();
        }
    }
}

module.exports = AppController;
