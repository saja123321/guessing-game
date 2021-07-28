'use strict';
////////////////// Verables
let userName, check;
let score = 0;
let guessOut = false;
let lukyNum = [55, 22, 2, 12, 10];
let numberofguesses = 0;
let isGuessed;
isGuessed = false;

///////////////////////////////
let answers = ` I didnt like animes ,  I like reading books , I like Watching movies ,I like cooking , the luky numbers is ${lukyNum}`;
function getName(){
  userName = prompt('Whats Your name :');
  checkingInputs(userName , 'please enter Your name :' );
  alert('Welcome ' + userName + ' ,nice to meet you');
}

function checkingInputs(input1 , msg)
{
  while (!input1) {
    input1 = prompt(msg);
  }
}

function animeQ(){

  check = prompt(' Do I Like anime !');
  checkingInputs(check , 'please Enter yes or no');


  if (check.toLowerCase() === 'y' || check.toLowerCase() === 'yes') {
    //  console.log("you type yes");
    alert('no I didnt like animes');
  } else if (check.toLowerCase() === 'n' || check.toLowerCase() === 'no') {
    //  console.log("you type no");
    alert('correct :D ');
    score++;

  } else {
    //  console.log("Wrong answer");
    alert('Wrong answer');

  }
}

function cookingQ(){
  check = prompt(' Do I Like cooking !');
  checkingInputs(check , 'please enter Yes or No' );

  if (check.toLowerCase() === 'y' || check.toLowerCase() === 'yes') {
    //  console.log("you type yes");
    alert('correct :D ');
    score++;
  } else if (check.toLowerCase() === 'n' || check.toLowerCase() === 'no') {
    //  console.log("you type no");
    alert('no I like cooking');
  } else {
    //  console.log("Wrong answer");
    alert('Wrong answer');

  }
}


function booksQ(){
  check = prompt(' Do I Like reading Books !');

  checkingInputs(check , 'please Enter yes or no');


  if (check.toLowerCase() === 'y' || check.toLowerCase() === 'yes') {
    // console.log("you type yes");
    alert('correct :D ');
    score++;

  } else if (check.toLowerCase() === 'n' || check.toLowerCase() === 'no') {
    // console.log("you type no");
    alert('no I like reading books');
  } else {
    //  console.log("Wrong answer");
    alert('Wrong answer');

  }
}


function moviesQ(){
  check = prompt(' Do I Like Watching movies !');


  checkingInputs(check , 'please Enter yes or no');


  if (check.toLowerCase() === 'y' || check.toLowerCase() === 'yes') {
    //  console.log("you type yes");
    alert('correct :D ');
    score++;

  } else if (check.toLowerCase() === 'n' || check.toLowerCase() === 'no') {
    //  console.log("you type no");
    alert('no I like Watching movies');
  } else {
    //  console.log("Wrong answer");
    alert('Wrong answer');

  }
}


function guessLuckyNumbersQ(){
  let guess = prompt('Try to guess one of my lucky numbers');

  while (!isGuessed && numberofguesses < 6) {
    numberofguesses++;

    for (let index = 0; index < lukyNum.length; index++) {
      if (parseInt(guess) == lukyNum[index]) {
        alert('You guessed the correct number.');
        isGuessed = true;
        alert('It took you ' + numberofguesses + ' tries to guess the correct number!');
        score++;
        break;
      }
      // else {
      //    console.log(guess + ' != ' + lukyNum[index])

      // }

    }
    if (!isGuessed && numberofguesses < 6) {
      guess = prompt('  Your guess is lower than the number. Try again.');
    }

  }

}

function guessingGameQ(){
  let guessingNum = prompt('Let\'s Play a guessing game.. try to guess a number in my mind');
  checkingInputs(guessingNum , 'please enter a number bettwen 10 and 100');
  let myNum = randomNumber(100 , 10);
  for (let i = 0; i < 4; i++) {
    if (Number(guessingNum) === myNum) {
      score++;
      break;
    } else if (guessingNum > myNum) {
      alert('too high');
    } else if (guessingNum < myNum) {
      alert('too low');
    }
    if (i === 3) {
      alert(`looser, the number is ${myNum} ` );
      break;
    }
    guessingNum = prompt('Wrong .. try to guess another number in my mind');
  }
}

function randomNumber(max , min){
  return Math.floor(Math.random() * (max - min) + min);
}


function moreInfo(){
  check = prompt(' Do you Like to know more about me !');

  checkingInputs(check , 'please Enter yes or no');

  if (check.toLowerCase() === 'y' || check.toLowerCase() === 'yes') {
    //  console.log("you type yes");
    alert('thank you ' + userName + ' :D your scoor is ' + score);
  } else if (check.toLowerCase() === 'n' || check.toLowerCase() === 'no') {
    alert('OK  =( , thank you ' + userName );
    //  console.log("you type no");
  } else {
    //  console.log("Wrong answer");
    alert('Wrong answer ' + userName);

  }
}
///////////////function calls
getName();
animeQ();
cookingQ();
booksQ();
moviesQ();
guessLuckyNumbersQ();
guessingGameQ();
moreInfo();
alert (`:D your scoor is ${score}`);
alert(answers);
