const { Post } = require('../models');

const postdata = [
  {
    title: 'Robot Gladiators.',
    post_content: "we'll use JavaScript to build a browser-based video game that we'll enter in a fictional hackathon called the Con Solo Game Jam",
    user_id: 3
  },
  {
    title: 'Taskmaster.',
    post_content: 'User can create and delete tasks with descriptions and due dates.',
    user_id: 1
  },
  {
    title: 'Git it Done.',
    post_content: 'User can look up any user on github or search via filters and will respond with their repostitories',
    user_id: 2
  },
  {
    title: 'Portfolio generator.',
    post_content: 'Using node.js, User can create any portfolio using the back end',
    user_id: 4
  },
  {
    title: 'Jest another rpg.',
    post_content: 'create an rpg and organze the code by player objects, enemy objects, and potion objects',
    user_id: 5
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;