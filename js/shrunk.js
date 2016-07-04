function firstName(){
  var firstNameAnswerElement = $("#firstNameAnswer")
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`~!@#$%^&*()_+-=[]{};:'/?.>,<'";

  setInterval( function() {
    currentText = firstNameAnswerElement.text();
    randomNewChar = possible.charAt(Math.floor(Math.random() * possible.length));
    if (firstNameAnswerElement.text().length < 14 ) {
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
    lastNameInterval = setInterval( function() {
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
      fontSize = fontSize - 2;
      newText = currentHTML + "<span style='font-size:"+ fontSize +"%;'>" + randomVowel + "</span>" ;
      if (lastNameAnswerElement.text().length == 14) {
        newText = newText + "<br/>";
      }
      lastNameAnswerElement.html(newText);
      if (fontSize <= 0 ){
        clearInterval(lastNameInterval)
      }
    }, 120);
  }, 5000)
}

function address() {
  var addressAnswerElement = $("#addressAnswer");
  glyphs = ["&yen;","&sect;","&micro;","&THORN;","&eth;","&Xi;","&Psi;","&gamma;","&delta;","&zeta;","&eta;","&xi;","&sigmaf;","&psi;","&thetasym;","&weierp;","&image;","&real;","&notin;","&scaron;","&dagger;","&Dagger;"]
  counter = 100;
  setTimeout( function(){
    interval = setInterval( function (){
      currentText = addressAnswerElement.html();
      randomGlyph = glyphs[Math.floor(Math.random() * glyphs.length)]
      newText = currentText + randomGlyph;
      addressAnswerElement.html(newText);
      counter = counter - 5;
      if (counter == 0) {
        addressAnswerElement.html(newText + "<br/>Apt #12");
        clearInterval(interval);
      }
    }, 333);
  }, 11000);
 }

function phone(){
  var phoneAnswerElement = $("#phoneAnswer");

  function getRandomPhoneNumber() {
    phoneNumber = "";
    [1,2,3,4,5,6,7,8,9,10].forEach(function(i) {
      phoneNumber = phoneNumber + getRandomNumber()
    });
    phoneNumber = [phoneNumber.slice(0, 3), "-", phoneNumber.slice(3)].join('');
    phoneNumber = [phoneNumber.slice(0, 7), "-", phoneNumber.slice(7)].join('');
    return phoneNumber
  }

  setTimeout( function(){
    phoneAnswerElement.text(getRandomPhoneNumber);
    phoneAnswerElement.textillate(
      { in:
        {
          effect: 'rollIn',
          delayScale: 5,
          delay: 40,
          shuffle: true
        },
        out: {
          effect: 'fadeOut',
          delayScale: 5,
          delay: 40,
          shuffle: true
        },
        minDisplayTime: 0,
        loop: true
      }
    );
  }, 18000);
}

function ssn(){
  setTimeout( function(){
    $.getScript('js/sudokuJS.js', function() {
      var mySudokuJS = $("#ssnAnswer").sudokuJS({});
      setInterval(function(){
        mySudokuJS.solveStep();
      }, 333)
    });
  }, 24000);
}

function age(){
  ageAnswerElement = $("#ageAnswer");
  ageAnswerElement.css("color", "transparent")
  ageAnswerElement.css("text-shadow", "0 0 8px #000");
  setTimeout(function(){
    setInterval(function(){
      randomAge = getRandomNumber() * getRandomNumber();
      ageAnswerElement.text(randomAge);
    }, 4000);
  }, 21000)
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10).toString();
}

function emergency() {
  emergencyAnswerElement = $("#emergencyAnswer");
  setTimeout(function(){
    emergencyAnswerElement.html('<img src="images/cat.jpg" />');
  }, 27000)
}

firstName();
lastName();
address();
phone();
ssn();
age();
emergency();
