var fkit=F=function(n){function r(u){if(t[u])return t[u].exports;var e=t[u]={exports:{},id:u,loaded:!1};return n[u].call(e.exports,e,e.exports,r),e.loaded=!0,e.exports}var t={};return r.m=n,r.c=t,r.p="",r(0)}([function(n,r,t){"use strict";var u=t(4);n.exports=u.extend({Signal:t(14)},[t(1),t(10),t(8),t(13),t(9),t(15)])},function(n,r,t){"use strict";function u(n){return n.reduce(function(n,r){return n.concat(r)},[])}function e(n){function r(u,e){return function(){var c=u.concat(arguments.length>0?o.slice.call(arguments,0):void 0);return c.length>=t?n.apply(this,c):r(c,e+1)}}var t=n.length;return 1>=t?n:r([],0)}function c(n){var r=n.length;return 1>r?n:1===r?function(){return n.call(this,u(o.slice.call(arguments,0)))}:function(){var t=Math.max(r-arguments.length-1,0),u=new Array(t),e=o.slice.call(arguments,0,r-1),c=o.slice.call(arguments,n.length-1);return n.apply(this,e.concat(u).concat([c]))}}var i,o=t(4);i=n.exports={apply:e(function(n,r){return n(r)}),apply2:e(function(n,r,t){return n(r,t)}),apply3:e(function(n,r,t,u){return n(r,t,u)}),applyRight:e(function(n,r){return r(n)}),compose:c(function(n){return function(r){return n.reduceRight(function(n,r){return r(n)},r)}}),flip:function(n){return function(r,t){return n(t,r)}},id:function(n){return n},"const":function(n){return function(){return n}},curry:e,unary:function(n){return 1===n.length?n:i.apply(n)},binary:function(n){return 2===n.length?n:i.apply2(n)},variadic:c,tap:e(function(n,r){return n(r),r}),compare:e(function(n,r){return n>r?1:r>n?-1:0})}},function(n,r,t){"use strict";var u,e=t(1);u=n.exports={mempty:function(n){return void 0===typeof n||null===n||"string"!=typeof n[0]&&"string"!=typeof n?[]:""},pure:function(n){return void 0!==typeof n&&null!==n&&"string"==typeof n[0]?n:[n]},toArray:function(n){return"string"==typeof n?n.split(""):n},append:e.curry(function(n,r){return"string"==typeof r?r+n:r.concat(n)}),prepend:e.curry(function(n,r){return"string"==typeof r?n+r:[n].concat(r)}),surround:e.curry(function(n,r,t){return u.append(r,u.prepend(n,t))}),head:function(n){return n[0]},tail:function(n){return n.slice(1)},init:function(n){return n.slice(0,n.length-1)},last:function(n){return n[n.length-1]},length:function(n){return n.length},empty:function(n){return 0===n.length}}},function(n,r,t){"use strict";function u(n){return c.toArray(n).reduce(i.flip(c.append),c.mempty(n))}var e,c=t(2),i=t(1);e=n.exports={concat:i.variadic(u),concatMap:i.curry(function(n,r){return u(c.toArray(r).map(n))}),fold:i.curry(function(n,r,t){return c.toArray(t).reduce(n,r)}),foldRight:i.curry(function(n,r,t){return c.toArray(t).reduceRight(i.flip(n),r)}),scan:i.curry(function(n,r,t){var u=[r];return e.fold(function(r,t){return i.tap(u.push.bind(u),n(r,t))},r,t),u}),scanRight:i.curry(function(n,r,t){var u=[r];return e.foldRight(function(r,t){return i.tap(u.unshift.bind(u),n(r,t))},r,t),u})}},function(n){"use strict";n.exports={extend:function(n,r){return r.forEach(function(r){Object.getOwnPropertyNames(r).forEach(function(t){n[t]=r[t]})}),n},slice:Array.prototype.slice}},function(n,r,t){"use strict";var u,e=t(2),c=t(1),i=t(3);u=n.exports={array:function(n){return Array.apply(null,Array(n))},pair:c.curry(function(n,r){return[n,r]}),range:c.curry(function(n,r){return u.array(r).map(function(r,t){return n+t})}),replicate:c.curry(function(n,r){return i.concat(u.array(n).map(function(){return e.pure(r)}))})}},function(n,r,t){"use strict";var u=t(2),e=t(1),c=t(3);n.exports={map:e.curry(function(n,r){return"string"==typeof r?c.concatMap(n,r):r.map(n)}),reverse:function(n){return u.toArray(n).reduce(e.flip(u.prepend),u.mempty(n))},intersperse:e.curry(function(n,r){function t(r){return u.empty(r)?u.mempty(r):c.concat(n,u.head(r),t(u.tail(r)))}return c.concat(u.head(r),t(u.tail(r)))}),applyAll:e.curry(function(n,r){return n.map(e.applyRight(r))})}},function(n,r,t){"use strict";var u,e=t(1),c=t(3),i=t(8),o=t(6);u=n.exports={elem:e.curry(function(n,r){return r.indexOf(n)>=0}),filter:e.curry(function(n,r){return"string"==typeof r?c.concatMap(function(r){return n(r)?r:""},r):r.filter(n)}),all:e.curry(function(n,r){return u.filter(n,r).length===r.length}),any:e.curry(function(n,r){return u.filter(n,r).length>0}),whereAll:e.curry(function(n,r){return o.applyAll(n,r).reduce(i.and,!0)}),whereAny:e.curry(function(n,r){return o.applyAll(n,r).reduce(i.or,!1)})}},function(n,r,t){"use strict";var u=t(1);n.exports={and:u.curry(function(n,r){return r&&n}),or:u.curry(function(n,r){return r||n}),not:function(n){return!n},branch:u.curry(function(n,r,t,u){return n(u)?r(u):t(u)})}},function(n,r,t){"use strict";var u,e=t(1),c=t(4);u=n.exports={copy:e.variadic(function(n,r){return c.extend(new n.constructor,[n].concat(r))}),get:e.curry(function(n,r){return r[n]}),set:e.curry(function(n,r,t){var e={};return e[n]=r,u.copy(t,e)}),pluck:e.variadic(function(n,r){return r.reduce(function(r,t){return u.set(t,u.get(t,n),r)},{})})}},function(n,r,t){"use strict";var u=t(4);n.exports=u.extend({},[t(2),t(5),t(3),t(6),t(7),t(11),t(12)])},function(n,r,t){"use strict";var u,e=t(2),c=t(1),i=t(3),o=t(7);u=n.exports={union:c.curry(function(n,r){return i.fold(function(n,r){return o.elem(r,n)?n:e.append(r,n)},n,r)}),intersect:c.curry(function(n,r){return i.fold(function(r,t){return o.elem(t,n)?e.append(t,r):r},e.mempty(n),r)}),without:c.curry(function(n,r){return i.fold(function(r,t){return t===n?r:e.append(t,r)},e.mempty(r),r)}),difference:c.curry(function(n,r){return i.fold(c.flip(u.without),r,n)})}},function(n,r,t){"use strict";var u,e=t(2),c=t(5),i=t(1);u=n.exports={zipWith:i.curry(function(n,r,t){var u=Math.min(r.length,t.length);return e.toArray(r.slice(0,u)).map(function(r,u){return n(r,t[u])})}),zip:i.curry(function(n,r){return u.zipWith(c.pair,n,r)}),unzip:function(n){var r=e.mempty(n[0]);return n.reduceRight(function(n,r){var t=r[0],u=r[1],c=n[0],i=n[1];return[e.prepend(t,c),e.prepend(u,i)]},c.pair(r,r))}}},function(n,r,t){"use strict";var u=t(1);n.exports={add:u.curry(function(n,r){return r+n}),sub:u.curry(function(n,r){return r-n}),mul:u.curry(function(n,r){return r*n}),div:u.curry(function(n,r){return r/n}),mod:u.curry(function(n,r){return r%n}),min:u.curry(function(n,r){return Math.min(r,n)}),max:u.curry(function(n,r){return Math.max(r,n)}),negate:function(n){return-n},eql:u.curry(function(n,r){return r===n}),gt:u.curry(function(n,r){return r>n}),gte:u.curry(function(n,r){return r>=n}),lt:u.curry(function(n,r){return n>r}),lte:u.curry(function(n,r){return n>=r}),inc:function(n){return n+1},dec:function(n){return n-1}}},function(n,r,t){"use strict";function u(n){this.subscribe=n}var e=t(5),c=t(1),i=t(9);u.prototype.constructor=u,u.fromArray=function(n){return new u(function(r,t){n.map(c.unary(r)),t()})},u.fromCallback=function(n){return new u(function(r){n(r)})},u.fromEvent=function(n,r){return new u(function(t){n.on?n.on(r,t):n.addEventListener&&n.addEventListener(r,c.compose(t,i.get("detail")))})},u.fromPromise=function(n){return new u(function(r){n.then(r)})},u.of=function(n){return new u(function(r,t){n&&r(n),t()})},u.prototype.concatMap=function(n){var r=this;return i.copy(this,{subscribe:function(t,u){r.subscribe(function(r){n(r).subscribe(t,function(){})},u)}})},u.prototype.map=function(n){var r=this;return i.copy(this,{subscribe:function(t,u){r.subscribe(c.compose(t,n),u)}})},u.prototype.filter=function(n){var r=this;return i.copy(this,{subscribe:function(t,u){r.subscribe(function(r){n(r)&&t(r)},u)}})},u.prototype.fold=function(n,r){var t=this;return i.copy(this,{subscribe:function(u,e){t.subscribe(function(t){return n=r(n,t)},function(){return u(n),e()})}})},u.prototype.scan=function(n,r){var t=this;return i.copy(this,{subscribe:function(u,e){u(n),t.subscribe(function(t){return n=r(n,t),u(n)},e)}})},u.prototype.merge=c.variadic(function(n){var r=this;return i.copy(this,{subscribe:function(t,u){var e=0,c=function(){++e>n.length&&u()};[r].concat(n).map(function(n){n.subscribe(t,c)})}})}),u.prototype.split=function(n){function r(){u||t.subscribe(function(n){o.map(c.applyRight(n))},function(){f.map(c.applyRight())}),u=!0}var t=this,u=!1,o=[],f=[],a=e.range(0,n).map(function(){return i.copy(t,{subscribe:function(n,t){o.push(n),f.push(t),r()}})});return a},u.prototype.zip=c.variadic(function(n){var r=this;return i.copy(this,{subscribe:function(t,u){var e=!1,c=0,i=new Array(n.length),o=function(r,u){i[u]=r,++c>n.length&&(t(i),c=0)},f=function(){e||u(),e=!0};[r].concat(n).map(function(n,r){n.subscribe(function(n){o(n,r)},f)})}})}),n.exports=u},function(n,r,t){"use strict";var u=t(1);n.exports={toUpper:function(n){return n.toUpperCase()},toLower:function(n){return n.toLowerCase()},replace:u.curry(function(n,r,t){return t.replace(n,r)})}}]);