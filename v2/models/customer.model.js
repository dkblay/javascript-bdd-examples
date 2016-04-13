'use strict';

let uuid = require('uuid');

module.exports = function (store) {

    function add(customer, callback) {
        if (!customer.firstName) {
            throw new Error('please first name is required');
        }

        if (!customer.followupCode) {
            customer.followupCode = uuid.v4();

        }

        store.add('customer', customer, (err, data) => {
            callback(data);
        });
    }

    return {
        add
    };
};