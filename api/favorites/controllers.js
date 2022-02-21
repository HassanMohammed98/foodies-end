// const RecipeFavSchema = require("../../models/Favorite");
// const CategoryFavSchema = require("../../models/Favorite");
const CatgFavorite = require("../../models/fav/CatgFavorite");
const RecFavorite = require("../../models/fav/RecFavorite");
const IngFavorite = require("../../models/fav/IngFavorite");
// const Recipe = require("../../models/Recipe");

// exports.fetchCategory = async (categoryId, next) => {
//   try {
//     const category = await Category.findById(categoryId);
//     if (category) {
//       return category;
//     } else {
//       const error = new Error("Category not found");
//       error.status = 404;
//       next(error);
//     }
//   } catch (error) {
//     next(error);
//   }
// };

// exports.categoryCreate = async (req, res, next) => {
//   try {
//     if (req.file) {
//       req.body.image = `/${req.file.path}`;
//       req.body.image = req.body.image.replace("\\", "/");
//     }
//     const newCategory = await Category.create(req.body);
//     return res.status(201).json(newCategory);
//   } catch (error) {
//     next(error);
//   }
// };

exports.getCatgFavorites = async (req, res, next) => {
  try {
    const favorites = await CatgFavorite.find().populate("category");
    return res.json(favorites);
  } catch (error) {
    next(error);
  }
};
exports.getRecFavorites = async (req, res, next) => {
  try {
    const favorites = await RecFavorite.find().populate("recipe");
    return res.json(favorites);
  } catch (error) {
    next(error);
  }
};
exports.getIngFavorites = async (req, res, next) => {
  try {
    const favorites = await IngFavorite.find().populate("ingredient");
    return res.json(favorites);
  } catch (error) {
    next(error);
  }
};

// exports.categoryDelete = async (req, res, next) => {
//   try {
//     await req.category.remove();
//     res.status(204).end();
//   } catch (error) {
//     next(error);
//   }
// };

// exports.categoryUpdate = async (req, res, next) => {
//   try {
//     if (req.file) {
//       req.body.image = `/${req.file.path}`;
//       req.body.image = req.body.image.replace("\\", "/");
//     }
//     const category = await Category.findByIdAndUpdate(
//       { _id: req.category._id },
//       req.body,
//       { new: true, runValidators: true } // returns the updated product
//     );
//     res.json(category);
//   } catch (error) {
//     next(error);
//   }
// };

// exports.recipeCreate = async (req, res, next) => {
//   try {
//     if (req.file) {
//       req.body.image = `/${req.file.path}`;
//       req.body.image = req.body.image.replace("\\", "/");
//     }
//     const { categoryId } = req.params;
//     req.body.category = categoryId;
//     req.body.ingredients = req.body.ingredients.split(",");
//     const newRecipe = await Recipe.create(req.body);
//     await Category.findOneAndUpdate(
//       { _id: categoryId },
//       { $push: { recipes: newRecipe._id } }
//     );
//     res.status(201).json(newRecipe);
//   } catch (error) {
//     next(error);
//   }
// };

exports.categoryFavoriteAdd = async (req, res, next) => {
  try {
    const newFav = await CatgFavorite.create(req.body);
    res.status(201).json(newFav);
  } catch (error) {
    next(error);
  }
};
exports.recipeFavoriteAdd = async (req, res, next) => {
  try {
    const newFav = await RecFavorite.create(req.body);
    res.status(201).json(newFav);
  } catch (error) {
    next(error);
  }
};
exports.ingredientFavoriteAdd = async (req, res, next) => {
  try {
    const newFav = await IngFavorite.create(req.body);
    res.status(201).json(newFav);
  } catch (error) {
    next(error);
  }
};

exports.categoryFavoriteRemove = async (req, res, next) => {
  try {
    const { categoryId } = req.params;
    await CatgFavorite.findByIdAndDelete(categoryId);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.recipeFavoriteRemove = async (req, res, next) => {
  try {
    const { recipeId } = req.params;
    await RecFavorite.findByIdAndDelete(recipeId);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.ingredientFavoriteRemove = async (req, res, next) => {
  try {
    const { ingredientId } = req.params;
    await IngFavorite.findByIdAndDelete(ingredientId);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
