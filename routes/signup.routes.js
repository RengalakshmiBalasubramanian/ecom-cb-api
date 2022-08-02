const express = require('express')

const controller = require('../controller/sign-up.controller')

const router = express.Router()


router.post('/create', controller.create)

router.get('/read', controller.read)


module.exports = router