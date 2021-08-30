
'use strict';
// alert 

// let userName2 = prompt('please enter your name');
// document.write(`<h2>${userName2}</h2>`);
// alert("oh Hi nice to met you  "+ userName2);
// console.log(userName2);

// add while loop and if else to the alert
// let readBook ;

// while ( readBook != 'yes' || readBook != 'no'){
//     readBook = prompt('did you read books?')
// if(readBook == 'yes'){
//     console.log('good')
//     alert('good');
//     break;
// }
// else if (readBook == 'no'){
//     console.log('you shold start read!!')
//     alert('you shold start read!!');
//     break;
// }

// else {
//     alert('you have to enter yes , no ')
// }
// }

// use switch
// let coffieType = prompt('please enter your coffie type here :  we only have black , late')
// if (coffieType !== null) {
//     // coffieType = coffieType.toLowerCase();
//     coffieType = coffieType.toUpperCase();

// }
// switch(coffieType){
//     // case 'black':
//         case 'BLACK':
//         alert('nice');
//         break;
//     // case 'late':
//     case 'LATE':
//     alert('oh waw');
//     break;
//     default:
//         alert('we dont have this one');
// }

// array
// let mixArray = ['bmw', 1993, 5000, 'shihab', 'lightblue', true, ['ahmad', 'sami', 'leen'],['hi',['buy']]];

// console.log(mixArray);
// alert(mixArray);
// console.log(mixArray[6][2]);
// console.log(mixArray[3]);
// console.log(mixArray[7][1][0]);

//function 1
// add user name function
// let userName = function (username) {
//     username = username +' welcome home';

//     return username;
// }

// let user=prompt('please enter your name');
// console.log(userName(user));
// alert('thank you and welcome home' +userName(user));
// document.write(`<h3>${userName(user)}</h3>`);

//function 2
// (function (username) {
//     username = username +' welcome home';
//     console.log(username);
//         return username;
       
// })('hala');

//function 3
// function userName(username){
//     username = username +' welcome home';

//      return username;
// }
// let user=prompt('please enter your name');
// console.log(userName(user));
// alert('thank you and welcome home' +userName(user));
// document.write(`<h3>${userName(user)}</h3>`);

// add obj
// let hala = {
//     userName : 'hala',
//     age : 21,
//     study : 'Software',

//     username:function(){
       
//         // console.log(`welcome home ${hala.userName}`);
//         document.write(`<h3>${hala.userName} welcome home</h3>`);
//         console.log(`${hala.userName}  welcome home`);

           
//     }
// }
// console.log(hala);
// hala.username();

// const car = {
//     carModel: 'kia'
// }

// here we can Change the properties of constant object or array
// console.log(car);
// car.carModel = 'bmw';
// // car = 'ford';
// car.price = 5000;
// console.log(car);

// this one will give me error 

// car ={
//     carModel: 'ford'
// }
// console.log(car);

// let container = document.getElementById('container');

// let pEL = document.createElement('p');
// pEL.textContent='Student Name';
// container.appendChild(pEL);

// object and define ol , li in js and make them print in html
// let Student = {
//     userName :['aya','hala','leen','jo'],
   
// }
// let userNameEL = document.getElementById('userName');
// container.appendChild(userNameEL);

// let olEL2= document.createElement('ol');
// container.appendChild(olEL2);
// let liEL2 ;
// for(let i =0 ; i < Student.userName.length ; i++){
// liEL2 = document.createElement('li');
// liEL2.textContent = Student.userName[i];
// olEL2.appendChild(liEL2);
// }
// userNameEL.appendChild(olEL2);
// console.log(userNameEL);

// extra on ul.li and ol li

// let ulEL = document.createElement('ul');
// container.appendChild(ulEL);
// for(let i = 0 ; i<5 ; i++){
//     let liEL = document.createElement('li');
//     liEL.textContent='hi';
//     ulEL.appendChild(liEL);
// }

// let olEL = document.createElement('ol');
// container.appendChild(olEL);
// for(let i = 0 ; i<5 ; i++){
//     let liEL = document.createElement('li');
//     liEL.textContent='hi';
//     olEL.appendChild(liEL);
// }


// creat chocolate place
// all what i need to define every thing
let container = document.getElementById('container');
let myForm = document.getElementById('myForm');
myForm.addEventListener('submit',addNewOrder);
let tableEL = document.createElement('table');
// orders will by the arry that we will push every thing from the constructre tp it 
let orders = [];
container.appendChild(tableEL);

// to save in local storage andd make the obj string.

function saveToLocalStorage(){
    let data = JSON.stringify(orders);
    localStorage.setItem('Orders',data);
}

// how to read from local storage
function readFrofLocalStorage(){
    let stringObj = localStorage.getItem('Orders');
    let normalObj = JSON.parse(stringObj);

    if(normalObj){
        orders = normalObj;
       
    }
}
readFrofLocalStorage();

function Orders(placeName,chocolateType,location){
    this.placeName = placeName;
    this.chocolateType = chocolateType;
    this.location = location;
    // these are to know the
    orders.push(this);
    
}
console.log(orders);

function addNewOrder(event){
    event.preventDefault();

    let placeName = event.target.name.value;
    let chocolateType = event.target.chocolateType.value;
    let location = event.target.locatin.value;

    let orders = new Orders(placeName,chocolateType,location)
    
    // tableEL.deleteRow(-1);
    //  console.log(Orders);
    // newStore.getsales();
    orders.render();
    saveToLocalStorage();
    // creatTableFooter();
}

Orders.prototype.render = function(){
    // creat Tr
   let trEL = document.createElement('tr');
    tableEL.appendChild(trEL);

    let tdEl1 = document.createElement('td')
    trEL.appendChild(tdEl1);
    tdEl1.textContent = this.placeName;

    let tdEL2 = document.createElement('td');
    trEL.appendChild(tdEL2);
    tdEL2.textContent = this.chocolateType;

    let tdEL3 =document.createElement('td');
    trEL.appendChild(tdEL3);
    tdEL3.textContent = this.location;


}

function createTableHeader(){
    let trEL = document.createElement('tr');
    tableEL.appendChild(trEL);
    
    let thEL1 = document.createElement('th');
    trEL.appendChild(thEL1);
    thEL1.textContent = 'place Name';

    let thEL2 = document.createElement('th');
    trEL.appendChild(thEL2)
    thEL2.textContent = 'chocolate Type'

    let thEL3 = document.createElement('th');
    trEL.appendChild(thEL3);
    thEL3.textContent = 'location';


}

createTableHeader();
// creatTableFooter();

let hala = new Orders('laviva','dark','amman');
let leen = new  Orders('laviva','choclite milk','amman');
let  jo = new  Orders('laviva','choclite milk','irbid');

for(let i = 0 ; i<orders.length ; i++){
    orders[i].render();
  
}













