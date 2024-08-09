document.addEventListener('DOMContentLoaded', function(){
    const inputMail = document.querySelector('.input-mail')
    const inputBtn = document.querySelector('.input-btn')
    const errorState = document.querySelector('.error-state')


    const isValidateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(inputMail.value)){
            errorState.classList.remove('error-show')
            inputMail.classList.remove('error-border')
        }else{
            errorState.classList.add('error-show')
            inputMail.classList.add('error-border')
        }
    }
    inputBtn.addEventListener('click', isValidateEmail)
})