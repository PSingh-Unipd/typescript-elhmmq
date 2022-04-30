// O(n)
export function two_sum(nums: number[], target: number): number[] {
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
