// O(n)
export function get_max_profit(arr: number[]): number {
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
