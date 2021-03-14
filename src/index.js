

exports.min = function min (array) {
    if (array == undefined) {
        return 0;
     }
     if (array.length == 0) {
         return 0;
      }
    return Math.min.apply( Math, array );
};

exports.max = function max (array) {
    if (array == undefined) {
       return 0;
    }
    if (array.length == 0) {
        return 0;
     }
    return Math.max.apply( Math, array );
};

exports.avg = function avg (array) {
    if (array == undefined) {
      return 0
    }
    if (array.length == 0) {
      return 0;
    }
    let avgSum = 0;
    for (const arr of array) {
        avgSum += arr
      }
    return avgSum / array.length
  }
