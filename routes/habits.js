// models
const router = require('express').Router()
const habitsCtrl = require('../controllers/habits')

const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/* ------==== public routes ====------ */


/* ------==== protected routes ====------ */
router.use(decodeUserFromToken)

router.post('/', checkAuth, habitsCtrl.create)
router.get('/', checkAuth, habitsCtrl.index)
router.put('/:id', checkAuth, habitsCtrl.update)

module.exports = router