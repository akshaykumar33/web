//###console
// console.table({name:'abc',age:21})
// console.info('abc')
// console.warn('hey me')
// console.error("it's error");
// console.timeLog()
// console.count();
// console.group("<li>")
// console.clear();
// console.timeLog(1)
// https://medium.com/theleanprogrammer/javascript-explore-different-types-of-console-methods-73c09e526d58

//#PRIMITIVE TYPES
//1.Number
//2.Boolean
//let abc(undefined by compiler)
//let xyz=null(developer)
//undefined set by js compiler and nul is set by developer
//# sstrict equality and non equality and loose equality,non equality
// const person={
//     1:"ten",
//     "name":'abc',
// }
// console.log(person[1],person.name)
//function decleration
//function abc(){}
//function expression 
//const abc=function (){}
//when we provide function as an argument to other function that 
//function is known as callback function
//scope in js refers to the current context of code,
//which determines the accessibility of variables of js
//there are two types of scopes in js
//global scope variables are those declared outside of a block
//local scope variables are those declared inside of a block
//JSON
//only doble quotes{"name":123}
//object to json using JSON.stringify
//string to object using JSON.parse
//date
//new Date(y,m,d,h,min,sec,mills)
//.setDate(),.getDate(),and different functions
//setInterval ->after specified interval or duration it will do again and again
//setInterval(()=>console.log('hey'),2000(ms))
//setTimeout to work after specifed delay of time
//setTimeout(()=>console.log('executes after certain millisecon'),3000ms)
//const intervalId=setInterval(()=>console.log('excutes after evry 1 second'),100)
//setTimeout(()=>{clearInterval(intervalId);console.log('stops after 10sec')},10000)
//function f(){return [1,2,3]}
//const [a,,b]=f();
//const [a,...b]=f()
//const ob={"x":12,"y":34};
//const {x:new1,y:new2}=ob//this is a process of renaming
//let {a,b,...rest}={a:100,b:20,c:300,d:400,e:500}
//const obj={title:'my menu',items:['items1','items2']}
//function f({title,width:w=200,height:h=100,items:[item1,item2]}){}
//f(obj);
//for...in is used to iterate over the enumerable properties of an object 
//it's a way to loop through keys of an object
//for...of is used to iterate over array,sets,map,strings and more
//it's a way to loop through and get values if elements directly
//rather than dealing with induces or keys
//forEach modify array but.map is creating a new array
//symbol in es6 is a immutable primitive data types is often used as an 
//identifier for object properties to avoid potential naming conflicts
//unlike  strings or numbers,symbols are guaranteed to be unique when u create a symbol,
//it is unique and cannot be recreated or changes .This uniquness ensures that symbols will not collide with
//other property names,even if they have the same string represenatation
/**
 * const symbol1=Symbol("name")
 * onst symbol2=Symbol("name")
 * const hux={}
 * hux.age=19;
 * hux["geneder"]='male'
 * hux['gender']='female'--overwritten
 * hux[symbol1]='alex' --here two different 
 * hux[symbol2]='john
 */
//js is a versatile and dynamic programming language that supports multiple
// paradigms,including procedural,functional and object oriented programing 
// while js is not a purely oops language,but it does provide tools and features to implement oop
//Object.create() method crate a new object ,using an existing object as the prototype of newly created object.
//prototype Inheritance
// function Animal(name,breed){
//     this.name=name;
//     this.breed=breed;
// }
// const animal=new Animal("abc","xyz")
// Animal.prototype.sound=function (){
//     return"barks"
// }
// function Dogs(name,breed){
//     Animal.call(this,name)
//     this.breed=breed;
// }

// Dogs.prototype=Object.create(Animal.prototype);
/**
 * class person{
 * constructor(name,id)
 * {
 * this.name=name;
 * this.id=id;
 * }
 * greet(){
 * return "greetings"}
 * }
 * class programmer extends person{
 * constructor(name,id,design){
 * super(name,id)
 *  this.design=design
 * }
 * }
 * function fields(pub,pro,priv){
 * this.pub=pub;
 * const ._priv=priv;
 * const .pro=pro;
 * this.publicMethod=function(){
 * return this.publicfield
 * }
 * make private using closure
 * function _privateMethod(){
 * return _priv;
 * }
 * function _protectedMethod(){
 * return _pro;
 * }
 * this.accessprotectMethod=function(){
 *  return _protectedMethod()
 * }
 * }
 * //#encapsulation
 * const counter(){
 * let _count=0;
 *  this.increment=function (){
 * return _count++;}
 * }
 * //console.log(counter._count)--as undefined
 * //polymorphism
 * class Animal{
 * constructor(name){
 * this.name=name;}
 * makeSound(){
 * return 'sounds'}}}
 * class Dog extends Animal(){
 * 
 * constructor(name){
 * super(name)
 * 
 * }
 * makeSound(){
 * return 'bark'}}
 * #Promises
 * //const pro=new Promise((res,rej)=>{
 * let req=true;
 * req==true?resolve('Request Successful'):reject("request rejected")
 * }).then((v)=>console.log(v))
 * .catch((err)=>console.error(err));
 * function fetchDatafromServer(){
 * return new Promise((res,rej)=>{
 * resolve("user data recived from server")
 * },4000)}
 * 
 * async function getUser(){
 * try{
 * const data=await fetchDatafromServer()
 * console.log(data)
 * }
 * catch(err){
 * console.error("failed fecthing",err)
 * }
 * }
 */