


function greeting () {
    // input 
  
    var birthdate = new Date();
    var userorder = food ();
    var phoneNumber =  anyNumber();
    phoneNumber = prompt("Please Enter your Phone number");
    // processing
if ( phoneNumber> 000000000) {
    greeting = 'Good evening';
  } else if (birthdate > 1234) {
    greeting = 'Good afternoon';
  } else if (userorder >= 10 ) {
    greeting = 'Good morning!';
  } else {
    greeting = ' mahmoud seder';
  }

  // output
document.write('<h3>'+greeting+'</h3>');
}



//call function 
greeting ();