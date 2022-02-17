const mongoose = require("mongoose");
const mongooseSlugPlugin = require("mongoose-slug-plugin");
const CaregorySchema = new mongoose.Schema(
  {
    name: String,
    image: String,
    recipes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }],
  },
  { timestamps: true }
);

CaregorySchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });
module.exports = mongoose.model("Caregory", CaregorySchema);
