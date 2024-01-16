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
  