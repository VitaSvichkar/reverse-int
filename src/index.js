module.exports = function reverse(n) {
    const strArr = String(Math.abs(n)).split("");
    const reverseNum = parseInt(strArr.reverse().join(""));
    return reverseNum;
};
