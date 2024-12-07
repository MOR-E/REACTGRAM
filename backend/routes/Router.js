const express = require('express')
const router = express()

router.use('/api/users', require('./UserRoutes'))


// test route
router.get('/', (req, res) => {
    console.log('api funcionando')
})


module.exports = router