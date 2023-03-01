class Calculator {
  constructor(FirstNumberElement, SecondNumberElement) {
    this.FirstNumberElement = FirstNumberElement;
    this.SecondNumberElement = SecondNumberElement;
    this.clear();
  }

  clear() {
    this.FirstNumber = "";
    this.SecondNumber = "";
    this.operation = undefined;
  }

  delete() {
    this.SecondNumber = this.SecondNumber.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (number === "." && this.SecondNumber.includes(".")) return;
    this.SecondNumber = this.SecondNumber.toString() + number.toString();
  }

  chooseoperation(operation) {
    if (this.SecondNumber === "") return;
    if (this.FirstNumber !== "") {
      this.compute();
    }
    this.operation = operation;
    this.FirstNumber = this.SecondNumber;
    this.SecondNumber = "";
  }

  compute() {
    let result;
    const num1 = parseFloat(this.FirstNumber);
    const num2 = parseFloat(this.SecondNumber);
    if (isNaN(num1) || isNaN(num2)) return;

    if (this.operation == "+") {
      result = num1 + num2;
    } else if (this.operation == "-") {
      result = num1 - num2;
    } else if (this.operation == "÷") {
      result = num1 / num2;
    } else if (this.operation == "x") {
      result = num1 * num2;
    } else {
      return;
    }
    this.SecondNumber = result;
    this.operation = undefined;
    this.FirstNumber = "";
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split(".")[0]);
    const decimalDigits = stringNumber.split(".")[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerDigits.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }

  updateDisplay() {
    this.SecondNumberElement.innerText = this.getDisplayNumber(
      this.SecondNumber
    );
    if (this.operation != null) {
      this.FirstNumberElement.innerText = `${this.getDisplayNumber(
        this.FirstNumber
      )} ${this.operation}`;
    } else {
      this.FirstNumberElement.innerText = "";
    }
  }
}

const ButtonNumber = document.querySelectorAll("[data-number]");
const OperationKeys = document.querySelectorAll("[data-operation]");
const AllClearBtn = document.querySelector("[data-all-clear]");
const DeleteBtn = document.querySelector("[data-delete]");
const FirstNumberElement = document.querySelector("[data-First-Number]");
const SecondNumberElement = document.querySelector("[data-Second-Number]");
const EqualToBtn = document.querySelector("[data-equals]");

const calculator = new Calculator(FirstNumberElement, SecondNumberElement);

ButtonNumber.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(calculator.SecondNumber);
    if (calculator.SecondNumber.length >= 20) {
      return;
    }
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

OperationKeys.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseoperation(button.innerText);
    calculator.updateDisplay();
  });
});

EqualToBtn.addEventListener("click", (button) => {
  calculator.compute();
  calculator.updateDisplay();
});

AllClearBtn.addEventListener("click", (button) => {
  calculator.clear();
  calculator.updateDisplay();
});

DeleteBtn.addEventListener("click", (button) => {
  calculator.delete();
  calculator.updateDisplay();
});

// compute(){
//     let result
// const num1 = parseFloat(this.firstNumber);
// const num2 = parseFloat(this.secondNumber);
// if (isNaN(num1) || isNaN(num2))
// return

// if (oper == "+") {
//   result = (num1 + num2);
// } else if (oper == "-") {
//   result = (num1 - num2);
// } else if (oper == "÷") {
//   result = (num1 / num2);
// } else if (oper == "x") {
//   result = (num1 * num2);
// } else {
//   result = ("Invalid Operator");

// }

//     this.secondNum = result
//     this.operation = undefined
//     this.firstNum = ''

// }
