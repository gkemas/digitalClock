function set() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let p = "AM";
  if (h > 12) {
    let p = "PM";
    h = 24 - h;
  }
  if (h == 0) {
    h = 12;
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  document.querySelector(".container").innerHTML =
    h + ":" + m + ":" + s + " " +`<small>${p}</small>` + `<hr>`;

  setInterval(set, 1000);
}

set();
