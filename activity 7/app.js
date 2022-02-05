






function Register() {
    this.fullName = document.getElementById('fullname').value;   // fullname=   full name input   field   id 
    this.phone = document.getElementById('phone').value;   // phone=  phone   input  field   id 
    this.age = document.getElementById('age').value;  // age=  age  input  field   id 
    this.introduceMySelf = () => {
        parent = document.getElementById('render');  //  render:empty div   id
        const div = document.createElement('div');
        div.classList.add('appended');
        div.innerHTML = `<h1>New Added Form</h1><h1>Full Name: ${this.fullName}</h1><h1>Age: ${this.age}</h1><h1>PhoneNo.: ${this.phone}</h1>`;
        parent.appendChild(div)
    }

}
const callBack = () => {
    const newObject = new Register();
    newObject.introduceMySelf()
}
document.getElementById('submitBtn').addEventListener('click', callBack);   // button  to click 



const newHTML = function () {
    function Display() {
        this.fullName = document.getElementById('fullname').value;  // fullname=   full name input   field   id 
        this.phone = document.getElementById('phone').value;  // phone=  phone   input  field   id 
        this.age = document.getElementById('age').value;  // age=  age  input  field   id 


    }
    var newObject = new Display();

    var render = function () {
        parent = document.getElementById('render');  //  render:empty div   id
        const div = document.createElement('div');
        div.classList.add('appended');
        div.innerHTML = `<h1>Full Name: ${newObject.fullName}</h1><h1>Age: ${newObject.age}</h1><h1>PhoneNo.: ${newObject.phone}</h1>`;
        parent.appendChild(div)
    }
    render();
}



document.getElementById('submitBtn').addEventListener('click', newHTML);  // button  to click  with Id  submitBtn


 
function Display() {
    this.fullName = document.getElementById('fullname').value; // fullname=   full name input   field   id 
    this.phone = document.getElementById('phone').value;  // phone=  phone   input  field   id 
    this.age = document.getElementById('age').value;  // age=  age  input  field   id 

    this.introduceMySelf = () => {
        parent = document.getElementById('render'); //  render:empty div   id
        const div = document.createElement('div');
        div.classList.add('appended');
        div.innerHTML = `<h1>Full Name: ${this.fullName}</h1><h1>Age: ${this.age}</h1><h1>PhoneNo.: ${this.phone}</h1>`;
        parent.appendChild(div)
    }

}
const newHTML = function () {
    const newObject = new Display();
    newObject.introduceMySelf()
}


document.getElementById('submitBtn').addEventListener('click', newHTML);  //  render:empty div   id

function Register(name, age, phone) {
    this.fullName = name;
    this.phone = age;
    this.age = phone;
    this.introduceMySelf = () => {
        parent = document.getElementById('render');
        const div = document.createElement('div');
        div.classList.add('appended');   //  render:empty div   id
        div.innerHTML = `<h1>New Added Form</h1><h1>Full Name: ${this.fullName}</h1><h1>Age: ${this.age}</h1><h1>PhoneNo.: ${this.phone}</h1>`;
        parent.appendChild(div)
    }

}
const callBack = () => {
    var name = document.getElementById('fullname').value; // fullname=   full name input   field   id 
    var fullname = document.getElementById('phone').value; // phone=  phone   input  field   id 
    var age = document.getElementById('age').value;    // age=  age  input  field   id 

    const newObject = new Register(name, fullname, age);
    newObject.introduceMySelf()
}
document.getElementById('submitBtn').addEventListener('click', callBack);

