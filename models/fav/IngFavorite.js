const mongoose = require("mongoose");
// const mongooseSlugPlugin = require("mongoose-slug-plugin");
const IngFavoriteSchema = new mongoose.Schema(
  {
    ingredient: { type: mongoose.Schema.Types.ObjectId, ref: "Ingredient" },
  },
  { timestamps: true }
);

// CaregorySchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });

module.exports = mongoose.model("IngFavorite", IngFavoriteSchema);
