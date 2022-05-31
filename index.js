const {hash} = window.location;

const message =atob(hash.substring(1));

if(message){
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');

    document.querySelector('h1').innerHTML = message;
}

document.querySelector('form').addEventListener('submit', event =>{
    event.preventDefault();

    document.querySelector('#message-form').classList.add('hide')
    console.log("form submitted")
    document.querySelector('#link-form').classList.remove('hide')
    const input = document.querySelector('#message-input')
    const encrypted = btoa(input.value);
    const URL = `${window.location}#${encrypted}`;
    document.querySelector('#link-input').value = URL;
    console.log(`${window.location+encrypted}`);
})