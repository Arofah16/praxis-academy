const _ =require("underscore");     //harus dipanggil terlebih dahulu nama librarinya, disini pake underscore.js

var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);

console.log(sum);