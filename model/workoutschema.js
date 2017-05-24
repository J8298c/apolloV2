/**
 * Created by julio.mojica on 5/24/2017.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    workout:[{
        name: String,
        reps: String,
        sets: String
    }]
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;