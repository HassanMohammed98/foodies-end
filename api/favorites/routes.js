const express = require("express");

const {
  getCatgFavorites,
  getRecFavorites,
  getIngFavorites,
  categoryFavoriteAdd,
  categoryFavoriteRemove,
  recipeFavoriteAdd,
  recipeFavoriteRemove,
  ingredientFavoriteAdd,
  ingredientFavoriteRemove,
} = require("./controllers");
// const upload = require("../../middleware/multer");

const favoritesRouter = express.Router();

favoritesRouter.get("/category", getCatgFavorites);
favoritesRouter.post("/category", categoryFavoriteAdd);
favoritesRouter.delete("/category/:categoryId", categoryFavoriteRemove);
favoritesRouter.get("/recipe", getRecFavorites);
favoritesRouter.post("/recipe/:recipeId", recipeFavoriteAdd);
favoritesRouter.delete("/recipe/:recipeId", recipeFavoriteRemove);
favoritesRouter.get("/ingredient", getIngFavorites);
favoritesRouter.post("/ingredient/:ingredientId", ingredientFavoriteAdd);
favoritesRouter.delete("/ingredient/:ingredientId", ingredientFavoriteRemove);
// router.put("/:categoryId", upload.single("image"), categoryUpdate);
// router.post("/:categoryId/recipe", upload.single("image"), recipeCreate);

module.exports = favoritesRouter;
