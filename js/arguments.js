// array like object
function sum(a, b, c){
    const args = [...arguments];
    // console.log(args);
    const result = a + b + c;
    return result;
}
// console.log(arguments);
const total = sum(45, 89, 12, 45, 98, 56);
// console.log(total);
// how many  parameter  diclared  in this case sum function has only three parameter
console.log(sum.length);