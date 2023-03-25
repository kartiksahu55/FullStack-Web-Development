const url='https://pwskills.com'
const UrlPattern=/^http(s)?:\/\/[a-zA-Z0-9\-_~]+\.[a-zA-Z]+$/
const urlValidation=UrlPattern.test(url)

if(urlValidation){
    console.log('Valid URL');
}
else{console.log('Invalid URL');}