// Button Submit 
let btn = document.querySelector('main section div button.btn');
//input email
let email = document.querySelector('main section div input.btn');
let warning = document.querySelector('main section div div p.false');
let success = document.querySelector('main section div div p.true')
const regx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

btn.addEventListener('click', function(e) {
    if(regx.test(email.value)){
        warning.classList.add('hide');
        success.classList.remove('hide');
        email.classList.remove('red');
        console.log('benar');
    }else{
        email.classList.add('red');
        success.classList.add('hide');
        warning.classList.remove('hide');
        console.log('salah');
    }
})


