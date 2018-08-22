var expect = require('chai').expect;
var findOinA = require('../index');

describe('Find an object', function() {
	it('should find apples object', function() {
			var _array = [
				{key: 'apple', color: 'red'},
				{key: 'banana', color: 'yellow'},
			];
			var result = findOinA(_array, 'key', 'apple');
			expect(result).to.deep.equal({ key: 'apple', color: 'red' });
	});
	it('shouldn\'t find apples object', function() {
		var _array = [
			{key: 'apple', color: 'red'},
			{key: 'banana', color: 'yellow'},
		];
		var result = findOinA(_array, 'key', 'melon');
		expect(result).to.equal(undefined);
	});
});	
