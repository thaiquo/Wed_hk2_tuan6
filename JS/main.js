function testFromt() {
  let x = prompt("Nhập MSSV");
  let y = prompt("Nhập tên");
  let z = prompt("Nhập lớp");

  document.getElementById("demo1").innerHTML = x;
  document.getElementById("demo2").innerHTML = y;
  document.getElementById("demo3").innerHTML = z;
}

function tranform() {
  if (ktMatKhau() && ktHoten()) {
    // document.getElementById("dn_hoten").innerHTML =
    //   document.getElementById("dk_hoten").value;
    // document.getElementById("dn_mk").innerHTML =
    //   document.getElementById("dk_mk").value;

    let valueHten = document.getElementById("dk_hoten").value;
    let valuePass = document.getElementById("dk_mk").value;

    localStorage.setItem("name", valueHten);
    localStorage.setItem("pass", valuePass);
    let w = window.open("bai2a_1.html");
  }
}

function ktMatKhau() {
  var regex1 = /[a-zA-z]{4,}/;
  if (regex1.test(document.getElementById("dk_mk").value)) {
    document.getElementById("msgMatKhau").innerHTML = "*";
    return true;
  } else {
    document.getElementById("msgMatKhau").innerHTML = "Mật khẩu không hợp lệ !";
    return false;
  }
}

function ktHoten() {
  var regex = /^([A-Z]{1}[a-z]*\s)([A-Z]{1}[a-z]*\s)*([A-Z]{1}[a-z]*)$/;
  if (regex.test(document.getElementById("dk_hoten").value)) {
    document.getElementById("msgHoten").innerHTML = "*";
    return true;
  } else {
    document.getElementById("msgHoten").innerHTML = "Họ tên không hợp lệ !";
    return false;
  }
}
