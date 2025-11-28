const popup = document.querySelector(".popup");
const closeBtn = popup.querySelector("button");
const closeCheck = popup.querySelector("#agree");

//쿠키확인
const result = document.cookie.includes("popup=none");
if (result) {
  popup.style.display = "none";
} else {
  popup.style.display = "flex";
}
//팝업 닫기
closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
  if (closeCheck.checked) {
    createCookie("popup", "none", 1);
  } else {
    deleteCookie("popup", "none", -1);
  }
});
function deleteCookie(name, value, due) {
  let today = new Date();
  today.setDate(today.getDate() + due);

  document.cookie = `${name}=${value}; Expires=${today.toUTCString()}`;
}
function createCookie(name, value, due) {
  let today = new Date();
  today.setDate(today.getDate() + due);

  document.cookie = `${name}=${value}; Expires=${today.toUTCString()}`;
}
