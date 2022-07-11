const { Schema, model } = require('mongoose');

function emailValidator (val) {
    const emailRe = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    return emailRe.test(val);
}

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        //trimmed: 
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: emailValidator
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);

// get friend count
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;