const { Schema, model } = require('mongoose');

const ReactionSchema = new Schema({
    reactionId: {
        // type: Use Mongoose's ObjectId data type,
        // default: Default value is set to a new ObjectId
    },
    reactionBody: {
        type: String,
        required: true,
        // 280 character maximum
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
        // Use a getter method to format the timestamp on query
    }
});
