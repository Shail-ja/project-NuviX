const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("User Route Working");
});

module.exports = router;  // ✅ Ensure you're exporting the router
