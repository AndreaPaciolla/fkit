'use strict';

var list = require('../src/list');

describe('list', function() {
  describe('#range', function() {
    it('should return an array of numbers', function() {
      expect(list.range(1)(3)).to.eql([1, 2, 3]);
      expect(list.range(3)(1)).to.eql([3, 2, 1]);
      expect(list.range(1)(1)).to.eql([1]);
    });
  });

  describe('#concatMap', function() {
    it('should concat map an array', function() {
      function f(a) { return [a + 1]; }
      expect(list.concatMap(f)([1, 2, 3])).to.be.eql([2, 3, 4]);
    });

    it('should concat map a string', function() {
      function f(a) { return a + '-'; }
      expect(list.concatMap(f)('foo')).to.be.eql('f-o-o-');
    });
  });

  describe('#map', function() {
    it('should map an array', function() {
      function f(a) { return [a + 1]; }
      expect(list.map(f)([1, 2, 3])).to.be.eql([[2], [3], [4]]);
    });

    it('should map a string', function() {
      function f(a) { return a + '-'; }
      expect(list.map(f)('foo')).to.be.equal('f-o-o-');
    });
  });

  describe('#filter', function() {
    it('should filter an array', function() {
      function f(a) { return a > 1; }
      expect(list.filter(f)([1, 2, 3])).to.be.eql([2, 3]);
    });

    it('should filter a string', function() {
      function f(a) { return a == 'o'; }
      expect(list.filter(f)('foo')).to.be.equal('oo');
    });
  });

  describe('#fold', function() {
    it('should fold an array from left to right', function() {
      function f(b, a) { return [a].concat(b); }
      expect(list.fold(f)([])([1, 2, 3])).to.be.eql([3, 2, 1]);
    });

    it('should fold a string from left to right', function() {
      function f(b, a) { return a + b; }
      expect(list.fold(f)('')('foo')).to.be.equal('oof');
    });
  });

  describe('#foldRight', function() {
    it('should fold an array from right to left', function() {
      function f(a, b) { return [a].concat(b); }
      expect(list.foldRight(f)([])([1, 2, 3])).to.be.eql([1, 2, 3]);
    });

    it('should fold a string from right to left', function() {
      function f(a, b) { return a + b; }
      expect(list.foldRight(f)('')('foo')).to.be.equal('foo');
    });
  });

  describe('#scan', function() {
    it('should scan an array from left to right', function() {
      function f(b, a) { return [a].concat(b); }
      expect(list.scan(f)([])([1, 2, 3])).to.be.eql([[], [1], [2,1], [3,2,1]]);
    });

    it('should scan a string from left to right', function() {
      function f(b, a) { return a + b; }
      expect(list.scan(f)('')('foo')).to.be.eql(['', 'f', 'of', 'oof']);
    });
  });

  describe('#scanRight', function() {
    it('should scan an array from right to left', function() {
      function f(a, b) { return [a].concat(b); }
      expect(list.scanRight(f)([])([1, 2, 3])).to.be.eql([[1,2,3], [2,3], [3], []]);
    });

    it('should scan an array from right to left', function() {
      function f(a, b) { return a + b; }
      expect(list.scanRight(f)('')('foo')).to.be.eql(['foo', 'oo', 'o', '']);
    });
  });

  describe('#append', function() {
    it('should append an element to an array', function() {
      expect(list.append([1, 2, 3])(4)).to.be.eql([1, 2, 3, 4]);
    });

    it('should append two strings', function() {
      expect(list.append('foo')('bar')).to.be.equal('foobar');
    });
  });

  describe('#prepend', function() {
    it('should prepend an element to an array', function() {
      expect(list.prepend([1, 2, 3])(4)).to.be.eql([4, 1, 2, 3]);
    });

    it('should prepend two strings', function() {
      expect(list.prepend('foo')('bar')).to.be.equal('barfoo');
    });
  });

  describe('#concat', function() {
    it('should concatenate arrays', function() {
      expect(list.concat([1, 2, 3], [4, 5, 6], [7, 8, 9])).to.be.eql([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('should concatenate strings', function() {
      expect(list.concat('foo', 'bar', 'baz')).to.be.equal('foobarbaz');
    });
  });

  describe('#head', function() {
    it('should return the first element of an array', function() {
      expect(list.head([1, 2, 3])).to.be.equal(1);
    });

    it('should return the first character of a string', function() {
      expect(list.head('foo')).to.be.equal('f');
    });
  });

  describe('#tail', function() {
    it('should return the elements after the first element of an array', function() {
      expect(list.tail([1, 2, 3])).to.be.eql([2, 3]);
    });

    it('should return the characters after the first character of a string', function() {
      expect(list.tail('foo')).to.be.equal('oo');
    });
  });

  describe('#init', function() {
    it('should return the elements before the last element of an array', function() {
      expect(list.init([1, 2, 3])).to.be.eql([1, 2]);
    });

    it('should return the characters before the last character of a string', function() {
      expect(list.init('foo')).to.be.equal('fo');
    });
  });

  describe('#last', function() {
    it('should return the last element of an array', function() {
      expect(list.last([1, 2, 3])).to.be.equal(3);
    });

    it('should return the last character of a string', function() {
      expect(list.last('foo')).to.be.equal('o');
    });
  });

  describe('#reverse', function() {
    it('should return the elements of an array in reverse', function() {
      expect(list.reverse([1, 2, 3])).to.be.eql([3, 2, 1]);
    });

    it('should return the characters of a string in reverse', function() {
      expect(list.reverse('foo')).to.be.equal('oof')
    });
  });
});