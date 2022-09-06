const showAlert = () =>{

    // condition applied alert
    const num = Math.random()*10;
    console.log(num);
if(num < 5){
    alert('How about you today?');
}   
}

// giving decision yes or no

const askSomething = ()=>{
    const decision = confirm('Are you coming to school?');
   console.log(decision);
   if(decision === true){
    alert('tomorrow no dress code');
   }
   else{
    alert('take your time');
   }
}

// using promt giving input
const getUserInfo = ()=>{
    const name = prompt('tell us your name');
    console.log(name);
    // check value true using double exclamatory sign
    if(!!name){
        console.log('Welcome here', name);
    }
}