class FlightController {
    // Create a new flight
    create = async (request, response) => {
        const form = { ...request.body };
        let rbody = {};
        let rstatus = 200;

        try {
            const flightModel = new FlightModel({
                _id: new mongoose.Types.ObjectId(),
                airline: form.airline,
                source: form.source,
                destination: form.destination,
                fare: form.fare,
                duration: form.duration
            });

            const flightModelRes = await flightModel.save();
            const flightDoc = await FlightModel.findOne({ _id: flightModel._id }).lean();
            rbody = { data: flightDoc, isError: false };
            console.log("create", rbody);
        } catch (error) {
            rbody = { data: { message: `Error in creating flight.\n${error}` }, isError: true };
            console.log("create", rbody);
            rstatus = 500;
        }

        response.status(rstatus).send(rbody);
    }

    // Update an existing flight
    update = async (request, response) => {
        const id = request.params.id;
        const form = { ...request.body };
        let rbody = {};
        let rstatus = 200;

        try {
            const updatableFlight = {
                airline: form.airline,
                source: form.source,
                destination: form.destination,
                fare: form.fare,
                duration: form.duration
            };

            const flightModelRes = await FlightModel.findOneAndUpdate({ _id: id }, updatableFlight, { new: true });
            const updatedFlight = await FlightModel.findOne({ _id: id });

            if (!updatedFlight) {
                rbody = { data: { message: "Flight not found" }, isError: true };
                console.log(rbody);
                rstatus = 404;
            } else {
                rbody = { data: updatedFlight, isError: false };
                console.log(rbody);
            }
        } catch (error) {
            rbody = { data: { message: `Error in updating flight.\n${error}` }, isError: true };
            console.log(rbody);
            rstatus = 500;
        }

        response.status(rstatus).send(rbody);
    }

    // Delete a flight
    remove = async (request, response) => {
        const id = request.params.id;
        let rbody = {};
        let rstatus = 200;

        try {
            const flightModelRes = await FlightModel.findOneAndDelete({ _id: id });

            if (!flightModelRes) {
                rbody = { data: { message: "Flight not found" }, isError: true };
                console.log(rbody);
                rstatus = 404;
            } else {
                rbody = { data: { message: "Flight deleted successfully" }, isError: false };
                console.log(rbody);
            }
        } catch (error) {
            rbody = { data: { message: `Error in deleting flight.\n${error}` }, isError: true };
            console.log(rbody);
            rstatus = 500;
        }

        response.status(rstatus).send(rbody);
    }

    // Read all flights
    readAll = async (request, response) => {
        let rbody = {};
        let rstatus = 200;

        try {
            const flightDocs = await FlightModel.find().lean();
            rbody = { data: flightDocs, isError: false };
            console.log(rbody);
        } catch (error) {
            rbody = { data: { message: `Error in reading all flights.\n${error}` }, isError: true };
            console.log(rbody);
            rstatus = 500;
        }

        response.status(rstatus).send(rbody);
    }

    // Read a flight by ID
    readById = async (request, response) => {
        const id = request.params.id;
        let rbody = {};
        let rstatus = 200;

        try {
            const flightDoc = await FlightModel.findOne({ _id: id }).lean();

            if (!flightDoc) {
                rbody = { data: { message: "Flight not found" }, isError: true };
                console.log(rbody);
                rstatus = 404;
            } else {
                rbody = { data: flightDoc, isError: false };
                console.log(rbody);
            }
        } catch (error) {
            rbody = { data: { message: `Error in reading flight.\n${error}` }, isError: true };
            console.log(rbody);
            rstatus = 500;
        }

        response.status(rstatus).send(rbody);
    }
}

module.exports = FlightController;
