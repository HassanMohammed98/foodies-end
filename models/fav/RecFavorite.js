const mongoose = require("mongoose");
// const mongooseSlugPlugin = require("mongoose-slug-plugin");
const RecFavoriteSchema = new mongoose.Schema(
  {
    recipe: { type: mongoose.Schema.Types.ObjectId, ref: "Recipe" },
  },
  { timestamps: true }
);

// CaregorySchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });
module.exports = mongoose.model("RecFavorite", RecFavoriteSchema);
