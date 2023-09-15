const input = prompt("Input: ");

const isPalindrome = (str) => {
  return str === str.split('').reverse().join('');
};

if (isPalindrome(input)) {
  console.log("This word/phrase is a palindrome!");
} else {
  console.log("This word/phrase isn't a palindrome :(");
}
