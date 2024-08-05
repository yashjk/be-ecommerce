const router = require("express").Router();

router.get("/usertest", (req, res) => {
  res.send("users test is successful");
});

router.post("/userpost", (req, res) => {
  const username = req.body.username;
  console.log(username);
  res.send("Your username is: " + username);
});

module.exports = router;
