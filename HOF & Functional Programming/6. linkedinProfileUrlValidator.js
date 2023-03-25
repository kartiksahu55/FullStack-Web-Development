const linkedinUrl='https://www.linkedin.com/in/kartiks-ahu5'
const urlPattern=/^https?:\/\/www.linkedin.com\/in\/[a-zA-z0-9_-]{5,30}[a-zA-Z0-9]$/;

const validateUrl=urlPattern.test(linkedinUrl)
if(validateUrl){
    console.log("Valid Linkedin Profile URL");
}
else{console.log("Invalid Linkedin Profile URL");}
