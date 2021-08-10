let btn = document.querySelector("#btn-go"),
 err1 = document.querySelector('.error'),
 mail = document.querySelector('#grab-email');
    
const emailIsValid = (email) => {
    email = mail.value;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

const fullValidator = () => {


    if(emailIsValid(mail)==false){
        err1.style.display = 'block';

    }else if(emailIsValid(mail)==true){
        err1.style.display = 'none';
        alert("we'll be in touch")
    }

    
}
btn.addEventListener('click',fullValidator)