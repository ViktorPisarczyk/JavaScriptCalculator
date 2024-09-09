// 1. Setup
class Calculator {
  constructor() {
    this.PI = Math.PI;
    this.E = Math.E;
  }

  // 2. Methods

  ratio(x, y, width) {
    return (width * y) / x;
  }

  percentage(x, y) {
    if (y === 0) {
      return "Error: Divisor cannot be zero";
    } else return `${(x / y) * 100}%`;
  }

  add(x, y) {
    return x + y;
  }

  subtract(x, y) {
    return y - x;
  }

  multiply(x, y) {
    return x * y;
  }

  divide(x, y) {
    if (y === 0) {
      return "Error: Divisor cannot be zero";
    } else return x / y;
  }

  remainder(x, y) {
    if (y === 0) {
      return "Error: Divisor cannot be zero";
    } else return x % y;
  }

  elevate(x, y) {
    return x ** y;
  }

  sqrt(x) {
    if (x < 0) {
      return "Error: Cannot calculate the square root of a negative number";
    } else return Math.sqrt(x);
  }

  modulate(x, y) {
    return x % y;
  }

  diameterOfCircle(circumference) {
    return `The diameter of a circle with a circumference of ${circumference} is ${
      circumference / this.PI
    } cm.`;
  }

  circumferenceOfCircle(diameter) {
    return `The circumference of a circle with a diameter of ${diameter} is ${(
      diameter * this.PI
    ).toFixed(2)} cm.`;
  }

  compoundInterest(PV, r, t) {
    return `If you invest ${PV}€ with an interest rate of ${r}% for ${t} years, you will end up with ${
      PV * Math.pow(this.E, (r / 100) * 3)
    } €.`;
  }
}

// 3. Results

let calc = new Calculator();

console.log(calc.ratio(5, 7, 300)); // 420
console.log(calc.percentage(3, 12)); // 25%
console.log(calc.percentage(3, 0)); // Error: Divisor cannot be zero
console.log(calc.add(5, 7)); // 12
console.log(calc.subtract(5, 7)); // 2
console.log(calc.multiply(5, 7)); // 35
console.log(calc.divide(35, 7)); // 5
console.log(calc.divide(35, 0)); // Error: Divisor cannot be zero
console.log(calc.remainder(35, 8)); // 3
console.log(calc.remainder(35, 0)); // Error: Divisor cannot be zero
console.log(calc.modulate(7, 5)); // 2
console.log(calc.elevate(5, 3)); // 125
console.log(calc.sqrt(25)); // 5
console.log(calc.sqrt(-25)); // Error: Cannot calculate the square root of a negative number
console.log(calc.diameterOfCircle(50)); // 15.92
console.log(calc.circumferenceOfCircle(15.915)); // 50
console.log(calc.compoundInterest(1000, 3, 3));
