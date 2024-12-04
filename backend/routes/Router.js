const express = require('express')
const router = express()


// test route
router.get('/', (req, res) => {
    console.log('api funcionando')
})


module.exports = router