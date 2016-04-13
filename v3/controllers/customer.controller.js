'use strict';

let store = require('../models/store');
let model = require('../models/customer.model')(store);

function getAllCustomers(req, res) {

    model.getData((err, data) => {
        if (err) {
            res.send(500);
        } else {
            res.send(200, data);

        }
    })
}

module.exports = {
    getAllCustomers: getAllCustomers
};