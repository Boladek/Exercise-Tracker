const UserExercise = require('../models/user.model');
const Exercise = require('../models/exercise.model')
async function addUser(req, res) {
    try {
        const username = req.body.username;
        const newUser = await UserExercise.create({ username });
        res.status(201).json('User added: ' + newUser);
    }
    catch (error) {
        res.status(400).json('Error:' + error);
    }
}

async function addExercise(req, res) {
    try {
        const username = req.body.username;
        const description = req.body.description;
        const duration = Number(req.body.duration);
        const date = Date.parse(req.body.date);

        const newExercise = await Exercise.create({ username, description, duration, date });
        res.status(201).json({ newExercise });
    }
    catch (error) {
        res.status(400).json( 'Error:'+ error );
    }
}

async function updateExercise(req, res) {
    try {
        const { id } = req.params;
        const exercise = await Exercise.findByIdAndUpdate(
          id,
          req.body,
          function (err, docs) {
            if (err) {
              console.log(err);
            } else {
              console.log("Updated User : ", docs);
            }
          }
        ).exec();
        res.status(201).send('exercise updated');
    } catch (error) {
        res.status(400).json("Error:" + error);
    }
}

async function deleteExercise(req, res) {
    try {
        const { id } = req.params;
        const exercise = await Exercise.findByIdAndDelete(id);
        res.status(200).json('exercise delete!' + exercise);
    } catch (error) {
        res.status(400).json("Error:" + error);
    }
}

module.exports = { addUser , addExercise, updateExercise, deleteExercise};