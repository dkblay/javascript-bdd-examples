'use strict';

let rewire = require('rewire'),
    controller = rewire('../../controllers/customer.controller');

let chai = require('chai'),
    expect = chai.expect,
    should = chai.should();

describe('Customer Controller', function () {

    describe('when fetching all customers', () => {
        let req,
            res,
            status,
            sentData;

        beforeEach(() => {

            res = {
                send: (code, data)=> {
                    status = code;
                    sentData = data;
                }
            };
            let modelMock = {
                getData: (callback) => {
                    callback(null, [{firstName: 'dummy'}]);
                }
            };

            controller.__set__('model', modelMock)

        });

        it('should should return 200 success', () => {
            controller.getAllCustomers(req, res);
            status.should.equal(200);
        });

        it('should return data', () => {
            controller.getAllCustomers(req, res);
            sentData[0].firstName.should.equal('dummy');
        })
    })
});

