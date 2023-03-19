function tambah() {
  let angka1 = parseFloat(document.getElementById("angka1").value);
  let angka2 = parseFloat(document.getElementById("angka2").value);
  if (isNaN(angka1)) {
    alert("Maaf pada bagian Angka Pertama yang anda diinput bukan angka");
  } else if (isNaN(angka2)) {
    alert("Maaf pada bagian Angka Kedua yang anda diinput bukan angka");
  }
  let result = angka1 + angka2;
  document.getElementById("result").value = result;
}

function kurang() {
  let angka1 = parseFloat(document.getElementById("angka1").value);
  let angka2 = parseFloat(document.getElementById("angka2").value);
  if (isNaN(angka1)) {
    alert("Maaf pada bagian Angka Pertama yang anda diinput bukan angka");
  } else if (isNaN(angka2)) {
    alert("Maaf pada bagian Angka Kedua yang anda diinput bukan angka");
  }
  let result = angka1 - angka2;
  document.getElementById("result").value = result;
}

function kali() {
  let angka1 = parseFloat(document.getElementById("angka1").value);
  let angka2 = parseFloat(document.getElementById("angka2").value);
  if (isNaN(angka1)) {
    alert("Maaf pada bagian Angka Pertama yang anda diinput bukan angka");
  } else if (isNaN(angka2)) {
    alert("Maaf pada bagian Angka Kedua yang anda diinput bukan angka");
  }
  let result = angka1 * angka2;
  document.getElementById("result").value = result;
}

function bagi() {
  let angka1 = parseFloat(document.getElementById("angka1").value);
  let angka2 = parseFloat(document.getElementById("angka2").value);
  if (isNaN(angka1)) {
    alert("Maaf pada bagian Angka Pertama yang anda diinput bukan angka");
  } else if (isNaN(angka2)) {
    alert("Maaf pada bagian Angka Kedua yang anda diinput bukan angka");
  }
  let result = angka1 / angka2;
  document.getElementById("result").value = result;
}

function pangkat() {
  var angka1 = parseFloat(document.getElementById("angka1").value);
  var angka2 = parseFloat(document.getElementById("angka2").value);
  if (isNaN(angka1)) {
    alert("Maaf pada bagian Angka Pertama yang anda diinput bukan angka");
  } else if (isNaN(angka2)) {
    alert("Maaf pada bagian Angka Kedua yang anda diinput bukan angka");
  }
  let result = Math.pow(angka1, angka2);
  document.getElementById("result").value = result;
}
