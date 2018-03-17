import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {

  numeros = [];

  constructor() { }

  generatePin() {
    const x = 1000;
    const y = 9000;

    //PIN code  [1000,9999]
    return Math.floor(x + Math.random() * y);
  }

  uniquePin(numero: number): boolean {
    //if numero is not found in the vector return true else return false
    return this.numeros.every(num => num != numero);
  }

  validateConsecutive(numero: number): boolean {
    let resul = numero.toString().split('');
    let searched: boolean = false;
    for (let i = 1; i < resul.length; i++) {
      if (resul[i - 1] === resul[i]) {
        searched = true;
        break;
      }
    }
    return searched;
  }

  validateIncremental(numero: number): boolean {
    let resul = numero.toString().split('');
    let searched: boolean = false;
    let n = 0;

    if ((resul[0] < resul[1]) && (resul[1] < resul[2])) {
      searched = true;
    } else if ((resul[1] < resul[2]) && (resul[2] < resul[3])) {
      searched = true;
    } else {
      searched = false;
    }

    return searched;
  }

  finalValidation(numero: number): boolean {
    if (!this.validateIncremental(numero) &&
      !this.validateConsecutive(numero) &&
      this.uniquePin(numero)) {
      return true;
    } else {
      return false;
    }
  }

  generateBatch() {

    let n = 1000; //1000 PINcode
    let i = 0;
    let random;

    //Generate 1000 PIN Code
    while (i < n) {
      random = this.generatePin();
      if (this.finalValidation(random)) {
        this.numeros.push(random);
        i++;
      }
    }

    return this.numeros;
  }

  //exercise 1
  solution1() {
    let array1 = [1, 1, 3, 5];
    let array2 = [1, 2, 3, 4];
    return array1.concat(array2).sort();
  }

}


