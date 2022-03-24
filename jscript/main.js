	//Validtion Code For Inputs

    let customerName = document.forms['form']['name'];
    let phoneNumber = document.forms['form']['phonenum'];
    
    let name_error = document.getElementById('cusname');
    let phone_error = document.getElementById('phonenumber');
    
    email.addEventListener('textInput', email_Verify);
    password.addEventListener('textInput', pass_Verify);
    
    