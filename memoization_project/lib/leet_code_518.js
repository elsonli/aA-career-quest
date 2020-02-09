// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

const coinChange = (amount, coins, memo={}) => {
  let key = amount + coins;
  if (key in memo) return memo[key];
  if (!amount) return 1;
  let total = 0;
  let currCoin = coins[0];
  for (let idx = 0; currCoin * idx <= amount; idx++) {
    const newAmount = amount - (currCoin * idx);
    total += coinChange(newAmount, coins.slice(1), memo);
  }
  memo[key] = total;
  return memo[key];
}

// console.log(coinChange(5, [1, 2, 5]));
// console.log(coinChange(100, [99, 1]));
// console.log(coinChange(500, [3, 5, 7, 8, 9, 10, 11]));