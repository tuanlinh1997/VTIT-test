const banner = require("data/banner.json");
export default function handler(req, res) {
  res.status(200).json({ data: banner, message: '"Success!"' });
}
