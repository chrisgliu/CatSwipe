const express = require('express')

const catcontroller = require('../controller/catcontroller')

const router = express.Router()

router.post('/cat', catcontroller.createCat)
router.put('/cat/:id', catcontroller.updateCat)
router.delete('/cat/:id', catcontroller.deleteCat)
router.get('/cat/:id', catcontroller.getCatById)
router.get('/cats', catcontroller.getCats)

module.exports = router
