const movies = [
  {
    id: 1,
    name: 'Demo movie name',
    rating: 5,
    category: 'Sci-fi',
  },
  {
    id: 2,
    name: 'Demo movie name 2',
    rating: 6,
    category: 'drama',
  
  },
  {
    id: 3,
    name: 'Demo movie name 2',
    rating: 6,
    category: 'drama',
   },
  {
    id: 4,
    name: 'Demo movie name 4',
    rating: 6,
    category: 'drama',
  },
  {
    id: 5,
    name: 'Demo movie name 5',
    rating: 6,
    category: 'drama',
   },
  {
    id: 6,
    name: 'Demo movie name 6',
    rating: 6,
    category: 'drama',

  },
  {
    id: 7,
    name: 'Demo movie name 7',
    rating: 6,
    category: 'drama',

  },
  {
    id: 8,
    name: 'Demo movie name 8',
    rating: 6,
    category: 'drama',

  },
  {
    id: 9,
    name: 'Demo movie name 9',
    rating: 6,
    category: 'drama',

  },
  {
    id: 10,
    name: 'Demo movie name 10',
    rating: 6,
    category: 'drama',
  }

]

const moviesIndex = movies[2];

const textShow = moviesIndex.name + 'got' + moviesIndex.rating + 'rating and under' + moviesIndex.category + 'category' ;



function profileBuilder(){
  console.log('jahid hossain');
}

function dyInput(firstName, lastName, age, job){
  console.log( ` My name is ${firstName} ${lastName}. I am ${age} . i word as ${job} ` );
}
dyInput();