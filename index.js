var readlineSync = require('readline-sync')
var score= 0

var username= readlineSync.question("May I know your name? ")
console.log("Welcome ",username, " !  to the quiz")
console.log("Hope you are doing good!")
console.log("You need to select the correct option to get 2 marks.")
 console.log("                                ")


var queOne= {
  question: "Kaveri river originates in  A.Bramhagiri Hills  B.Nallamalla Hills  C.Annamalai Hills  D.Satmala Hills ",
  answer: "A",
}

var queTwo= {
  question: "Who appoints the judges of supreme court?    A.Chief Justice of supreme court  B.Prime Minister   C.President   D.None of the above ",
  answer: "C",
}

var queThree= {
  question: "What is the approximate size of indian economy?  A.6 Trillion $      B.5 Trillion $   C.3 Trillion $    D.8 Trillion $ ",
  answer: "C",
}


var queFour= {
  question: "Who was the last Mughal emperor?  A.Muhammadshah  B.Farukhsiyyar    C.Alamgir II   D.Bahadurshah Jafar ",
  answer: "D",
}

var queFive= {
  question: "When did India adopt its constitution?   A.26 Jan,1950   B.26 Nov,1948   C.15 Aug,1947    D.26 Jan, 1949 ",
  answer: "B",
}

var questionset= [queOne,queTwo,queThree,queFour,queFive]

for(i=0; i<questionset.length; i++)
  {
    var finalquestion= questionset[i]
    var answer= finalquestion.answer
    var userans= readlineSync.question(finalquestion.question)
    if(userans.toUpperCase() === answer.toUpperCase())
    {
      console.log("Congratulations! You are right.")
      score=score+2
      console.log("Current score is ", score)
      console.log("                                ")
    }
    else{
      console.log("Oops! You are Wrong.")
       console.log("Current score is ", score)
       console.log("                                ")
    }
  }
 console.log("Final score is ", score, "out of 10.")