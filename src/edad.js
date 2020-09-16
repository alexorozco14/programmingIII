document.getElementById("btnCalcular").addEventListener("click", function () {
  var edad = document.getElementById("txtEdad").value;
  var texto;

  if (parseFloat(edad) > 17) {
    texto = "LA PERSONA ES MAYOR DE EDAD";
  } else {
    texto = "LA PERSONA NO ES MAYOR DE EDAD";
  }

  document.getElementById("txtResultado").innerHTML = "<b>" + texto + "</b>";
});
