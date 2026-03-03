
document.getElementById("login").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
   const email = document.getElementById("email").value.trim();
   const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("error-msg");


if (username === "megha" && email === "malpemegha@gmail.com" && password === "2211") {
  errorMsg.style.color = "green";
  errorMsg.textContent = "Login successful!!";

  setTimeout(() => {
    window.location.href = "img.html";
  }, 1000);
} else {
  errorMsg.style.color = "red";
  errorMsg.textContent = "Invalid details!";
}
});

