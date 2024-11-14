class AppRoutes {
    flights = (flightController) => {
        app.post("/flights", flightController.create);
        app.get("/flights", flightController.readAll);
        app.get("/flights/:id", flightController.readById);
        app.put("/flights/:id", flightController.update);
        app.delete("/flights/:id", flightController.remove);
    }

    root = (appController) => {
        app.get("/", appController.serverRootAction);
    }
}

module.exports = AppRoutes;
