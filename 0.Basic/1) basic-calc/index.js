function basicCalc(operation, a, b) {
  // Напиши свой код здесь
  switch (operation) {
    case '*':
      return a*b 
      break;
    case '/':
      return a/b
      break;
    case '+':
      return a+b
      break;
    case '-':
      return a-b
    default:
      break;
  }
}

window.basicCalc = basicCalc;

export default basicCalc;

