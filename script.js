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





function returnFunc(){
    return 'I am learning return keyWord'
}

// returnFunc()
console.log(returnFunc())


function add2(num){
    return num + 2
}
const number = add2(3)

console.log(number)