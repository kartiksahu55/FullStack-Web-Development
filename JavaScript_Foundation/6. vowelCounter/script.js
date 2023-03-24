const vowelCount= ()=>{

    const input=document.getElementById("input").value;
    const displayNum=document.getElementById("displayNum");

    const numOfVowel=input.match(/[aeiou]/gi).length

    displayNum.innerText=`Number Of Vowel: ${numOfVowel}`;
    displayNum.style.display="block"
}