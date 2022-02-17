const Recipes = require("../../models/Recipe");

exports.fetchRecipe = async (recipeId, next) => {
  try {
    const recipe = await Recipes.findById(recipeId);
    return recipe;
  } catch (error) {
    next(error);
  }
};
// exports.recipeCreate = async (req, res) => {
//   try {
//     const newRecipe = await Recipes.create(req.body);
//     return res.status(201).json(newRecipe);
//   } catch (error) {
//     next(error);
//   }
// };
exports.getRecipe = async (req, res) => {
  try {
    const recipe = await Recipes.find();
    return res.json(recipe);
  } catch (error) {
    next(error);
  }
};

exports.recipeDelete = async (req, res, next) => {
  try {
    await req.recipe.remove();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.recipeUpdate = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `/${req.file.path}`;
      req.body.image = req.body.image.replace("\\", "/");
    }
    const recipe = await Recipes.findByIdAndUpdate(
      { _id: req.recipe._id },
      req.body,
      { new: true, runValidators: true } // returns the updated product
    );
    res.json(recipe);
  } catch (error) {
    next(error);
  }
};
