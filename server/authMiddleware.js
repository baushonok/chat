const jwt = require("jsonwebtoken");

const APP_SECRET = "myappsecret";
const USERNAME = "admin";
const PASSWORD = "admin";

module.exports = function (req, res, next) {
  if (req.url == "/login" && req.method == "POST") {
    if (req.body != null && req.body.name == USERNAME
        && req.body.password == PASSWORD) {
          const payload = {
            data: USERNAME
          };
          const signOptions = {
            expiresIn: "12h"
          };
          let token = jwt.sign(payload, APP_SECRET, signOptions);
          res.json({ success: true, token: token });
    } else {
      res.json({ success: false });
    }
    res.end();
    return;
  }

  next();
}
