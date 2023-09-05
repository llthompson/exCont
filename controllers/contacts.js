let contacts = require('../data/contacts');

const list = (req, res) => {
    console.log('test', contacts)
    res.send(contacts);
}

const show = (req, res) => {
    const contact = contacts.find((contact) => contact._id === parseInt(req.params._id));
    res.send(contact)
}

const create = (req, res) => {
    console.log('where da body', req.body)
    const newContact = {
        ...req.body,
        _id: contacts.length + 1,
    };
    contacts.push(newContact);
    res.json(newContact)
}


module.exports = {list, show, create}
