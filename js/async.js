function doSAomething(){
    console.log('third');
}

console.log('first');
console.log('second');
// doSAomething();
setTimeout(doSAomething); /// this line will exicute asynsronously
setTimeout(()=>{console.log('third')},5000); // used arrow function and delay time
console.log('fourth');
console.log('fifth');
