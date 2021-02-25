// SCOPE
// const message = 'asdasdas';
// console.log(message)

// if(true){
//   const message='heeeyy'
// }
// console.log(message)

// {
//   const message = 'heeey'
//   console.log(message)
// }

// console.log(message)

// no strict scope
// if(true) {
//   var hello = 'hey'
// }
// console.log(hello)


// // strict scope
// function run() {
//   var message = 'ruuuuun!'
//   // console.log(message)
// }
// console.log(message)


// CLOSURES

// function globalFunction() {
//   let b = 10;

//   function innerFunction() {
//     let a = 20;
//     console.log("a = " + a + " and b = " + b);
//     a++;
//     b++;
//   }

//   return innerFunction;
// }

// let marcCase = globalFunction();
// let lukeCase = globalFunction();



// marcCase() // a = 20 b = 10
// marcCase() // a = 20 b = 11
// marcCase() // a = 20 b = 12
// lukeCase() // a = 20 b = 10


// let person = {
//   name: 'Marc',
//   age: 18,
//   sayHi: () => {
//     return `hey! ${this.name}, are you really  ${this.age}??`;
//   }
// }

// person.from = 'Barcelona'

// console.log(person)


// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }


// let myself = new Person('Marc', 18)
// Person.prototype.from = 'Barcelona'


// console.log(Person)



// async componentDidMount() {
//   let myData = await axios('url')
//   this.setState({
//     data: myData
//   })
// }


// High order functions

// function moneyPrefix(prefix) {
//   return function(amount) {
//     return `${prefix} ${amount}`
//   }
// }

// const withDollarSign = moneyPrefix('$')
// const myWallet = withDollarSign('22')

// console.log(myWallet)



// event propagation

{/* <div onClick={() => console.log('outer div')}>
  <div onClick={() => console.log('middle div')}>
    <div onClick={() => console.log('internal div')}>
      Click here
    </div>
  </div>
</div>

e.stopPropagation() */}


// Pure functions

// I want the result to be 6

// const add = (firstNumber,secondNumber) => {
//   return x + y
// };
// add(2,4) // 6

// // -----

// let initialValue = 2;
// const add = (y) => initialValue+=y;
// add(4) // 6



// function pow(number, times){
//   console.log('inside of fn', number, times)
//   if(times === 1) {
//     console.log('inside of the if', number, times)
//     return number;
//   }
//   return number * pow(number, times-1)
// }



// console.log(pow(2,3))  // 8 // 2 * 2 * 2


// pow(2, 3){
//   return 2 * pow(2, 2)
// }
// pow(2,2) {
//   return 2 * pow(2,1)
// }
// pow(2,1) {
//   return 2;
// }

// pow(2,3) = 2 * pow(2, 2) = 2 * 2 * pow(2, 1) = 2 * 2 * 2





// const port = undefined || 5000

// console.log(port)


// Coalescing operator

// const test = undefined ?? 5000

// console.log(test)



// let world = {
//   countries: [
//     {
//       name: 'Spain',
//       details: {
//         tipicalFood: 'paella',
//         population: '6476276523'
//       }
//     },
//   ]
// }

// console.log(world?.countries[1]?.details?.tipicalFood)


// console.log(myBigObject?.details?.someMethod())



// MAP is a collection of data items with a certain key, like an object. BUT those items could have keys of ANY type

// let map = new Map()

// map.set('name', 'Marc');
// map.set(1, 'first');
// map.set(1, '23423r');
// map.set(1, 'qerwefwef');
// map.set(1, 'wecrvvrvv');
// map.set(1, 'sssss');
// map.set(1, 'r2f2df213d2f');

// map.set(true, 'true boolean');

// console.log(map.size)


// let myself = {
//   name: 'Marc'
// }

// map.set(myself, 18)

// console.log(map.values())



// // SET is a collection, BUT each value will happen ONLY once

// let set = new Set()

// let marc = {
//   name: 'Marc'
// }

// let luke = {
//   name: 'Luke'
// }

// let aya = {
//   name: 'Aya'
// }

// set.add(marc)
// set.add(luke)
// set.add(aya)
// set.add(marc)
// set.add(luke)
// set.add(luke)

// console.log(set.size)

// for(let user of set) {
//   console.log(user.name)
// }





// [null, undefined, '', 0, -1].map(function (x) {
//   console.log(!!x);
// });
// false, false, false, false, true


// var Cat = { say: 'meow' };
// console.log(Cat === { say: 'meow' });
// false


// var Cat = {
//   name: 'Nyan Cat',
//   greeting: 'Hello, my name is: ' + this.name,
//   speak: function () {
//     console.log(this.greeting);
//   },
// };
// Cat.speak();

// Hello my name is:

// You can not access the this context without a function declaration


// function fn(a) {
//   if (a.length === 0) {
//     return 0;
//   } else {
//     return a[0] + fn(a.slice(1));
//   }
// }
// var firstThreeNaturals = [1, 2, 3];
// var result = fn(firstThreeNaturals);
// console.log(result);
// 1 + 2 + 3 + 0



// function add(a) {
//   return function (b) {
//     return a + b;
//   };
// }
// var fn = add(2);
// var result = fn(3);
// console.log(result);

// 5



// (function () {
//   console.log('a');
// })();
// // anonymous fn called inmediately

// var log1 = function () {
//   console.log('a');
// };
// log1();
// // anonymous fn called with the variable name

// function log2() {
//   console.log('a');
// }
// log2();
// // fn declaration and called it with it's name


// (function (a,b) {
//   var a = (b = 3);
// })();
// console.log(a, b);

// a is not defined, scope problem


// var fib = [1, 2, 3, 5];
// for (var i = 0; i < fib.length; i++) {
//   console.log('hey', i)
//   setTimeout(function () {
//     console.log(i, fib[i]);
//   }, 3000);
// }

// 4, undefined
// 4, undefined
// 4, undefined
// 4, undefined


