const express = require('express')

const controller = require('../controller/sign-up.controller')

const router = express.Router()


router.post('/create', controller.create)
router.get('/read', controller.read)

router.get('/login', controller.login)
router.get('/select', controller.select)

router.post('/save', controller.save)
router.post('/createshop', controller.createshop)

module.exports = router