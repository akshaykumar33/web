//js
/*// Ecmascript->is made for general purpose scripting language specification or standard
//V8 in chrome,spiderMonkey in firefox and chakra in Edge
//if want to run js before html load than use in head and if wanted after loading html than use in body
 <script async src=""></script>  by default we have async 
but if we use defer so it will read all html first and than apply js pre readed
It's helpful because if js is impacting html tags in body and script is in head so without defer it will through error 
//Immediately invoked function
(function abc{})()
//querySelector
querySelectorAll()
catch any css selectors way
let menu=document.getElementById('menui)
let cloneElem=menu.cloneNode(true)//everything with child get cpy
for nothing it just cpy that node
//insertAdjacentHtml is powerful as well
getAttribute;setAttribute();hasAttribute();
let btn = document.getElementById("btn");
btn.style.cssText = "background-color: red; color: white";
btn.setAttribute('style', 'color: white; background-color:red; ');
btn.style.background = "red";
let css= getComputedStyle (btn);
console.log(css.color);
let box document.getElementById("box");
let result = box.classList.contains("dim");
console.log (result);
.add,.remove ,.toggle ,etcetera...
let box = document.getElementById
let width= box.clientwidth;//without border
let height = box.offsetHeight//with broder
console.log(width);
console.log(height);
//DOM Events
• DOM events are actions that occur as a result of the user action or as
result of state change of the elements of a DOM tree.
Examples of HTML events:
• When a user clicks the mouse
• When a web page has loaded
• When an image has been loaded
• When the mouse moves over an element
• When an input field is changed
• When an HTML form is submitted
• When a user strokes a key
//writing event
1st->inline
<button id="btn" onclick="btnClick()"> Click Me !</button>
<script>
function btnClick() {
alert("button was clicked!");
}
2nd way->event listener
<button id="btn"> Click Me !</button>
<script>
function btnClick() {
alert("button was clicked!");
}
let btn = document.getElementById("btn");
btn.addEventListener("click", btnClick);
</script>
//for removing listener
let btn = document.getElementById("btn");
function click1() {
console.log("click activated");
}
function click2() {
console.log("click2 activated");
}
btn.addEventListener('click', click1);
btn.addEventListener('click', click2);
btn.removeEventListener('click', click2);

//1.DOMContentLoaded- the browser fully loaded HTML and completed
building the DOM tree. However, it hasn't loaded external resources
like stylesheets and images. In this event, you can start selecting DOM
nodes or initialize the interface.
2.load - the browser fully loaded the HTML and also external resources
like images and stylesheets.
When you leave the page, the following events fire in sequence:
<img id="image1" width="500" src="https://upload.wikimedia.org/wikipedia/commons
<script>
window.addEventListener('DOMContentLoaded
console.log("DOM tree created")
});
let img = document.getElementById("
img.addEventListener ("load", function
console.log("Fully loaded");
});
</script>
//mouse events
//keyboard events
keydown -when pressed
keyup-when left after pressing
//scrollevents
<script>
<script>
window.addEventListener('scroll', function(){
if(window.pageyoffset > 150){
document.body.style.background="red";
}else{
document.body.style.background = "white";
}
});
</script>
</script>
//event bubbling
1. Event bubbling
In the event bubbling model, an event starts at the most specific element and then
flows upward toward the least specific element (the document or even window).
When you click the button, the click event occurs in the following order:
I
• button Document
• div with the id container Element hom
• body
• html
• document
2. Event capturing
In the event capturing model, an event starts at the least specific element and
flows downward toward the most specific element.
When you click the button, the click event occurs in the following order:
I
Document
• document
• html
• body
• div with the id container
• button
//addEventListener(event,function,useCapture is true/false)
The default value is false,which will use the bubbling propagation,
when the value is set to true,the event uses the capturing propagation.

you can also stop it by 
function someFunct(event){event.stopPropogation();}

//BOM(browser object model ) is used to interact with a browser
window representing a window in the browser and it is created automatically 
by the browser.
all global js objects,functions and variables with var keyword 
automatically became members of window object
global variables are properties of window object.
global functions are methods of window objects.

check by window.anynameof/function
let win=window.open and win.close()

//setTimeout(function,millisecond)//this returns id and this works after 
duration completes
clearTimeout(id)

//setInterval(funct,millisecond)//this returns id this works after every duration
clearTimeout(id)

//window.location
//screen,navigator
//Object.assign(classname.prototype,methods)
//cookies
//localStorage
//session
*/
//Nodejs
(function(name){
    console.log(name);
})('akp');

//const wrapper=['function(exports,require,module,__filename,__dirname){
 //   ',\n});'];----By nodejs internally

 //Core modules
 //1.PATH
 const path=require('path');
//   console.log("dirname",path.dirname(__filename));
//   console.log("filename",path.basename(__filename));
//   console.log("extname",path.extname(__filename));
//   console.log("parse",path.parse(__filename));
//   console.log("join",path.join(__dirname,'order','app.js'))//dirname,filename
// //2.FILE
 const fs=require('fs');
// fs.mkdir(path.join(__dirname,'/test'),(err)=>{//creates if not and error if there's a file
//     if(err){
//         console.log("Sometimes went wrong...",err);
//     }
//     console.log('Folder created...');
// });

//  fs.writeFile(path.join(__dirname,'test','test.txt'),'write data',(err)=>{  //overwrite if file exist if not crete and write
//     if(err){
//         throw err;
//     }
//     fs.appendFile(path.join(__dirname,'test','test.txt'),"data to append",(err)=>{
//         if(err){
//             throw err;
//         }
//         console.log("appendFile");
//     })//append in already present 
//     console.log("file write done")
//  })
 //2.1 Read a File
//  fs.readFile(path.join(__dirname,'test','test.txt'),(err,data)=>{
//     if(err){
//         throw err;
//     }
//     const content=Buffer.from(data);//otherwise data would be some numeric way non buffer way
//     console.log(content.toString());
//  })

// fs.readFile(path.join(__dirname,'test','test.txt'),'utf-8',(err,data)=>{
    
//     console.log(data);
//  })

// 3.OS 
const os=require('os');
// console.log('Os type/platform',os.type(),os.platform());
// console.log('cpu architecture,cpu details free memory,total memory,uptime',os.arch(),os.cpus(),os.freemem(),os.totalmem(),os.uptime())

//4.Emitter-> it's a class

const Emitter=require('events');
const myEmitter=new Emitter();

// myEmitter.on('someone',(data)=>{
// console.log(data);
// })
// myEmitter.emit('someone',{
// name:'Akp',
// })

// class Auth extends Emitter{
//     register(username){
//         console.log("register successfully");
//         this.emit('registered',username);
//     }
// }

// const auth=new Auth();
// //listen
// auth.on('registered',(data)=>{
// console.log(data)
// });

// auth.register('Akshaykumar');

//5.HTTP

const http = require('http');


const app = http.createServer((req, res) => {
    console.log("req url",req.url)
    fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
        if (err) {
            console.error(err);
            res.writeHead(500);
            res.end('Internal Server Error');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });//we can change header there will be change in output.
            res.end(content);
        }
    });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log('Listening on Port', PORT);
});
