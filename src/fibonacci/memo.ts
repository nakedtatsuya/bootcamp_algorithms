const memo = new Array(51);
export const fibonacciMemo = (n: number): number => {
  if (n <= 1) return n;
  if (memo[n] !== undefined) return memo[n];
  memo[n] = fibonacciMemo(n - 2) + fibonacciMemo(n - 1);
  return memo[n];
};
