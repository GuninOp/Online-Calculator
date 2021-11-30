function getInputValue() {
  var inv1 = parseInt(document.getElementById("n1").value);
  var inv2 = parseInt(document.getElementById("n2").value);
  var oprtr = document.getElementById("operator").value;

  let result = 0

  if (oprtr == "+") {
    result = inv1 + inv2;
    console.log(result);
    window.alert("The answer of this question is "+ result)
  }
  if (oprtr == "-") {
    result = inv1 - inv2;
    console.log(result);
    window.alert("The answer of this question is "+ result)
  }
  if (oprtr == "*") {
    result = inv1 * inv2;
    console.log(result);
    window.alert("The answer of this question is "+ result)
  }
  if (oprtr == "/") {
    result = inv1/inv2;
    console.log(result);
    window.alert("The answer of this question is "+ result)
  }
  else{
    window.alert("Please enter all value(s) correctly.")
  }
}