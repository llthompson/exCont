let comments = require('../data/comments');

const list = (req, res) => {
    console.log('test', comments)
    res.send(comments);
}

module.exports = {list}