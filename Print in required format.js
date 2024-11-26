/*
Write a function claimsIdExtractor which accepts 1 argument of type string.
  The function should print or return the ID of Claim as described in the
  following format:

# Input String Format.
  {CountryCode},{UniqueNumber} {Kind}

# Expected Output Format:
  {Kind}-{UniqueNumber}-{CountryCode}

# WHERE 
  1. {CountryCode} composed of 2 characters.
  2. {UniqueNumber} can be any positive number.
  3. {Kind} is a string.

# Example

# Input String.
> var inputStr = 'PK,12345 A34';

# Expected Output.
> 'A34-12345-PK'
*/

var inputStr = 'PK,12345 A34';

function claimsIdExtractor(inputStr) {
  // Write Your Code Here. You can use `console.log()` or `return` the output result.
    let claimId='';
    let arr = inputStr.split("");
    for(let i=0; i< arr.length;i++){
        if(arr[i]=== " " || arr[i]=== ","){
            arr[i]= "-"
        }
    }
    claimId = arr.join("")
    arr = claimId.split("-");
    let temp = arr[0];
    arr[0] = arr[2];
    arr[2] = temp
    claimId = arr.join("-")
    
  // var claimId = ...;
   console.log(claimId);
   return claimId;
}

claimsIdExtractor(inputStr);
