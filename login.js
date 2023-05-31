document.getElementById("btn_submit").addEventListener('click',function(){


    // console.log('document is clicked!');
    // step two ... get value of emaile address...


    const email=document.getElementById('user_email');
    const emailValue=email.value;
    // console.log(emailValue);

    const password=document.getElementById('user_password');
    const passwordValue=password.value;
    console.log(passwordValue,emailValue);
    if(emailValue ==='shobhanrahman21@gmail.com' && passwordValue ==='secrect'){
        window.location.href='index.html';
    }
    else{
            alert('Invalid User!');
    }

})
// step-4 varify email and password...

// deposit id ...
document.getElementById('diposit-field').addEventListener('click',function(){

    console.log("This is abdus_shobhan");
})