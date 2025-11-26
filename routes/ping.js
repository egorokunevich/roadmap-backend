var express = require('express');
var router = express.Router();

// As server is deployed at free hosting, it falls asleep if there are no frequent requests.
// Front should wait for server to wake up with this request

router.get('/', (req, res) => {
  res.json({ isAwake: true });
});

module.exports = router;
