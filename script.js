// function convertBinaryToDecimal() {
//     const binaryInput = document.getElementById("binaryInput").value;

//     // Validate binary input
//     if (/^[01]+$/.test(binaryInput)) {
//       const decimalEquivalent = parseInt(binaryInput, 2);
//       document.getElementById("result").innerText = `Decimal Equivalent: ${decimalEquivalent}`;
//     } else {
//       document.getElementById("result").innerText = 'Invalid Binary Input. Enter 0s and 1s only.';
//     }
//   }



function sum(num1, num2){
    return num1 + num2
}

const numbers = sum(2+4, 5)
console.log(numbers)