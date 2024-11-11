var num1 = "", num2 = "", op = "";

function calc(ch) {
  if (ch >= '0' && ch <= '9') {
    let box = document.getElementById("box").value;
    box += ch;
    document.getElementById("box").value = box;

  } else if (ch === '=') {
    num2 = document.getElementById("box").value;
    let expr = num1 + op + num2;

    try {
      let res = eval(expr);
      document.getElementById("box").value = res;
      num1 = res;
      num2 = "";
      op = "";

    } catch (error) {
      document.getElementById("box").value = "Error";
      num1 = num2 = op = "";
    }

  } else if (ch === 'C') {
    num1 = "";
    num2 = "";
    op = "";
    document.getElementById("box").value = "";

  } else {
    num1 = document.getElementById("box").value;
    op = ch;
    document.getElementById("box").value = "";
  }
}
