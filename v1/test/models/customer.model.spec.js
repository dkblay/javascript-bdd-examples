'use strict';

let chai  = require('chai'),
    model = require('../../models/customer.model'),
    _  = require('lodash');

let should  = chai.should(),
    expect  = chai.expect;




describe('Customer model', function() {

    this.timeout(4000);

    describe('when adding a new customer', ()=> {

        it('should throw error if customer doesn\'t have firstName property', () => {
            let customer  = {},
                callback  = _.noop();

            expect(() => {
                model.add(customer, callback);
            }).to.throw(Error);
        });


        it('should generate new followupCode if none exist', (done) => {
            let customer  = {firstName: 'David'};
            model.add(customer, (result) => {
                result.should.have.property('followupCode');
                done();
            });
        });


        it('should use existing followup code if any', (done) => {
            let customer  = {firstName: 'David', followupCode: '123456'};
            model.add(customer, (result) => {
                expect(result.followupCode).to.equal('123456');
                done();
            })
        });

    });
});