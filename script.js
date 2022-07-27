function validate() {  
var fname = document.reg_form.fname;  
var lname = document.reg_form.lname;  
var cname = document.reg_form.cname;
var email = document.reg_form.email;  
var gender = document.reg_form.gender;   
var mobile = document.reg_form.mobile;    
var course = document.reg_form.course; 
var check = document.reg_form.check;

const error1 = document.getElementById('error1');
const error2 = document.getElementById('error2');
const error3 = document.getElementById('error3');
const error4 = document.getElementById('error4');
const error5 = document.getElementById('error5');
const error6 = document.getElementById('error6');
const error7 = document.getElementById('error7');
const error8 = document.getElementById('error8');
const error9 = document.getElementById('error9');


    if (fname.value.length <= 0) {  
        // alert("Name is required");  
        error1.innerHTML = "Required Field!"
        fname.focus();  
        return false;  
    }  
    if (lname.value.length <= 0) {  
        // alert("Last Name is required");  
        error2.innerHTML = "Required Field!"
        lname.focus();  
        return false;  
} 

if (cname.value.length <= 0) {  
    // alert("Last Name is required");  
    error3.innerHTML = "Required Field!"
    cname.focus();  
    return false;  
}
if (email.value.length <= 0) {    
    // alert("Email Id is required");  
    error4.innerHTML = "Required Field!"  
    email.focus();    
    return false;    
}
if (mobile.value.length <= 0 ) {    
    // alert("Mobile number is required");   
    error5.innerHTML = "Required Field!" 
    mobile.focus();    
    return false;    
}  

if (course.value == "select course") {    
    // alert("Course is required");  
    error6.innerHTML = "Required Field!"  
    course.focus();    
    return false;    
}

// if (gender.value.length <= 0) {  
//      alert("Gender is required"); 
//     error7.innerHTML = "Required Field!" 
//     gender.focus();  
//     return false; 
// } 
// Gender
for(let i=0;i<gender.length;i++){
    if(gender[i].checked == true){
        return true;
    }else{
    error7.innerHTML = "Required Field"
    
    }
}

//Languages

for(let i=0;check.length;i++){
    if(check[i].checked == true){
        return true;
    }
    else{
        error8.innerHTML = "Required Field"
        return false;
    }

}


return false;    
}
