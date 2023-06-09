// models
const router = require('express').Router()
const habitsCtrl = require('../controllers/habits')

const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/* ------==== public routes ====------ */


/* ------==== protected routes ====------ */

/*
-Using one-single page for all habit CRUD operations, but *backend* routes are still correctly following RESTFUL routing
-This is so users can easily create, read, update, and delete all habits on a single page rather than different pages
*/

router.use(decodeUserFromToken)

router.post('/', checkAuth, habitsCtrl.create)
router.get('/', checkAuth, habitsCtrl.index)
router.put('/:id', checkAuth, habitsCtrl.update)
router.delete('/:id', checkAuth, habitsCtrl.delete)

module.exports = router