const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        // Must be between 1 and 280 characters
    },
    createdAt: {
        type: Date,
        default: Date.now,

    },
    username: {
        type: String,
        requrired: true
    },
    reactions: {
        //Array of nested documents created with the reactionSchema
    }
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;