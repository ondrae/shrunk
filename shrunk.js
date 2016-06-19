function firstName(){
  var firstNameAnswerElement = $("#firstNameAnswer")
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`~!@#$%^&*()_+-=[]{};:'/?.>,<'";

  setInterval( function() {
    currentText = firstNameAnswerElement.text();
    randomNewChar = possible.charAt(Math.floor(Math.random() * possible.length));
    if (firstNameAnswerElement.text().length < 20 ) {
      newText = currentText + randomNewChar
    } else {
      randomExistingChar = currentText.charAt(Math.floor(Math.random() * currentText.length));
      newText = currentText.replace(randomExistingChar, randomNewChar);
    }
    firstNameAnswerElement.text(newText);
  }, 250)
}

function lastName() {
  setTimeout( function(){
    // a thousand vowels descending to a susurrous
    var lastNameAnswerElement = $("#lastNameAnswer");
    var possible = "AEIOUYaeiouy";

    setInterval( function() {
      needNewVowel = false;
      currentText = lastNameAnswerElement.text();
      if (currentText == "") {
        needNewVowel = true;
      }
      if (new Set(currentText.slice(-5)).size == 1 && currentText.slice(-5).length == 5) {
        needNewVowel = true;
      }
      if (needNewVowel) {
        randomVowel = possible.charAt(Math.floor(Math.random() * possible.length));
      }
      newText = currentText + randomVowel
      lastNameAnswerElement.text(newText);
    }, 250);
  }, 8000)
}

firstName();
lastName();
