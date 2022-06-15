function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var password = password.toLowerCase();
    const r1 = document.querySelector('.r1');
    // const hide = document.querySelector('.hide');

    if (password == "password") {
        r1.classList.remove('hide');
    }
    else {
        r1.classList.add('hide');
        alert("wrong username or password");
    }
}
