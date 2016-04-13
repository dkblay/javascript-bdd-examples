'use strict';

module.exports = {
    getData,
    add,
    find,
    remove
};


let collections = {};

function add(collection, data, callback) {
    if (!collection) {
        throw new TypeError('Collection must exist');
    }

    collections[collection] = collections[collection] || [];
    collections[collection].push(data);

    setTimeout(() => {
        callback(null, data);
    }, 3000);
}


function getData(collection, callback) {
    if (!collection) {
        throw new TypeError('Collection must exist');
    }
    collections[collection] = collections[collection] || [];


    setTimeout(() => {

        callback(null, collections[collection]);
    }, 1000);
}


function find(collection, data, callback) {

}


function remove(collection, data, callback) {

}