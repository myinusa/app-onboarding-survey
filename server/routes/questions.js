const userRoutes = (app, fs) => {
  const dataPath = "./server/data/questions.json";

  app.get("/questions", (req, res) => {
    fs.readFile(dataPath, "utf8", (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });
};

module.exports = userRoutes;
