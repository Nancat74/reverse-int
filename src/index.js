module.exports = function reverse (n) {
    const numberArray = Math.abs(n).toString().split('');
    numberArray.reverse();
  
    return numberArray.join('');
  }
