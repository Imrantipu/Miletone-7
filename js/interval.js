function doSomething(){
    console.log('third')
}
console.log('first')
console.log('second')
//--direct function write into setTimeout
//setTimeout-asynchronous
 /* setTimeout(()=>
{
    console.log('third')
}); */
//fetch-asynchronous 
 /* fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    console.log('placeholder')
   return response.json()
}) 
  .then(json => console.log(json)) */
//setTimeout(doSomething)

//setTimeout-1bar colbe
  let seconds = 0;
  let intervalId = setInterval(() => { //setInterval bar bar cholbe
  console.log(++seconds);
  if(seconds == 10)
  {
    clearInterval(intervalId);
  }
}, 500)
  console.log('fourth')
