Find Object In Array
=========

Find an Object in an array of Objects using property and key

## Usage

`var findOinA = require('@nicholasmole/find-object-in-array');`
                                                            
```                                                                     
  var _array = [
	  {key: 'apple', color: 'red'},
		{key: 'banana', color: 'yellow'},
	];

  var result = findOinA(_array, 'key', 'apple');

// returns {key: 'apple', color: 'red'}
                               
```                                                                     

## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.