import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state'

const formEl =  document.querySelector('.feedback-form');
const inputEl = document.querySelector('.feedback-form input')
const messageEl = document.querySelector('.feedback-form textarea')

populateText ()

formEl.addEventListener('input', throttle(onTextInput, 500))
formEl.addEventListener('submit', onFormSubmit)


function onFormSubmit (e){
    e.preventDefault();
      const formElemets = {
        email: `${inputEl.value}`,
        message: `${messageEl.value}`
        }
        const {elements: { email, message } } = e.currentTarget.value
    if 
        (  email.value === '' || message.value === '') {
            return alert ('Please fill all the fields!')
        }
        
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY)
    console.log(formElemets)
   }


function onTextInput(e){
  localStorage.setItem(STORAGE_KEY, JSON.stringify({email: `${inputEl.value}`, message: `${messageEl.value}`}))
}


function populateText (){
    const savedData = localStorage.getItem(STORAGE_KEY);
    const parsedData = JSON.parse(savedData);
    if(parsedData){
        inputEl.value = parsedData?.email||'';
        messageEl.value = parsedData?.message||''
    }
}



