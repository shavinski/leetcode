/**
 * @param {number[]} prices
 * @return {number}

    Two pointers 
        keep track of left, left will be lowest buy price
        keep track of right, right will be the highest buy price 
        keep track of profit 

        while loop, while the right pointer is less than length of arr
            check if the left pointer is less than right 
                get the right minus left and make it the profit, compare the maxs 
            else 
                make the left pointer equal to the right pointer (new lowest buy)

            increase right pointer  

 */
function maxProfit(prices) {
    let left = 0;
    let right = 0;
    let profit = 0;

    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            profit = Math.max(profit, prices[right] - prices[left]);
        } else {
            left = right;
        }

        right += 1;
    }

    return profit;
};