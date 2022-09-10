/* 
 8 ways to get Undefine
1. variable that is not initialized will give undefined
2. function with no return 
3. parameter that is not passed will be undefined
4. if return has nothing on the right side will return undefined
5. property that doesn't exists on an object will give you undefined
6. accessing array elements outside of the index range 
7. deleting an element inside an array
8. set a value directly to undefined
*/

// 1. variable that is not initialized will give undefined
let first ;     // number 1

// number 2 
// 2. function with no return 
function second(a, b){
    const total = a + b;
}

const result = second();

//  number 3 : third called only rwo parameter other two will be undefined
// 3. parameter that is not passed will be undefined
function third(a, b, c, d){
    const total = a+b+c+d;
    console.log(a, b, c, d);
}

third(2, 5);

// number 4: noNegative function surrden return will undefine

function noNegative(a, b){
    if(a < 0 || b< 0){
        return  // no value matched but function returned
    }
    return a + b;
}

const total = noNegative(2,-5);

// number 5: 
const fifth = {id: 2, name: 'ponchom', age: 40}
// console.log(fifth.age, fifth.salary);

// number 6 and 7:
const sixth = [4, 89, 87, 56, 54];
// you should not do it. Instead use splice
delete sixth[1];
// console.log(sixth[1], sixth[5], sixth[200]);
// console.log(sixth);

//  number 8:
const eighth = undefined;
//  better to use null
const ninth = null;

const data = {results: [], updated: null}

// console.log(typeof undefined);
console.log(typeof null);