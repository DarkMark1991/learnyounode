var assert = require('assert');

describe('test 1', function(){
	it('works', function(){
		assert.throws(function(){
			throw 'Error!';
		});
	});
});
