const express = require('express')

const router = express.Router()

// rota raiz
router.get('/', (req, res) => {
    res.status(200).send('router is working')
})

module.exports = router