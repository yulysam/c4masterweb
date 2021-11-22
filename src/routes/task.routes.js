const express = require('express');
const router = express.Router();

const Usuario = require('../models/usuarios');

router.get('/', (req, res) => {
    Usuario.find(function (err, tasks){
        console.log(tasks);
    });
    res.json({
        status: 'API WORKS'
    });
});

module.exports = router;