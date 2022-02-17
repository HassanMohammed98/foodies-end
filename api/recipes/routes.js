const express = require("express");

const {
  fetchRecipe,
  getRecipe,
  recipeDelete,
  recipeUpdate,
} = require("./controllers");
const upload = require("../../middleware/multer");

const router = express.Router();

router.param("recipeId", async (req, res, next, recipeId) => {
  const recipe = await fetchRecipe(recipeId, next);
  if (recipe) {
    req.recipe = recipe;
    next();
  } else {
    const err = new Error("Recipe Not Found");
    err.status = 404;
    next(err);
  }
});

router.get("/", getRecipe);
router.delete("/:recipeId", recipeDelete);
router.put("/:recipeId", upload.single("image"), recipeUpdate);

module.exports = router;
