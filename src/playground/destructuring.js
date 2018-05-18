const person={
    age:28,
    location:{
        city:'BLR',
        temp:88
    }
};

// default values in es6 destructuring
const {name='Guest',age}=person;
// change name
const {city,temp:temperature}=person.location

console.log(`${name} is ${age} years old.`);

if(temperature && city)
{
    console.log(`its ${temperature} in ${city}`);
}

const book={
    title:'Ego is the Enemy',
    author:'Ryan Holiday',
    publisher:{
        name:'Penguin'
    }
};

const {name:publisherName='Self-Published'}=book.publisher;

console.log(publisherName);