
function multiply(){
    console.log(a,b,c);
    
}
let a =3;
    const b =4;
    var c = 10;
multiply();


function test(a,b,c,d){
    console.log(a + b + c);
}

test(2,4,5); 

function test(a){
    return function(b){
        return function(c){
            return function(d){
                return a + b + c + d;
            }
        }
    }
}

console.log(test(3)(4)(6)(9));

sum(2,4,5)


function sum(a){
    return function(b){
        return function(c){
            return a + b + c;
        }
    }
}

const finalValue = sum(2)(3)(4);
console.log(finalValue);


let arr = [1,5,6,7,1,5,7];
console.log([...new Set(arr)]);

function removeDuplicates(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates(arr));

const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}