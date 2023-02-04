import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state'

const formEl =  document.querySelector('.feedback-form');
const inputEl = document.querySelector('.feedback-form input')
const messageEl = document.querySelector('.feedback-form textarea')
console.log(formEl)
console.log(inputEl)
console.log(messageEl)

populateText ()

formEl.addEventListener('input', throttle(onTextInput, 500))
formEl.addEventListener('submit', onFormSubmit)
// inputEl.addEventListener('input', onTextInput)
// messageEl.addEventListener('input', onTextMessage)

function onFormSubmit (e){
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY)
    console.log({email: `${inputEl.value}`, message: `${messageEl.value}`})
   }

function onTextInput(e){
  localStorage.setItem(STORAGE_KEY, JSON.stringify({email: `${inputEl.value}`, message: `${messageEl.value}`}))
}

function populateText (){
    const savedData = localStorage.getItem(STORAGE_KEY);

    const parsedData = JSON.parse(savedData);
console.log(parsedData)
    if(parsedData){
        inputEl.value = parsedData.email;
        messageEl.value = parsedData.message
    }
}



