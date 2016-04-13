'use strict';
let store = require('./store'),
    uuid = require('uuid');

function add(customer, callback) {
    if(!customer.firstName) {
        throw new Error('please first name is required');
    }

    if(!customer.followupCode) {
        customer.followupCode = uuid.v4();

    }

    store.add('customer', customer, (err, data) => {
       callback(data);
    });
}

module.exports = {
    add
};