const text='JavaScript was invented by Brendan Eich in 1995. It was developed for Netscape 2, and became the ECMA-262 standard in 1997. After Netscape handed JavaScript over to ECMA, the Mozilla foundation continued to develop JavaScript for the Firefox browser.'


function countWord(){
    const word=text.split(" ")
    const wordCounter= new Map()
    for (let i=0; i<word.length; i++){
        if (wordCounter.has(word[i])){
            wordCounter.set(word[i], wordCounter.get(word[i])+1)
        }
        else{
            wordCounter.set(word[i],1)
        }
    }
    return wordCounter
}

console.log(countWord());