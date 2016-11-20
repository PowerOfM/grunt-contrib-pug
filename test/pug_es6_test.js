'use strict';

var read = require('./helpers').read;

exports.pug = {
  compile: function(test) {

    test.expect(4);

    var actual = read('tmp/es6/pug.js');
    var expected = read('test/expected/es6/pug.js');
    test.equal(expected, actual, 'should compile pug templates to js');

    actual = read('tmp/es6/pug2.js');
    expected = read('test/expected/es6/pug2.js');
    test.equal(expected, actual, 'should compile pug templates to js (multiple files support)');

    actual = read('tmp/es6/pugInclude.js');
    expected = read('test/expected/es6/pugInclude.js');
    test.equal(expected, actual, 'should compile pug templates to js with an include');

    actual = read('tmp/es6/pugTemplate.js');
    expected = read('test/expected/es6/pugTemplate.js');
    test.equal(expected, actual, 'should compile pug templates to js with grunt template support');

    test.done();
  }
};
