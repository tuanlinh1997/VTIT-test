const category = require("data/category.json");
export default function handler(req, res) {
  res.status(200).json({ data: category, message: '"Success!"' });
}
