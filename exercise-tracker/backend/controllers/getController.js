const UserExercise = require("../models/user.model");
const Exercise = require("../models/exercise.model");
async function getAll(req, res) {
  try {
    const user = await UserExercise.find();
    return res.json({ user });
  } catch (error) {
    res.status(400).json('Error: ' + error);
  }
}

async function getExercises(req, res) {
    try {
        const exercise = await Exercise.find();
        res.status(200).json({ exercise });
    }
    catch (error) {
        res.status(400).json('Error: '+ error)
    }
}

async function getSingleExercise(req, res) {
    try {
    const {id} = req.params
    const exercise = await Exercise.findOne({id});
    res.status(200).json({ exercise });
  } catch (error) {
    res.status(400).json("Error: " + error);
  }
}

module.exports = { getAll, getExercises, getSingleExercise };