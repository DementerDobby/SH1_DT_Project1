document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username && password) {
    alert("로그인 시도: " + username);
    // 여기에 실제 로그인 로직을 구현하세요
  } else {
    alert("아이디와 비밀번호를 모두 입력해주세요.");
  }
});
