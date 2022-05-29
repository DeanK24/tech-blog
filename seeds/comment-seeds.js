const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "This is wild"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Amazing work"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Wonderful"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "Fantastic"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "Awesome work"
    },
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;