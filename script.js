const validate = () => {
  let name = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let cpassword = document.getElementById("cpassword").value;
  isEmail(email);
  isName(name);
  isPassword(password);
  isMatch(password, cpassword);
};

const isEmail = (email) => {
  if (email.length > 7 && email.includes("@gmail")) {
    document.getElementById("email").classList.add("sucess");
    document.getElementById("email").classList.replace("error", "success");
    document.getElementById("email__error").innerHTML = "";
  } else {
    document.getElementById("email").classList.add("error");
    document.getElementById("email__error").innerHTML =
      "Email must be 8 character and @gmail";
  }
};
const isName = (name) => {
  if (name.length > 7) {
    document.getElementById("username").classList.add("sucess");
    document.getElementById("username").classList.replace("error", "success");
    document.getElementById("name__error").innerHTML = "";
  } else {
    document.getElementById("username").classList.add("error");
    document.getElementById("name__error").innerHTML =
      "Username must be 8 character";
  }
};
const isPassword = (password) => {
  if (password.length > 7) {
    document.getElementById("password").classList.add("success");
    document.getElementById("password").classList.replace("error", "success");
    document.getElementById("password__error").innerHTML = "";
  } else {
    document.getElementById("password").classList.add("error");
    document.getElementById("password__error").innerHTML =
      "Password must be 8 character";
  }
};
const isMatch = (p1, p2) => {
  if (p1 === p2) {
    document.getElementById("cpassword").classList.add("success");
    document.getElementById("cpassword").classList.replace("error", "success");
    document.getElementById("password__error").innerHTML = "";
  } else {
    document.getElementById("cpassword").classList.add("error");

    document.getElementById("password__error").innerHTML =
      "Password isn't match";
  }
};
