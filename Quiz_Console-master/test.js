/*
Challenge 1
////////////
(function () {
  var Question = function (question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  };
  Question.prototype.displayQ = function () {
    console.log(this.question);
    for (var i = 0; i < this.answers.length; i++) {
      console.log(this.answers[i]);
    }
  };
  Question.prototype.checkA = function (ans) {
    if (ans === this.correct) {
      console.log("Your answer is correct");
    } else {
      console.log("Your answer is wrong.Please commit suicide !!!");
    }
  };

  var question1 = new Question(
    "0.What is my Favourite food?",
    ["0.Dahi vade", "1.Burger", "2.Tandoori Fries", "3.Can't decide"],
    0
  );

  var question2 = new Question(
    "Whom I always wanted to kill?",
    ["0.Samyak", "1.Mangaldeep", "2.Shobhit", "3.No one"],
    2
  );

  var question3 = new Question(
    "2.Who is my favourite character?",
    ["0.Pikachu", "1.Deadpool", "2.Wolverine", "3.Can't decide"],
    3
  );
  var question4 = new Question(
    "3.Which is my favorite Netflix series?",
    ["0.Friends", "1.Stranger Things", "2.Brookyln 99", "3.Can't decide"],
    0
  );
  var AskQ = [question1, question2, question3, question4];

  var RandomQ = Math.floor(Math.random() * AskQ.length);
  AskQ[RandomQ].displayQ();
  var askU = parseInt(prompt("Please select the correct answer"));
  AskQ[RandomQ].checkA(askU);
  
})();

/*console.log(RandomQ);
console.log(AskQ);
console.log(question1);
console.log(question2);
console.log(question3);
console.log(question4);*/
/** */
/**
 * Challenge 2
 */
(function () {
  var Question = function (question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  };
  Question.prototype.displayQ = function () {
    console.log(this.question);
    for (var i = 0; i < this.answers.length; i++) {
      console.log(this.answers[i]);
    }
  };
  Question.prototype.checkA = function (ans, keepScore) {
    var sc;
    if (ans === this.correct) {
      console.log("Your answer is correct");
      sc = keepScore(true);
    } else {
      console.log(
        "Your answer is wrong.Please commit suicide !!! but the correct answer was " +
          this.correct
      );
      sc = keepScore(false);
    }
    this.displaySc(sc);
  };
  Question.prototype.displaySc = function (score) {
    console.log("Your current score is : " + score);
    console.log("---------------------------------------------------");
  };
  var question1 = new Question(
    "0.What is my Favourite food?",
    ["0.Dahi vade", "1.Burger", "2.Tandoori Fries", "3.Can't decide"],
    0
  );

  var question2 = new Question(
    "Whom I always wanted to kill?",
    ["0.Samyak", "1.Mangaldeep", "2.Shobhit", "3.No one"],
    2
  );

  var question3 = new Question(
    "2.Who is my favourite character?",
    ["0.Pikachu", "1.Deadpool", "2.Wolverine", "3.Can't decide"],
    3
  );
  var question4 = new Question(
    "3.Which is my favorite Netflix series?",
    ["0.Friends", "1.Stranger Things", "2.Brookyln 99", "3.Can't decide"],
    0
  );

  var AskQ = [question1, question2, question3, question4];
  function score() {
    var sc = 0;
    return function (correct) {
      if (correct) {
        sc++;
      }
      return sc;
    };
  }
  var keepScore = score();

  function nextQ() {
    var RandomQ = Math.floor(Math.random() * AskQ.length);
    AskQ[RandomQ].displayQ();
    var askU = prompt("Please select the correct answer");

    if (askU !== "exit") {
      AskQ[RandomQ].checkA(parseInt(askU), keepScore);
      nextQ();
    }
  }
  nextQ();
})();
