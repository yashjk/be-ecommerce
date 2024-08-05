const router = require("express").Router();

router.get("/userTest", (req, res) => {
  res.send("users test is successful");
});

module.exports = router;
