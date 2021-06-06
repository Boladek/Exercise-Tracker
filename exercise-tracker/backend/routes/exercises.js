const express = require("express");
const router = express.Router();
const { getExercises } = require("../controllers/getController");
const { addExercise, updateExercise, deleteExercise } = require("../controllers/postController");

router.get('/', getExercises);
router.post('/add', addExercise);
router.put('/update/:id', updateExercise);
router.delete('/:id', deleteExercise)

module.exports = router;
