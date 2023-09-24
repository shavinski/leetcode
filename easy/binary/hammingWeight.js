/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    let numToString = n.toString(2);
    let bitCount = 0;

    for (let bit of numToString) {
        if (bit === '1') bitCount++;
    }

    return bitCount;
};

/**
    .toString(2) this keeps the number in base 2 also called binary which
    is a sequence of 0's and 1's 
  
    Looking from the bottom number up, we have the numbers:

    1 <- 2 <- 5 <- 10 <- 21 <- 42

    1    0    1     0     1     0

    we keep dividing 42 by 2 until we reach 0 or 1 and we round down if we get 
    a decimal, example the 10 was 10.5, but we just make it 10

    odd numbers get a 1 and even numbers get a 0

    so the binary number for 42 is 
    101010


 */