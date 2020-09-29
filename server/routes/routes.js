const userRoutes = require("./questions");

const appRouter = (app, fs) => {
  app.get("/", (req, res) => {
    res.send("Please visit /questions");
  });

  userRoutes(app, fs);
};

module.exports = appRouter;
