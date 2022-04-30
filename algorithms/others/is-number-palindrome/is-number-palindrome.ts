// O(1)
function isNumberPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  }
  let rev: number = 0;
  let copyNum: number = x;

  while (copyNum != 0) {
    rev = rev * 10 + (copyNum % 10);
    copyNum = Math.floor(copyNum / 10);
  }
  return rev === x;
}

export { isNumberPalindrome };
