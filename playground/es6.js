// first method

const getFirstName=(fullname)=>{
    return fullname.split(' ')[0];
}

//second method

const getLastName=(fullname)=> fullname.split(' ')[1];

console.log(getFirstName('Gaurav Kumar'));

console.log(getLastName('Gaurav Kumar'));

// argument object no longer bound with es6 arrow functions

const add=(a,b)=>{
    //console.log(arguments)
    return a+b;
}

console.log(add(2,3));

// this keyword no longer bound with es6

// const user={
// name:'Gaurav',
// cities:['gaya','patna','banglore','pune'],
// placesLived(){
//     return this.cities.map((city) => this.name + 'has live in ' + city);
// }   
// };

// console.log(user.placesLived());

const multiplier={
    numbersArray:[1,4,6],
    multiply(multiplyBy){
        return this.numbersArray.map((number)=> number*multiplyBy);
    }
}

console.log(multiplier.multiply(10));


