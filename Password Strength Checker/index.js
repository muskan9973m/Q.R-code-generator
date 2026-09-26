const inputField = document.querySelector('#password');
const outputField = document.querySelector('#output');


inputField.addEventListener('input',function(){
    console.log(inputField.value);
   let password = inputField.value;
   if(password.length < 8){
    outputField.innerText = 'Password is too short';
    outputField.style.color = 'red';
   }
    else{
        // outputField.innerText = 'password is long enough';
        //  outputField.style.color = 'green';
        // a-z
        // A-Z
        // 0-9
        // special characters !@$*\\_+-{}:"<>?;,.
        console.log("is lowercase",password.search(/(a-z)/));
        if(password.search(/(a-z)/) == -1){
            outputField.innerText = 'Password is missing a lowercase letter';
            outputField.style.color = 'red';
        }
        else if(password.search(/(A-Z)/) == -1){
            outputField.innerText = 'Password is missing a Uppercase letter';
            outputField.style.color = 'red';
        }
        else if(password.search(/(0-9)/) == -1){
            outputField.innerText = 'Password is missing a Numeric';
            outputField.style.color = 'red';
        }
        // else if(password.search(/(!\@\$\&\*\(\)\_\+\-\{\}\:\"\<\>\?\;\,\.\)/) == -1){
        //     outputField.innerText = 'Password is missing a Special Character';
        //     outputField.style.color = 'red';
        // }
        else{
            outputField.innertext = 'Password is strong';
            outputField.style.color = 'green';
        }
    }
});