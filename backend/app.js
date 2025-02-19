const express = require("express");
const mongoose = require("mongoose");
const ShortUrl = require("./models/ShortUrl");

const app = express();
app.use(express.json());

app.post("/shorten-url", async (req, res) => {
  const shortUrl = await ShortUrl.create({ full: req.body.fullUrl });
  res.json({ shortUrl: `http://localhost:5000/${shortUrl._id}` });
});

app.get("/:shortUrl", async (req, res) => {
  const shortUrl = await ShortUrl.findById(req.params.shortUrl);
  if (!shortUrl) return res.sendStatus(404);
  res.redirect(shortUrl.full);
});

app.listen(5000, () => console.log("Server up & running on port 5000 🚀"));

mongoose.connect("mongodb://database:27017/urlshortener", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
