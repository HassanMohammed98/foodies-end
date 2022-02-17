const express = require("express");

const {
  getIngredient,
  ingredientDelete,
  ingredientUpdate,
  fetchIngredient,
  ingredientCreate,
} = require("./controllers");
const upload = require("../../middleware/multer");

const router = express.Router();

router.param("ingredientId", async (req, res, next, ingredientId) => {
  const ingredient = await fetchIngredient(ingredientId, next);
  if (ingredient) {
    req.ingredient = ingredient;
    next();
  } else {
    const err = new Error("Ingredient Not Found");
    err.status = 404;
    next(err);
  }
});

router.get("/", getIngredient);
router.post("/", ingredientCreate);
router.delete("/:ingredientId", ingredientDelete);
router.put("/:ingredientId", upload.single("image"), ingredientUpdate);

module.exports = router;
