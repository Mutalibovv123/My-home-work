const form = document.querySelector('#form');
const nameInput = document.querySelector('#name');
const lastName = document.querySelector('#surname');
const ageOf = document.querySelector('#age');
const emailof = document.querySelector('#email');
const numberof = document.querySelector('#number');
const link = document.querySelector("#link");
const card = document.querySelector('#card');
const button = document.querySelector('#button'); 
const block = document.querySelector('#block');

function createCArd(data) {
    return ` 
   <div class="card${data.card}">
            <img src="${data.image}" alt="">
            <h3>${data.name}</h3>
            <br>
            <h3>${data.surname}</h3>
            <br>
            <h3>${data.age}</h3>
            <br>
            <h3>${data.email}</h3>
            <br>
            <h3>${data.number}</h3>
        </div>  `
}
button && button.addEventListener('click', function(){
    const image = link.value; 
    const name = nameInput.value;
    const surname = lastName.value;
    const age = ageOf.value;
    const email = emailof.value;
    const number = numberof.value;
    const data = { image, name, surname, age, email, number };
    let cardi = createCArd(data)
    card.innerHTML += cardi; 
})