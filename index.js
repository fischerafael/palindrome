console.log(palindrome("eye"));
console.log(palindrome("race car"));
console.log(palindrome("not a palindrome"));
console.log(palindrome("a man, a plan, a canal. Panama"));
console.log(palindrome("never odd or even"));
console.log(palindrome("nope"));
console.log(palindrome("almostomla"));
console.log(palindrome("My age is 0, 0 si ega ym."));
console.log(palindrome("1 eye for of 1 eye."));
console.log(palindrome("0_0 (: /-\\ :) 0–0"));

function palindrome(string) {
  const rawString = String.raw`${string}`;
  const lowerCaseString = stringToLowerCase(rawString);

  const stringArray = stringToArray(lowerCaseString, "");
  const sanitezedStringArray = stringArraySanitization(stringArray);

  const reversedStringArray = reverseStringArray(sanitezedStringArray);
  const reversedStringArrayWithCharReplacement = reversedStringArray.map(
    (item) => {
      if (item === "(") return ")";
      if (item === ")") return "(";
      if (item === "–") return "_";
      if (item === "_") return "–";
      if (item === "\\") return "/";
      if (item === "/") return "\\";
      return item;
    }
  );

  return verifyPalindrome(
    sanitezedStringArray,
    reversedStringArrayWithCharReplacement
  );
}

function stringToLowerCase(string) {
  return string.toLowerCase();
}

function stringToArray(string, condition) {
  return string.split(condition);
}

function stringArraySanitization(stringArray) {
  return stringArray.filter(
    (char) => char !== " " && char !== "," && char !== "."
  );
}

function reverseStringArray(stringArray) {
  return [].concat(stringArray).reverse();
}

function verifyPalindrome(arrayA, arrayB) {
  return arrayA.every((value, index) => value === arrayB[index]);
}
