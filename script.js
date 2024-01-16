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


function four(){
    return 4
}

function add8(callback){
   return callback + 8
}

const result = add8(four)

console.log(result)