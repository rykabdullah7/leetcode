/* 
Write a function certificateParser which takes an input string as function
  argument. The function should be able to format the input into a valid FT.98
  certificate. The certificate contains the following format.

  1. Valid Certificate must start with header '++START++' and ends with footer
     as '--END--'.

  2. The Certificate contains a hash of string between it's header and footer.

  3. Largest length of each line can not be more than 20 characters. If you
     have an input whose length is more than 20 characters then add new line
     character to full fill this rule.

EXAMPLE:

  # Given Input:

  >  '6096b887095711e8a6da4a0002cb05306096b887095711e8'

  # Expected Output:

  >  '++START++\n6096b887095711e8a6da\n4a0002cb05306096b887\n095711e8\n--END--'

  Where: '\n' is a character representing a new line.
*/


var inputStr = '6096b887095711e8a6da4a0002cb05306096b887095711e8';
function certificateParser(inputStr) {
  // Write Your Code Here. You can use `console.log()` or `return` the output result.
    let arr = inputStr.split("");
    let num =0;
    count = 20;
    for (let i = 0; i< arr.length;i++){
        if(num === count){
            arr.splice(i,0,"\n")
            num=0;
        }
        else if (arr[i] !== "\n"){
            num++
        }
    }
    
    arr.unshift("++START++\n")
    if(arr[arr.length-1] == "\n"){
        arr.push("--END--")
    }
    else{
        arr.push("\n--END--")
    }
    let validCertificate = arr.join("")
    
    
    
  // var validCertificate = ...;
    console.log(validCertificate);
   return validCertificate;
}
certificateParser(inputStr)
