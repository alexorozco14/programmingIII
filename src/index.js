document.getElementById("btnCalcular").addEventListener("click", function () {
  var num1 = document.getElementById("txtNum1").value;
  var num2 = document.getElementById("txtNum2").value;

  if (isNaN(num1) || isNaN(num2)) {
    var result = "Es necesarios introducir dos números válidos";
  } else {
    var suma = parseFloat(num1) + parseFloat(num2);
    result = suma;
  }

  document.getElementById("txtResultado").innerHTML = "<b>" + result + "</b>";
});
