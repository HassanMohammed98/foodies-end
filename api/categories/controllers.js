const Category = require("../../models/Category");

exports.fetchCategory = async (categoryId, next) => {
  try {
    const category = await Category.findById(categoryId);
    return category;
  } catch (error) {
    next(error);
  }
};

exports.categoryCreate = async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    return res.status(201).json(newCategory);
  } catch (error) {
    next(error);
  }
};

exports.getCategories = async (req, res) => {
  try {
    const category = await Category.find();
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
