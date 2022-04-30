let stock_prices_yesterday: number[] = [10, 8, 7, 5, 4, 1];

// O(n^2)
function get_max_profit(arr: number[]): number {
  let maxProfit = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (maxProfit < arr[j] - arr[i]) {
        maxProfit = arr[j] - arr[i];
      }
    }
  }
  return maxProfit;
}

// O(n)
function get_max_profit_linear(arr: number[]): number {
  let profit = 0;
  let minSellIndex: number = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[minSellIndex] > 0 && arr[i] - arr[minSellIndex] > profit) {
      profit = arr[i] - arr[minSellIndex];
    } else {
      minSellIndex = i;
    }
  }
  return profit;
}

/** ------------------------------------------------------------------------------- */

// O(n)
function twoSum(nums: number[], target: number): number[] {
  let result: number[] = [];
  let buffer: Map<number, number> = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    buffer.set(nums[i], i);
  }

  let flag: boolean = false;
  for (let i = 0; i < nums.length && !flag; i++) {
    if (buffer.get(target - nums[i])) {
      result.push(i);
      result.push(buffer.get(target - nums[i]));
      flag = true;
    }
  }

  return result;
}

let nums = [2, 7, 11, 15, 21, 3, 12, 4, 2, 44];

console.log('twoSum input = ', nums, ' Output = ', twoSum(nums, 51));

/** ------------------------------------------------------------------------------- */

// O(1)
function isPalindrome(x: number): boolean {

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
 
let x = -121;
console.log('isPalindrome input = ', x, ' Output = ', isPalindrome(x));

/** --------------------------------------------------------------------------------- */