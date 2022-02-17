const express = require("express");

const {
  getCategories,
  categoryDelete,
  categoryUpdate,
  fetchCategory,
  categoryCreate,
} = require("./controllers");
const upload = require("../../middleware/multer");

const router = express.Router();

router.param("categoryId", async (req, res, next, categoryId) => {
  const category = await fetchCategory(categoryId, next);
  if (category) {
    req.category = category;
    next();
  } else {
    const err = new Error("Category Not Found");
    err.status = 404;
    next(err);
  }
});

router.get("/", getCategories);
router.post("/", categoryCreate);
router.delete("/:categoryId", categoryDelete);
router.put("/:categoryId", upload.single("image"), categoryUpdate);

module.exports = router;
