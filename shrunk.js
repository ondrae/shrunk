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
    var possible = "AEIOUY";
    var fontSize = 100;
    interval = setInterval( function() {
      needNewVowel = false;
      currentText = lastNameAnswerElement.text();
      currentHTML = lastNameAnswerElement.html();

      if (currentText == "") {
        needNewVowel = true;
      }
      if (new Set(currentText.slice(-5)).size == 1 && currentText.slice(-5).length == 5) {
        needNewVowel = true;
      }
      if (needNewVowel) {
        randomVowel = possible.charAt(Math.floor(Math.random() * possible.length));
      }
      fontSize = fontSize - 1;
      newText = currentHTML + "<span style='font-size:"+ fontSize +"%;'>" + randomVowel + "</span>" ;
      lastNameAnswerElement.html(newText);

      if (fontSize == 0 ){
        clearInterval(interval)
      }
    }, 250);
  }, 5000)
}


firstName();
lastName();
