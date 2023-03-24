function out() {
  const myParagraph = document.getElementById("myParagraph");
  const myInput=document.getElementById("myInput")
  const word = myInput.value.split(" ")
  const setLength = 8
  let replaceWord = ""
  let outPut = ""

  word.forEach((word) => {
    if (word.length > setLength) {

      replaceWord = '<span style="background-color: yellow;">' + word + '</span>';
    }
    else { replaceWord = word }
    outPut = outPut + " " + replaceWord
  })


  return myParagraph.innerHTML = outPut
}

