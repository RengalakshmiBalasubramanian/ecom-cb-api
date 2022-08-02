const express = require('express')

const controller = require('../controller/sign-up.controller')

const router = express.Router()


router.post('/create', controller.create)

router.get('/login', controller.login)
router.post('/save', controller.save)

module.exports = router