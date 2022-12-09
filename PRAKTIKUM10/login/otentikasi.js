function login() {
    event.preventDefault();
    let uname = document.getElementById("username").value;
    let pwd = document.getElementById("password").value;

    if (uname == "ayang15" && pwd == "12345"){
        location.replace("sukses.html");
        alert("Login berhasil");
    } else {
        alert("Login gagal!");

    }
}