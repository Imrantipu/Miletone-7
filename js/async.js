function doSAomething(){
    console.log('third');
}

console.log('first');
console.log('second');
// doSAomething();
// setTimeout(doSAomething); /// this line will exicute asynsronously
// setTimeout(()=>{console.log('third')},5000); // used arrow function and delay time

// fetch data 
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))

//   use consol log in fetch operation
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {console.log('response recevied');
return response.json();
})
  .then(json => console.log(json))

console.log('fourth');
console.log('fifth');
