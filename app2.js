'use strict';
let container = document.getElementById('container');
let myForm = document.getElementById('myForm');
myForm.addEventListener('submit',addNewGrade);
let table = document.createElement('table');
container.appendChild(table);
let studensGrades = [];

function saveToLocalStorage(){
    let data = JSON.stringify(studensGrades);
    localStorage.setItem('StudensGrades',data);
}

// how to read from local storage
function readFrofLocalStorage(){
    let stringObj = localStorage.getItem('StudensGrades');
    let normalObj = JSON.parse(stringObj);

    if(normalObj){
        studensGrades = normalObj;
       
    }
}
readFrofLocalStorage();

function StudensGrades(studentName,grade1,grade2,avg){
    this.studentName = studentName;
    this.grade1=grade1;
    this.grade2=grade2;
    this.avg = avg;
    studensGrades.push(this);
}
console.log(studensGrades);
// StudensGrades.prototype.getNumberOfStuden = function(grade1,grade2){
//     grade1 = Math.ceil(grade1);
//     grade2 = Math.floor(grade2);
//     return Math.floor(Math.random()*(grade1 - grade2 +1)+grade1);
// }

function addNewGrade (event){
    event.preventDefault();
    let studentName = event.target.name.value;
    let grade1 = event.target.grade1.value;
    let grade2 = event.target.grade2.value;
    let avg = event.target.avg.value;

    let newGrade = new StudensGrades(studentName,grade1,grade2,avg);
    //  newGrade.getNumberOfStuden();
      newGrade.render();
      saveToLocalStorage();
}

function creatTableHeader(){
    let trEl = document.createElement('tr');
    table.appendChild(trEl);

    let thEl1 = document.createElement('th');
    trEl.appendChild(thEl1);
    thEl1.textContent = 'Student Name';

    let thEl2 = document.createElement('th');
    trEl.appendChild(thEl2);
    thEl2.textContent = 'grade1';

    let thEl3 = document.createElement('th');
    trEl.appendChild(thEl3);
    thEl3.textContent = 'grade2';

    let thEl4 = document.createElement('th');
    trEl.appendChild(thEl4);
    thEl4.textContent = 'Avg';




}
creatTableHeader();

StudensGrades.prototype.render = function(){
    let trEl = document.createElement('tr');
    table.appendChild(trEl);

    let tdEl1 = document.createElement('td');
    trEl.appendChild(tdEl1);
    tdEl1 .textContent = this.studentName;

    let tdEl2 = document.createElement('td');
    trEl.appendChild(tdEl2);
    tdEl2 .textContent = this.grade1;

    let tdEl3 = document.createElement('td');
    trEl.appendChild(tdEl3);
    tdEl3 .textContent = this.grade2;

    let tdEl4 = document.createElement('td');
    trEl.appendChild(tdEl4);
    tdEl4 .textContent = this.avg;


    
    
}

let ahmad = new StudensGrades('ahmad',20,10,2);
// ahmad.render();
let leen  = new StudensGrades('Leen',20,20,2);
let jo = new StudensGrades('jo',20,15,2);

for(let i = 0 ; i<studensGrades.length ; i++){
    studensGrades[i].render();
  
}