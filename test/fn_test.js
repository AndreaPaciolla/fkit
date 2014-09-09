'use strict';

var fn = require('../src/fn');

describe('fn', function() {
  describe('#add', function() {
    it('should add the given values', function() {
      expect(fn.add(2)(1)).to.equal(3);
    });
  });

  describe('#sub', function() {
    it('should subtract the given values', function() {
      expect(fn.sub(2)(1)).to.equal(-1);
    });
  });

  describe('#mul', function() {
    it('should multiply the given values', function() {
      expect(fn.mul(2)(1)).to.equal(2);
    });
  });

  describe('#div', function() {
    it('should divide the given values', function() {
      expect(fn.div(2)(1)).to.equal(0.5);
    });
  });

  describe('#mod', function() {
    it('should modulo the given values', function() {
      expect(fn.mod(2)(1)).to.equal(1);
    });
  });

  describe('#max', function() {
    it('should compare the given values', function() {
      expect(fn.max(1)(2)).to.equal(2);
      expect(fn.max(2)(1)).to.equal(2);
      expect(fn.max(2)(2)).to.equal(2);
    });
  });

  describe('#min', function() {
    it('should compare the given values', function() {
      expect(fn.min(1)(2)).to.equal(1);
      expect(fn.min(2)(1)).to.equal(1);
      expect(fn.min(2)(2)).to.equal(2);
    });
  });

  describe('#and', function() {
    it('should AND the given values', function() {
      expect(fn.and(false)(false)).to.be.false;
      expect(fn.and(false)(true)).to.be.false;
      expect(fn.and(true)(false)).to.be.false;
      expect(fn.and(true)(true)).to.be.true;
    });
  });

  describe('#or', function() {
    it('should OR the given values', function() {
      expect(fn.or(false)(false)).to.be.false;
      expect(fn.or(false)(true)).to.be.true;
      expect(fn.or(true)(false)).to.be.true;
      expect(fn.or(true)(true)).to.be.true;
    });
  });

  describe('#not', function() {
    it('should NOT the given value', function() {
      expect(fn.not(false)).to.be.true;
      expect(fn.not(true)).to.be.false;
    });
  });

  describe('#negate', function() {
    it('should negate the given value', function() {
      expect(fn.negate(1)).to.equal(-1);
      expect(fn.negate(-1)).to.equal(1);
    });
  });

  describe('#eql', function() {
    it('should compare the given values', function() {
      var a = {}, b = {};

      expect(fn.eql(1)(2)).to.be.false;
      expect(fn.eql(2)(2)).to.be.true;

      expect(fn.eql('lorem')('ipsum')).to.be.false;
      expect(fn.eql('lorem')('lorem')).to.be.true;

      expect(fn.eql(a)(b)).to.be.false;
      expect(fn.eql(a)(a)).to.be.true;
    });
  });

  describe('#gt', function() {
    it('should compare the given values', function() {
      expect(fn.gt(1)(2)).to.be.true;
      expect(fn.gt(2)(1)).to.be.false;
      expect(fn.gt(2)(2)).to.be.false;
    });
  });

  describe('#gte', function() {
    it('should compare the given values', function() {
      expect(fn.gte(1)(2)).to.be.true;
      expect(fn.gte(2)(1)).to.be.false;
      expect(fn.gte(2)(2)).to.be.true;
    });
  });

  describe('#lt', function() {
    it('should compare the given values', function() {
      expect(fn.lt(1)(2)).to.be.false;
      expect(fn.lt(2)(1)).to.be.true;
      expect(fn.lt(2)(2)).to.be.false;
    });
  });

  describe('#lte', function() {
    it('should compare the given values', function() {
      expect(fn.lte(1)(2)).to.be.false;
      expect(fn.lte(2)(1)).to.be.true;
      expect(fn.lte(2)(2)).to.be.true;
    });
  });

  describe('#inc', function() {
    it('should increment the given value', function() {
      expect(fn.inc(1)).to.equal(2);
      expect(fn.inc(2)).to.equal(3);
    });
  });

  describe('#dec', function() {
    it('should decrement the given value', function() {
      expect(fn.dec(3)).to.equal(2);
      expect(fn.dec(2)).to.equal(1);
    });
  });

  describe('#range', function() {
    it('should return an array of numbers', function() {
      expect(fn.range(1)(3)).to.eql([1, 2, 3]);
      expect(fn.range(3)(1)).to.eql([3, 2, 1]);
      expect(fn.range(1)(1)).to.eql([1]);
    });
  });

  describe('#map', function() {
    it('should map the given array', function() {
      function f(a) { return a + 1; }
      expect(fn.map(f)([1, 2, 3])).to.be.eql([2, 3, 4]);
    });
  });

  describe('#filter', function() {
    it('should filter the given array', function() {
      function f(a) { return a > 1; }
      expect(fn.filter(f)([1, 2, 3])).to.be.eql([2, 3]);
    });
  });

  describe('#fold', function() {
    it('should fold the given array', function() {
      function f(a, b) { return a + b; }
      expect(fn.fold(f)(0)([1, 2, 3])).to.be.equal(6);
    });
  });

  describe('#scan', function() {
    it('should scan the given array', function() {
      function f(a, b) { return a + b; }
      expect(fn.scan(f)(0)([1, 2, 3])).to.be.eql([0, 1, 3, 6]);
    });
  });

  describe('#append', function() {
    it('should append arrays', function() {
      expect(fn.append([1, 2, 3])([4, 5, 6])).to.be.eql([1, 2, 3, 4, 5, 6]);
    });

    it('should append strings', function() {
      expect(fn.append('foo')('bar')).to.be.equal('foobar');
    });
  });

  describe('#concat', function() {
    it('should concat arrays', function() {
      expect(fn.concat([1, 2, 3], [4, 5, 6], [7, 8, 9])).to.be.eql([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('should concat strings', function() {
      expect(fn.concat('foo', 'bar', 'baz')).to.be.equal('foobarbaz');
    });
  });

  describe('#branch', function() {
    var p = sinon.stub().returns(true),
        f = sinon.spy(),
        g = sinon.spy(),
        a = {};

    it('should return f(a) if p(a) is true', function() {
      fn.branch(p.returns(true), f, g, a);
      expect(p.calledWithExactly(a)).to.be.true;
      expect(f.calledWithExactly(a)).to.be.true;
    });

    it('should return g(a) if p(a) is false', function() {
      fn.branch(p.returns(false), f, g, a);
      expect(p.calledWithExactly(a)).to.be.true;
      expect(g.calledWithExactly(a)).to.be.true;
    });
  });
});
