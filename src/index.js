import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import taskList from './tasklist';

ReactDOM.render(<App />, document.getElementById('root'));

const averageScore =  taskList.filter( scoreFilter => (scoreFilter.pageScore) > 50 );

const indexArray = averageScore.map( findex => findex.id );

console.log(indexArray);


var numbers = [3, 4, 12, 23, 16];


var doubleNumber = numbers.map( x => x*2);

console.log("doubleNumber" + " " + doubleNumber);

// Fitler function (we can also use create forech function and then add if statment to check the conditions. )
const filterNumber = numbers.filter(num => num < 12 );

console.log("filterNumber" + " " + filterNumber);

// Reduce function

const reduceNumber = numbers.reduce( (acc, cur) => acc += cur );

console.log("reduceNumber" + " " + reduceNumber);

// find

const newFind = numbers.find( num => num > 12 );



//Find Index
const newNumber = numbers.findIndex( num => num > 12);

console.log("Find the biger number of the 12th is" + " " + newFind + "." + " " + "Find Index valu for the same" + " " + newNumber );




