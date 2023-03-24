const capitalize=()=>{
    const userName=document.getElementById("userName").value;
    const capitalName=document.getElementById("capitalName")

    const upper=userName[0].toUpperCase()!=userName[0]?userName[0].toUpperCase()+userName.slice(1):userName

        capitalName.innerText=upper
        capitalName.style.textAlign='center'
        capitalName.style.fontSize="20px"
        navigator.clipboard.writeText(upper)
}