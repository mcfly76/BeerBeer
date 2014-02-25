/**
 * Created by Shaa on 25/02/14.
 * Description: ridiculous test
 */

var should = require('should');
var assert = require('assert');
//var threeSeconds = require('seconds');

describe ('Test Framework', function(){
    it('should have mocha installed, up and running', function(){
        assert.equal(true,true);
    })
    it('should have the should library installed to perform fluent testing.', function(){
        true.should.eql(true);
    })
})
