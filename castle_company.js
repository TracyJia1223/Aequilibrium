function totalCastles(array) {
  // suppose the array is non-empty and only contains numbers
  var res = 0;
  var isRising = 'unknown';
  for (var i = 1; i < array.length; i++) {
    if (array[i-1] < array[i]) {
      if (isRising === 'false') {
        res++;
      }
      isRising = 'true';
    } else if (array[i-1] > array[i]) {
      if (isRising === 'true') {
        res++;
      }
      isRising = 'false';
    }
  }
  // suppose we can build castle both at the start AND the end of the array
  res = res + 2;
  console.log(res);
  return res;
}

var array = [1,2,3,3,2];
totalCastles(array);
