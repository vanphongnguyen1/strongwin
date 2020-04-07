// a++ chả về giá trị a trước khi tăng
// ++a chả về giá trị a sau khi tăng
var a = 10;
var b = a++ + a++ * --a / a++ + ++a;
//10 + 11 * 11/11+13=34
console.log(b);