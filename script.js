function convertBinaryToDecimal() {
    const binaryInput = document.getElementById("binaryinput").value;
  
    // Validate binary input
    if (/^[01]+$/.test(binaryInput)) {
      const decimalEquivalent = parseInt(binaryInput, 2);
      document.getElementById("result").innerText = `${decimalEquivalent}`;
    } else {
      document.getElementById("result").innerText =
        "Invalid Binary Input. Enter 0s and 1s only.";
    }
  }

const object = {
  name:'Zainab',
  'last Name': 'Turkmen',
  feild: 'CS',
  method: function (){
    console.log('heheheh')
  }
}
console.log(object.method())

// const greeting = function(){
//   console.log()
// }