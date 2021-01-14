const bodyParser = require("body-parser");
const app = require("express")();
import coupons from "./mockup/coupons.json";
import categories from "./mockup/categories.json";
import coupon from "./mockup/coupon.json";
import check from "./mockup/check.json";
import apply from "./mockup/apply.json";

app.use(bodyParser.json())
app.all("/mockup", (req, res) => {
  switch(req.query.q) {
    case "coupons": 
      res.json(coupons);
      break;
    case "categories": 
      res.json(categories);
      break;
    case "coupon": 
      res.json(coupon);
      break;
    case "check": 
      res.json(check);
      break;
    case "apply": 
      res.json(apply);
      break;
  }
  res.json(null);
})

module.exports = app;