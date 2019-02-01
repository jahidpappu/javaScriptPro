
const bio = ['jahid',35, 'web developer','"javascript"']

let addData = "i am " + bio[0] + " and" + " bio[1] " + " i'am a" + bio[2] + "i love " + bio[3]

console.log(addData);

const demoProfile = {
  firstName : 'jahid',
  age: 35,
  profession: 'web Developer',
  'previous prof': 'Engineer'
}
demoProfile.age

//empty object and then add to import PropTypes from 'prop-types'

const profile = {}
profile.name = 'jahid';
profile.age = 25;
profile.city = 'CTG';

//all at once

const person = {
  name : 'jahid',
  age : 35,
  city : 'CTG'
}

// another way of initializing an object

const prof = new Object();
prof.name = 'shamim';
prof.age = 35;
prof.city = 'CTG';

let junkObject = {
  age: 27,
  color: "purple",
  isHungry: true,
  friends: ['Sumon','juwel'],
  pet:{
    name: "Money",
    secies: "dOG",
    age: 2
  }
};


//access a property and reassain it

const newProfile = {
  name: 'shamim',
  age: 25,
  profession: 'web developemnt',
};

//to update age
newProfile["age"] += 1;

//to add properties/key

newProfile.city = "Koriya";


const dProfile1 = { 
  name: 'jahid', 
  age: 35, 
  pref: 'web development',
  lang: 'javascript'
  };

let storeData = 'i am ' + dProfile1.name + ' and ' + dProfile1.age + ' i am a' + dProfile1.pref + 'i love' + dProfile1.lang;



