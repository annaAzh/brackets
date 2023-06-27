module.exports = function check(str, bracketsConfig) {
  const arr = bracketsConfig.map(elem => elem[0] + elem[1]);
  for (let i = 0; i < arr.length; ) {
    if (str.includes(arr[i])){
      str = str.replace(arr[i], '');
      i = 0;
    } else {
      i++;
    }
  }
  return str.length === 0;
}
