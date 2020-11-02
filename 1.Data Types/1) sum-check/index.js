function sumCheck(a, b) {
  // Напиши свой код здесь
  
    if (typeof a != 'number' || typeof b != 'number' ) {
      throw new Error("Wrong arguments type!");
    }
    
    return a+b
}

window.sumCheck = sumCheck;

export default sumCheck;
