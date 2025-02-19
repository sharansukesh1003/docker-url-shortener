const mongoose = require("mongoose");

const shortUrlSchema = new mongoose.Schema(
  {
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true }, // Auto-generate ObjectId
    full: { type: String, required: true }, // Store original URL
  },
  { _id: false }
); // Use ObjectId as short URL

module.exports = mongoose.model("ShortUrl", shortUrlSchema);
