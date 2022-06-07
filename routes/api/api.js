const express = require('express')
const router = express.Router();

const apiController = require('../../controller/api/api');

// GET localhost:3000/movies
router.get('/movies', apiController.show);

// GET localhost:3000/movies/:id
router.get('/movies/:id', apiController.detail);

// POST localhost:3000/movies
router.post('/movies', apiController.create);

// PUT localhost:3000/movies/:id
router.put('/movies/:id', apiController.update)

// DELETE localhost:3000/movies/delete/:id
router.delete('/movies/:id', apiController.destroy);

module.exports = router;