const Category = require("../../models/Category");
const Recipe = require("../../models/Recipe");

exports.fetchCategory = async (categoryId, next) => {
  try {
    const category = await Category.findById(categoryId);
    if (category) {
      return category;
    } else {
      const error = new Error("Category not found");
      error.status = 404;
      next(error);
    }
  } catch (error) {
    next(error);
  }
};

exports.categoryCreate = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `/${req.file.path}`;
      req.body.image = req.body.image.replace("\\", "/");
    }
    const newCategory = await Category.create(req.body);
    return res.status(201).json(newCategory);
  } catch (error) {
    next(error);
  }
};

exports.getCategories = async (req, res, next) => {
  try {
    const category = await Category.find().populate("recipes");
    return res.json(category);
  } catch (error) {
    next(error);
  }
};

exports.categoryDelete = async (req, res, next) => {
  try {
    await req.category.remove();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.categoryUpdate = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `/${req.file.path}`;
      req.body.image = req.body.image.replace("\\", "/");
    }
    const category = await Category.findByIdAndUpdate(
      { _id: req.category._id },
      req.body,
      { new: true, runValidators: true } // returns the updated product
    );
    res.json(category);
  } catch (error) {
    next(error);
  }
};

exports.recipeCreate = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `/${req.file.path}`;
      req.body.image = req.body.image.replace("\\", "/");
    }
    const { categoryId } = req.params;
    req.body.category = categoryId;
    const newRecipe = await Recipe.create(req.body);
    await Category.findOneAndUpdate(
      { _id: categoryId },
      { $push: { recipes: newRecipe._id } }
    );
    res.status(201).json(newRecipe);
  } catch (error) {
    next(error);
  }
};
