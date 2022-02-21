const express = require("express");
const cors = require("cors");
const connectDb = require("./database");
const Categories = require("./api/categories/routes");
const Recipes = require("./api/recipes/routes");
const Ingrediants = require("./api/ingrediants/routes");
const favoritesRouter = require("./api/favorites/routes");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const path = require("path");

dotenv.config();
const app = express();
connectDb();

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(
    `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`
  );
  next();
});

// Routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/media", express.static(path.join(__dirname, "media")));

app.use("/api/categories", Categories);
app.use("/api/recipes", Recipes);
app.use("/api/ingrediants", Ingrediants);
app.use("/api/favorites", favoritesRouter);

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
});
app.listen(process.env.PORT);
