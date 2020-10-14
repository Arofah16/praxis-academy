
// function masukEMAIL(inputEmail){
//     let email = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/gi;
//     // /^([A-Za-z][A-Za-z0-9\-\.\_]*)\@([A-Za-z][A-Za-z0-9\-\_]*)(\.[A-Za-z][A-Za-z0-9\-\_]*)+$/ ;
//     let cek = email.test(inputEmail.value);
//     if (cek){
//         alert("email yang anda masukkan BENAR");
//     }else{
//         alert("Email yang anda masukkan SALAH");
//     }
    
// }
function masukEMAIL(inputEmail){
    let x = document.getElementById("email").value;
    let email1 = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/gi;
     // /^([A-Za-z][A-Za-z0-9\-\.\_]*)\@([A-Za-z][A-Za-z0-9\-\_]*)(\.[A-Za-z][A-Za-z0-9\-\_]*)+$/ ;
    let cek = x.match(email1);
    if (cek){
        alert("email yang anda masukkan BENAR");
    }else{
         alert("Email yang anda masukkan SALAH");
    }

}

