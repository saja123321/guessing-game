'use strict'

let userName , check ;
 userName =  prompt("Whats Your name :");
alert("Welcome " + userName + " ,nice to meet you")

// Question #1
check = prompt(" Do I Like anime !");

if (check.toLowerCase() == 'y' || check.toLowerCase() == 'yes'){
  //  console.log("you type yes");
  alert("no I didnt like animes")
}else if (check.toLowerCase() == 'n' || check.toLowerCase() == 'no'){
  //  console.log("you type no");
  alert("correct :D ")

}else {
  //  console.log("Wrong answer");
  alert("Wrong answer")

}

// Question #2
check = prompt(" Do I Like cooking !");

if (check.toLowerCase() == 'y' || check.toLowerCase() == 'yes'){
  //  console.log("you type yes");
  alert("correct :D ")
}else if (check.toLowerCase() == 'n' || check.toLowerCase() == 'no'){
  //  console.log("you type no");
  alert("no I like cooking")
}else {
    //  console.log("Wrong answer");
    alert("Wrong answer")
  
  }

// Question #3
check = prompt(" Do I Like reading Books !");

if (check.toLowerCase() == 'y' || check.toLowerCase() == 'yes'){
   // console.log("you type yes");
   alert("correct :D ")
}else if (check.toLowerCase() == 'n' || check.toLowerCase() == 'no'){
   // console.log("you type no");
   alert("no I like reading books")
}else {
    //  console.log("Wrong answer");
    alert("Wrong answer")
  
  }


// Question #4
check = prompt(" Do I Like Watching movies !");

if (check.toLowerCase() == 'y' || check.toLowerCase() == 'yes'){
  //  console.log("you type yes");
  alert("correct :D ")
}else if (check.toLowerCase() == 'n' || check.toLowerCase() == 'no'){
  //  console.log("you type no");
  alert("no I like Watching movies")
}else {
    //  console.log("Wrong answer");
    alert("Wrong answer")
  
  }


// Question #5
check = prompt(" Do you Like to know more about me !");

if (check.toLowerCase() == 'y' || check.toLowerCase() == 'yes'){
  //  console.log("you type yes");
  alert("thank you " + userName +" :D")
}else if (check.toLowerCase() == 'n' || check.toLowerCase() == 'no'){
    alert("OK  =( , thank you "+ userName +" :D")
  //  console.log("you type no");
}else {
    //  console.log("Wrong answer");
    alert(" Wrong answer " + userName + ":D")
  
  }
