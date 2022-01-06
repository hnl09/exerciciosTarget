function reverseString(str) {
    let result = '';
  
    for (let i = str.length - 1; i >= 0; i--) {
      result += str[i];
    }
  
    return console.log(result);
  }

  reverseString('Olá meu nome é Henrique.')