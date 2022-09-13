const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('./login');
    res.end();
});

module.exports = router;