var fkit=function(n){function r(u){if(t[u])return t[u].exports;var c=t[u]={exports:{},id:u,loaded:!1};return n[u].call(c.exports,c,c.exports,r),c.loaded=!0,c.exports}var t={};return r.m=n,r.c=t,r.p="",r(0)}([function(n,r,t){"use strict";var u=t(1);n.exports=u.extend({Signal:t(2)},[t(3),t(4),t(5)])},function(n){"use strict";n.exports={extend:function(n,r){return r.forEach(function(r){Object.getOwnPropertyNames(r).forEach(function(t){n[t]=r[t]})}),n},slice:Array.prototype.slice}},function(n,r,t){"use strict";function u(n){this.subscribe=n}var c=t(3),e=t(4),i=t(5);u.prototype.constructor=u,u.fromArray=function(n){return new u(function(r,t){n.map(c.unary(r)),t()})},u.fromCallback=function(n){return new u(function(r){n(r)})},u.fromEvent=function(n,r){return new u(function(t){n.on?n.on(r,t):n.addEventListener&&n.addEventListener(r,c.compose(t,i.get("detail")))})},u.fromPromise=function(n){return new u(function(r){n.then(r)})},u.of=function(n){return new u(function(r,t){n&&r(n),t()})},u.prototype.flatMap=function(n){var r=this;return i.copy(this,{subscribe:function(t,u){r.subscribe(function(r){n(r).subscribe(t,function(){})},u)}})},u.prototype.map=function(n){var r=this;return i.copy(this,{subscribe:function(t,u){r.subscribe(c.compose(t,n),u)}})},u.prototype.filter=function(n){var r=this;return i.copy(this,{subscribe:function(t,u){r.subscribe(function(r){n(r)&&t(r)},u)}})},u.prototype.fold=function(n,r){var t=this;return i.copy(this,{subscribe:function(u,c){t.subscribe(function(t){return n=r(n,t)},function(){return u(n),c()})}})},u.prototype.scan=function(n,r){var t=this;return i.copy(this,{subscribe:function(u,c){u(n),t.subscribe(function(t){return n=r(n,t),u(n)},c)}})},u.prototype.merge=c.variadic(function(n){var r=this;return i.copy(this,{subscribe:function(t,u){var c=0,e=function(){++c>n.length&&u()};[r].concat(n).map(function(n){n.subscribe(t,e)})}})}),u.prototype.split=function(n){function r(){u||t.subscribe(function(n){o.map(c.applyRight(n))},function(){f.map(c.apply())}),u=!0}var t=this,u=!1,o=[],f=[],a=e.range(0,n-1).map(function(){return i.copy(t,{subscribe:function(n,t){o.push(n),f.push(t),r()}})});return a},u.prototype.zip=c.variadic(function(n){var r=this;return i.copy(this,{subscribe:function(t,u){var c=!1,e=0,i=new Array(n.length),o=function(r,u){i[u]=r,++e>n.length&&(t(i),e=0)},f=function(){c||u(),c=!0};[r].concat(n).map(function(n,r){n.subscribe(function(n){o(n,r)},f)})}})}),n.exports=u},function(n,r,t){"use strict";function u(n){function r(u){return function(){var c=u.concat(o.slice.call(arguments,0));return c.length>=t?n.apply(this,c):r(c)}}var t=n.length;return 1>=t?n:r([])}function c(n){var r=n.length;return 1>r?n:1===r?function(){return n.call(this,o.slice.call(arguments,0))}:function(){var t=Math.max(r-arguments.length-1,0),u=new Array(t),c=o.slice.call(arguments,0,r-1),e=o.slice.call(arguments,n.length-1);return n.apply(this,c.concat(u).concat([e]))}}function e(n,r){return n.call(this,r)}function i(n){return function(r,t){return n(t,r)}}var o=t(1);n.exports={apply:u(e),applyRight:u(i(e)),compose:c(function(n){return function(r){return n.reduceRight(function(n,r){return e(r,n)},r)}}),flip:i,id:function(n){return n},"const":function(n){return function(){return n}},curry:u,unary:function(n){return 1===n.length?n:function(r){return n.call(this,r)}},binary:function(n){return 2===n.length?n:function(r,t){return n.call(this,r,t)}},variadic:c,tap:u(function(n,r){return n.call(this,r),r})}},function(n,r,t){"use strict";function u(n,r){return n.concat(r)}function c(n){var r="string"==typeof n[0]?"":[];return e(u,r,n)}function e(n,r,t){return t.reduce(n,r)}function i(n,r,t){return t.reduceRight(n,r)}function o(n){return"string"==typeof n?n.split(""):n}{var f=t(3);t(1)}n.exports={add:f.curry(function(n,r){return r+n}),sub:f.curry(function(n,r){return r-n}),mul:f.curry(function(n,r){return r*n}),div:f.curry(function(n,r){return r/n}),mod:f.curry(function(n,r){return r%n}),min:f.curry(function(n,r){return Math.min(n,r)}),max:f.curry(function(n,r){return Math.max(n,r)}),and:f.curry(function(n,r){return n&&r}),or:f.curry(function(n,r){return n||r}),not:function(n){return!n},negate:function(n){return-n},eql:f.curry(function(n,r){return n===r}),gt:f.curry(function(n,r){return r>n}),gte:f.curry(function(n,r){return r>=n}),lt:f.curry(function(n,r){return n>r}),lte:f.curry(function(n,r){return n>=r}),inc:function(n){return n+1},dec:function(n){return n-1},range:f.curry(function(n,r){var t=Math.abs(r-n)+1,u=r>n?1:-1;return Array.apply(null,Array(t)).map(function(r,t){return n+t*u})}),map:f.curry(function(n,r){return r.map(n)}),filter:f.curry(function(n,r){return r.filter(n)}),fold:f.curry(e),foldRight:f.curry(i),scan:f.curry(function(n,r,t){var u=[r];return e(function(r,t){return f.tap(u.push.bind(u),n(r,t))},r,t),u}),scanRight:f.curry(function(n,r,t){var u=[r];return i(function(r,t){return f.tap(u.push.bind(u),n(r,t))},r,t),u}),append:f.curry(u),concat:f.variadic(c),concatMap:f.curry(function(n,r){return c(o(r).map(n))}),head:function(n){return n[0]},tail:function(n){return n.slice(1)},init:function(n){return n.slice(0,n.length-1)},last:function(n){return n[n.length-1]},reverse:function(n){var r="string"==typeof n?"":[];return i(u,r,o(n))},branch:f.curry(function(n,r,t,u){return n(u)?r(u):t(u)})}},function(n,r,t){"use strict";function u(n,r){return e.extend(new n.constructor,[n].concat(r))}var c=t(3),e=t(1);n.exports={copy:c.variadic(u),get:c.curry(function(n,r){return r[n]}),set:c.curry(function(n,r,t){var c={};return c[n]=r,u(t,[c])})}}]);