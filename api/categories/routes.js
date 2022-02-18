const express = require("express");

const {
  getCategories,
  categoryDelete,
  categoryUpdate,
  fetchCategory,
  categoryCreate,
  recipeCreate,
} = require("./controllers");
const upload = require("../../middleware/multer");

const router = express.Router();

router.param("categoryId", async (req, res, next, categoryId) => {
  req.category = await fetchCategory(categoryId, next);
  next();
});

router.get("/", getCategories);
router.post("/", upload.single("image"), categoryCreate);
router.delete("/:categoryId", categoryDelete);
router.put("/:categoryId", upload.single("image"), categoryUpdate);
router.post("/:categoryId/recipe", upload.single("image"), recipeCreate);

module.exports = router;
