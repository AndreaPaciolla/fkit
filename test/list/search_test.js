'use strict';

var search = require('../../src/list/search');

describe('list.search', function() {
  describe('#elem', function() {
    it('should handle arrays', function() {
      expect(search.elem(0)([1, 2, 3])).to.be.false;
      expect(search.elem(1)([1, 2, 3])).to.be.true;
    });

    it('should handle strings', function() {
      expect(search.elem('b')('foo')).to.be.false;
      expect(search.elem('o')('foo')).to.be.true;
    });
  });

  describe('#elemIndex', function() {
    it('should handle arrays', function() {
      expect(search.elemIndex(0)([1, 2, 3])).to.be.undefined;
      expect(search.elemIndex(1)([1, 2, 3])).to.be.equal(0);
    });

    it('should handle strings', function() {
      expect(search.elemIndex('b')('foo')).to.be.undefined;
      expect(search.elemIndex('o')('foo')).to.be.equal(1);
    });
  });

  describe('#elemIndices', function() {
    it('should handle arrays', function() {
      expect(search.elemIndices(0)([1, 2, 3])).to.be.eql([]);
      expect(search.elemIndices(1)([1, 2, 3])).to.be.eql([0]);
    });

    it('should handle strings', function() {
      expect(search.elemIndices('b')('foo')).to.be.eql([]);
      expect(search.elemIndices('o')('foo')).to.be.eql([1, 2]);
    });
  });

  describe('#find', function() {
    it('should handle arrays', function() {
      function p(a) { return a > 1; }
      expect(search.find(p)([])).to.be.undefined;
      expect(search.find(p)([1, 2, 3])).to.be.equal(2);
    });

    it('should handle strings', function() {
      function p(a) { return a === 'o'; }
      expect(search.find(p)('')).to.be.undefined;
      expect(search.find(p)('foo')).to.be.equal('o');
    });
  });

  describe('#findIndex', function() {
    it('should handle arrays', function() {
      function p(a) { return a > 1; }
      expect(search.findIndex(p)([])).to.be.undefined;
      expect(search.findIndex(p)([1, 2, 3])).to.be.equal(1);
    });

    it('should handle strings', function() {
      function p(a) { return a === 'o'; }
      expect(search.findIndex(p)('')).to.be.undefined;
      expect(search.findIndex(p)('foo')).to.be.equal(1);
    });
  });

  describe('#findIndices', function() {
    it('should handle arrays', function() {
      function p(a) { return a > 1; }
      expect(search.findIndices(p)([])).to.be.eql([]);
      expect(search.findIndices(p)([1, 2, 3])).to.be.eql([1, 2]);
    });

    it('should handle strings', function() {
      function p(a) { return a === 'o'; }
      expect(search.findIndices(p)('')).to.be.eql([]);
      expect(search.findIndices(p)('foo')).to.be.eql([1, 2]);
    });
  });

  describe('#filter', function() {
    it('should handle arrays', function() {
      function p(a) { return a > 1; }
      expect(search.filter(p)([])).to.be.eql([]);
      expect(search.filter(p)([1, 2, 3])).to.be.eql([2, 3]);
    });

    it('should handle strings', function() {
      function p(a) { return a === 'o'; }
      expect(search.filter(p)('')).to.be.equal('');
      expect(search.filter(p)('foo')).to.be.equal('oo');
    });
  });

  describe('#partition', function() {
    it('should handle arrays', function() {
      function p(a) { return a > 1; }
      expect(search.partition(p)([])).to.be.eql([[], []]);
      expect(search.partition(p)([1, 2, 3])).to.be.eql([[2, 3], [1]]);
    });

    it('should handle strings', function() {
      function p(a) { return a === 'o'; }
      expect(search.partition(p)('')).to.be.eql(['', '']);
      expect(search.partition(p)('foo')).to.be.eql(['oo', 'f']);
    });
  });

  describe('#all', function() {
    it('should handle arrays', function() {
      function p(a) { return a > 1; }
      expect(search.all(p)([3]      )).to.be.true;
      expect(search.all(p)([2, 3]   )).to.be.true;
      expect(search.all(p)([3, 2, 1])).to.be.false;
    });

    it('should handle strings', function() {
      function p(a) { return a !== 'r'; }
      expect(search.all(p)('b'  )).to.be.true;
      expect(search.all(p)('ba' )).to.be.true;
      expect(search.all(p)('bar')).to.be.false;
    });
  });

  describe('#any', function() {
    it('should handle arrays', function() {
      function p(a) { return a > 1; }
      expect(search.any(p)([1]      )).to.be.false;
      expect(search.any(p)([1, 2]   )).to.be.true;
      expect(search.any(p)([1, 2, 3])).to.be.true;
    });

    it('should handle strings', function() {
      function p(a) { return a !== 'r'; }
      expect(search.any(p)('r'  )).to.be.false;
      expect(search.any(p)('ar' )).to.be.true;
      expect(search.any(p)('bar')).to.be.true;
    });
  });
});
