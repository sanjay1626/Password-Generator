function input(){
    //Lenght Validation ///
    //Prompt user for length of password 8 to 128 characters 
    var usrinput = parseInt(prompt("Please enter password length from 8 to 128 ", "")) ;
    // choose a length of at least 8 characters and no more than 128 characters -->
        if (usrinput >=8 && usrinput <= 128 ){
        //will store lenght under var usrinput and display in element length
        parseInt(window.alert("Your number (" + usrinput + ") it matches requirements", ""));
        document.getElementById("length").innerHTML = "This is the length choosen:" + usrinput ;
    // If no value will alert
        }else if (isNaN(usrinput)){
            parseInt(window.alert("It is not a number. Please enter from 1-10",""));
            input();
    //If user  input is below 8 or 128 character
        }else {
            parseInt(window.alert("Your number (" + usrinput +") is below 8 or above 128 characters long",""));
            input();
             }
    //End loop and move to next Validation

    //Password criteria validation

        //For LowerCase criteria
        var charlower = confirm("Would you like in all Lowercase letter?", "lower");
              if (charlower == true ){        
                  //Generates random strings and display user results
                  document.getElementById("display").innerText = (generate_random_stringlower(usrinput));
                  //console.log for verification values are correct and for coding purposes
                  console.log(generate_random_stringlower(usrinput));
                  //If true
                  return charlower;
                }else {
                
                  //call fundtion uppercase for next validation
                  uppercase(usrinput);
                  
                }

        //Uppercase Function
        function uppercase(usrinput){
        var charupper = confirm("Would you like in all Uppercase letter?", "upper");
              if (charupper == true){
                 
                  //Generates random strings and display user results
                  document.getElementById("display").innerText = (generate_random_stringupper(usrinput));
                  //console.log for verification values are correct and for coding purposes
                  console.log (generate_random_stringupper(usrinput)); 
                  return charupper;
              }else { 
              
                  //call fundtion number for next validation
                  numbers(usrinput);
              } 
            }
        //Number Function
        function numbers(usrinput){  
            //Number input
            var charnumber = confirm("Would you like all in Numbers", "number");
                  if (charnumber == true){
                     
                      //Generates random strings and display user results
                      document.getElementById("display").innerText = (generate_random_number(usrinput));
                      //console.log for verification values are correct and for coding purposes
                      console.log(generate_random_number(usrinput));
                      return charnumber;
                  }else {
                   
                    //call fundtion number for next validation
                    charspecial(usrinput);
                  }
               }
        //special characters function
        function charspecial(usrinput){
            //Special Character input     
            var charspecial = confirm("Would you like all in Special Characters?", "special");
                  if (charspecial == true){      
                    
                      //Generates random strings and display user results
                      document.getElementById("display").innerText = (generate_random_stringspecial(usrinput));
                       //console.log for verification values are correct and for coding purposes
                      console.log(generate_random_stringspecial(usrinput));
                      return charspecial;
                  }else {
                   
                    //call fundtion number for next validation
                    alphanumsymbol();
         }
      }
        //Alphnumeric with specialcharacters function
        function alphanumsymbol(){
           //Uppercase,Lowercase,numbers & symbols
           var charalphanum = confirm("Would you like to generate AlphaNumberic with symbols", "alphanum");
             if (charalphanum == true){
                
                 document.getElementById("display").innerText = (generate_random_stringalphanumsymbol(usrinput));
                       //console.log for verification values are correct and for coding purposes
                 console.log(generate_random_stringalphanumsymbol(usrinput));
                 return charalphanum;
             }else {
             
                //call fundtion number for next validation
               upperlower();
             } 
        }
      //Upper and lower function
        function upperlower(){
             //function for upper and lower case
              var  charupperlower = confirm("Would you like in Upper & Lowercase", "upperlower");
               if (charupperlower == true){
                //Generates random strings and display user results
                  document.getElementById("display").innerText = (generate_random_stringupperlower(usrinput));
                  //console.log for verification values are correct and for coding purposes
                  console.log(generate_random_stringupperlower(usrinput));
                  return charupperlower;
               }else {
                   alphanum();
               }
        }
        //Alphanumeric function
        function alphanum(){
            var  charalphanum = confirm("Would you like in AlphaNumeric", "alphanum");
               if (charalphanum == true){
                //Generates random strings and display user results
                  document.getElementById("display").innerText = (generate_random_stringalphanum(usrinput));
                  //console.log for verification values are correct and for coding purposes
                  console.log(generate_random_stringalphanum(usrinput));
                  return charalphanum;
               }else {
                   window.alert("You Need to choose a password criteria")
               }
        }
    
//End loop Generate()      
}
// WHEN prompted for character types to include in the password -->
//THEN I choose lowercase, uppercase, numeric, and/or special characters -->

/* create a var to store values */

//Generate random lowercase
//String would random based on the ascii number 
function generate_random_stringlower(usrinput){
    let random_string = '';
    let random_ascii;
    for(let i = 0; i < usrinput; i++) {
        random_ascii = Math.floor((Math.random() * 25) + 97);
        random_string += String.fromCharCode(random_ascii)
    }
    return random_string
}
//Generate random uppercase
//String would random based on the ascii number 
function generate_random_stringupper(usrinput){
    let random_string = '';
    let random_ascii;
    let ascii_low = 65;
    let ascii_high = 90
    for(let i = 0; i < usrinput; i++) {
        random_ascii = Math.floor((Math.random() * (ascii_high - ascii_low)) + ascii_low);
        random_string += String.fromCharCode(random_ascii)
    }
    return random_string
}
//Generate random upper & lower characters
//Another example declaring the charcters as const
function generate_random_stringupperlower(usrinput){
      let random_string ='';
      const list ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      for(let i = 0; i < usrinput; i++){
          var rnd = Math.floor(Math.random() * list.length);
          random_string = random_string + list.charAt(rnd);
      }
      return random_string
}
//Generates random special characters
//Another example declaring the charcters as const
function generate_random_stringspecial(usrinput){
    let random_string ='';
    const list ="~`!@#$%%^&*(){}][|\"':;>.?/<,+=";
    for(let i = 0; i < usrinput; i++){
        var rnd = Math.floor(Math.random() * list.length);
        random_string = random_string + list.charAt(rnd);
    }
    return random_string
}
//Generates radom alpha num with special characters
//String would random based on the ascii number
function generate_random_stringalphanumsymbol(usrinput){
    
    let random_string = '';
    let random_ascii;
    let ascii_low = 48;
    let ascii_high = 122;
    
    for(let i=0; i < usrinput; i++){
        random_ascii = Math.floor((Math.random() * (ascii_high - ascii_low)) + ascii_low) 

        random_string += String.fromCharCode(random_ascii)   
    }
    return  random_string

}
//Generates random Alphanumeric
//Another example declaring the charcters as const
function generate_random_stringalphanum(usrinput){
    let random_string ='';
    const list ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(let i = 0; i < usrinput; i++){
        var rnd = Math.floor(Math.random() * list.length);
        random_string = random_string + list.charAt(rnd);
    }
    return random_string
}
//Genrates random numbers based on user length
function generate_random_number(usrinput){

    return Math.floor(Math.pow(9, usrinput-1) + Math.random() * 9 * Math.pow(9, usrinput-1));
}

















