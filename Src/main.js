function getResult(num) {
    var result = document.getElementById("result");
    result.value += num;
  }
  
  function clearResult() {
    var result = document.getElementById("result");
    result.value = "";
  }
  
  function deleteChar() {
    var result = document.getElementById("result");
    result.value = result.value.slice(0, -1);
  }
  
  function calculate() {
    var result = document.getElementById("result");
    result.value = eval(result.value);
  }
  