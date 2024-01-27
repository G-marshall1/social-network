const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

// /api/students
router.route('/').get(getThoughts).post(createThought);

// /api/students/:studentId
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought).put(updateThought);

// /api/students/:studentId/assignments/:assignmentId
router.route('/:thoughtId/reactions').delete(removeReaction).post(addReaction);

module.exports = router;

