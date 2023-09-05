let comments = require('../data/comments');

const list = (req, res) => {
    console.log('test', comments)
    res.send(comments);
}

const show = (req, res) => {
    const comment = comments.find((comment) => comment._id === parseInt(req.params._id));
    res.send(comment)
}

const create = (req, res) => {
    console.log('where da body', req.body)
    const newComment = {
        ...req.body,
        _id: comments.length + 1,
        postId: 1
    };
    comments.push(newComment);
    res.json(newComment)
}


module.exports = {list, show, create}
