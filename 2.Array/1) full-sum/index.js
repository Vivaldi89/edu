function fullSum(...args) {
  // Напиши свой код здесь
  let sum = 0
  let length = arguments.length
  if (length === 0) return 0
  else {
    for (let i = 0; i < length; i++) {
      if (typeof arguments[i] != 'number' || isNaN(arguments[i])) throw new Error("Wrong Argument Type") 
      sum += arguments[i];
    }
  }
  return sum
  console.log('LOOOOG', args, a);
}
window.fullSum = fullSum;