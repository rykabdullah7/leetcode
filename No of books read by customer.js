/*
Write a function book_read_counter(data, customerId) that accepts 
  two input arguments.

The first argument (data) of the function is a string, Which is obtained by
  reading a valid Comma Separated File (CSV). The format of the CSV file
  was following.

# BookID, BookName, CustomerID

# Where
  1. 'BookID' is a valid number.
  2. 'BookName' is a string representing the name of the book.
  3. 'CustomerID' is a valid number which is unique for each customer.

The second argument (customerId) is an integer which represents the
  customer unique id.

Your Goal is to write a function that will return an integer. This integer
  should be the count of the book read by the customer.

Example:
  # Input
  >  var data = '1,Quran,234\n2,Kitab,456\n3,Sunnah,234';
  >  var customerId = 234;

  # Output
  >  2
*/

var data = '1,Quran,234\n2,Kitab,456\n3,Sunnah,234';
var customerId = 234;

function book_read_counter(data, customerId) {
    let bookRead = 0
    let arr = data.split("\n")
    for(let i = 0; i< arr.length;i++){
        let arr1 = arr[i].split(",");
        if(customerId == arr1[2]){
            bookRead++
        }
    }
    console.log(bookRead)
  // Write Your Code Here. You can use `console.log()` or `return` the output result.
    
  // var bookRead = ...;
  // console.log(bookRead);
   return bookRead;
}

book_read_counter(data, customerId);
