let vehicles = require('../data/vehicles');

const list = (req, res) => {
    console.log('test', vehicles)
    res.send(vehicles);
}

const show = (req, res) => {
    const vehicle = vehicles.find((vehicle) => vehicle._id === parseInt(req.params._id));
    res.send(vehicle)
}

const create = (req, res) => {
    console.log('where da body', req.body)
    const newVehicle = {
        ...req.body,
        _id: vehicles.length + 1,
    };
    vehicles.push(newVehicle);
    res.json(newVehicle)
}


module.exports = {list, show, create}
