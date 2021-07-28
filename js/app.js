'use strict';

let userName, check;
let score = 0;
let guessOut = false;
let lukyNum = [55, 22, 2, 12, 10];

userName = prompt('Whats Your name :');

while (!userName) {
    userName = prompt('please enter Your name :');
}

alert('Welcome ' + userName + ' ,nice to meet you');

// Question #1
check = prompt(' Do I Like anime !');

while (!check) {
    check = prompt('please enter Yes or No');
}

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

// Question #2
check = prompt(' Do I Like cooking !');

while (!check) {
    check = prompt('please enter Yes or No');
}

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

// Question #3
check = prompt(' Do I Like reading Books !');

while (!check) {
    check = prompt('please enter Yes or No');
}

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


// Question #4
check = prompt(' Do I Like Watching movies !');


while (!check) {
    check = prompt('please enter Yes or No');
}

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

// Q7
let guess = prompt('Try to guess one of my lucky numbers')
let numberofguesses = 0;
let isGuessed;
isGuessed = false;

while (!isGuessed && numberofguesses < 6) {
    numberofguesses++;

    for (let index = 0; index < lukyNum.length; index++) {
        if (parseInt(guess) == lukyNum[index]) {
            alert("You guessed the correct number.");
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

// Question #6
let guessingNum = prompt('Let\'s Play a guessing game.. try to guess a number in my mind');
while (!guessingNum) {
    guessingNum = prompt('please enter a number');
}
let myNum = Math.floor(Math.random() * (50 - 0) + 0);
console.log(myNum+ " ");
for (let i = 0; i < 4; i++) {
    if (Number(guessingNum) === myNum) {
        score++;
        break;
    } else if (guessingNum > myNum) {
        alert('too high');
    } else if (guessingNum < myNum) {
        alert('too low');
    }
    if (i == 3) {
        alert('looser');
        break;
    }
    guessingNum = prompt('Wrong .. try to guess another number in my mind');

}

// Question #5
check = prompt(' Do you Like to know more about me !');


while (!check) {
    check = prompt('please enter Yes or No');
}
if (check.toLowerCase() === 'y' || check.toLowerCase() === 'yes') {
    //  console.log("you type yes");
    alert('thank you ' + userName + ' :D your scoor is ' + score);
} else if (check.toLowerCase() === 'n' || check.toLowerCase() === 'no') {
    alert('OK  =( , thank you ' + userName + ' :D your scoor is ' + score);
    //  console.log("you type no");
} else {
    //  console.log("Wrong answer");
    alert('Wrong answer ' + userName + ':D your scoor is ' + score);

}