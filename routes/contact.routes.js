const express = require('express')

const controller = require('../controller/contact.controller')

const router = express.Router()


router.post('/create', controller.create)

router.get('/read', controller.read)


module.exports = router