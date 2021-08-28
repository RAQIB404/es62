//object destructing
const fruits =['orange','banana','lemon']
const [fruits,second,third]=fruits;
console.log(first)

const number =[1,2,3,4]
const numberTwo=[6,7,8,9]

const combine =[...number,...numberTwo]
console.log(combine)

const first ={name:'yasmeen'}
const second ={job:'development'}
const combine={...first,place:'karnataka',...second}
console.log(combine)