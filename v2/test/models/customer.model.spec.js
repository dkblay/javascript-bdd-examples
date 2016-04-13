'use strict';

let chai = require('chai'),
    sinon = require('sinon'),
    customerModel = require('../../models/customer.model'),
    _ = require('lodash');

let should = chai.should(),
    expect = chai.expect;


describe('Customer model', function () {

    this.timeout(4000);

    describe('when adding a new customer', ()=> {


        let store = {
            add: function (collectoin, data, callback) {
                return callback(null, data);
            }
        };


        it('should throw error if customer doesn\'t have firstName property', () => {
            let customer = {},
                callback = _.noop();

            expect(() => {
                customerModel.add(customer, callback);
            }).to.throw(Error);
        });


        it('should generate new followupCode if none exist', (done) => {
            let customer = {firstName: 'David'};

            let model = customerModel(store);

            model.add(customer, (result) => {
                result.should.have.property('followupCode');
                done();
            });
        });


        it('should use existing followup code if any', (done) => {
            let customer = {firstName: 'David', followupCode: '123456'};

            let model = customerModel(store);

            model.add(customer, (result) => {
                expect(result.followupCode).to.equal('123456');
                done();
            })
        });

        it('should persist customer data to store', (done) => {
            let spy = sinon.spy(store, 'add');

            // console.log('equality', spy ===  store.add);
            let customer = {firstName: 'David'};


            let model = customerModel(store);
            model.add(customer, ()=> {
                store.add.called.should.be.true;
                done();
            });
        });

    });
});