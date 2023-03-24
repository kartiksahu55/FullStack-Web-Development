


function form(){
    const newPassword=document.getElementById("newInput").value;
    const confirmPassword=document.getElementById("confirmInput").value;
    const message=document.getElementById("message");
    
    if(newPassword=="") {
        message.innerHTML="Please Enter  The Password"; return false
    }

    else if(newPassword!=confirmPassword){
        message.innerText="Password didn't match. Password validation unsuccessful"; return false
        
    }

    else {
        message.innerText="Password Matched. Password validation Successful"; return false
    }


}




// const submitBtn=document.getElementById("submitBtn")

// submitBtn.addEventListener("click", ()=>{
//     const newPassword=document.getElementById("newInput").value;
//     const message=document.getElementById("message");
//     const pass="kartik"

//     if(newPassword==pass){
//         alert("Password Matched. Password validation Successful")
//     } 

//     if (newPassword=="") {
//         message.innerText="Please Enter  The Password"; return false
//     }
       
//     else{
//         alert("Password didn't match. Password validation unsuccessful")
//     }
// })