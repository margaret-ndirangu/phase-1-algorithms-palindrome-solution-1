function reverseString(word) {
  // TODO: implement string reversing functionality
    // create an array from the input string
    const wordArray = word.split("");
    // reverse the array
    const reversedWordArray = wordArray.reverse();
    // create a string from the reversed array
    const reversedWord = reversedWordArray.join("");
    // return the reversed string
    return reversedWord;
  }


function isPalindrome(word) {
  // Write your algorithm here
  
  //Add your pseudocode here
  //reverse the input string
 const reversedWord = reverseString(word);
//if the reversed string is the same as the input
  //return true
//else
  //return false
  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }

}
/*
  Add written explanation of your solution here
  create an array from the input string
reverse the array
create a string from the reversed array
return the reversed string
*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}


module.exports = isPalindrome;
