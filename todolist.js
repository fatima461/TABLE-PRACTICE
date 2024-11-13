let myArray=[1,'tayyaba',{text:'Something'}]

console.log(Array.isArray(myArray))

console.log(myArray.length);

//myArray.splice(0,2)
//console.log(myArray);

myArray.push('purple');


console.log(myArray[2]);

let mixedBag = ['book',5,true,['nested','array']]
console.log(mixedBag);

for (let i=0; i <mixedBag.length; i++){
    console.log(mixedBag[i]);
}
mixedBag.push('false','6');