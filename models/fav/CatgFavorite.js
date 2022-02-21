const mongoose = require("mongoose");
// const mongooseSlugPlugin = require("mongoose-slug-plugin");
const CatgFavoriteSchema = new mongoose.Schema(
  {
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Caregory" },
  },
  { timestamps: true }
);

// CaregorySchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });
module.exports = mongoose.model("CatgFavorite", CatgFavoriteSchema);
