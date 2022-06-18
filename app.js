function set() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let p = "AM";
  if (h > 12) {
    p = "PM";
    h = h - 12;
  }
  if (h == 0) {
    h = 12;
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  let sa = h + ":" + m + ":" + s + " " + `<small>${p}</small>` + `<hr>`;
  document.querySelector(".container").innerHTML = sa;

  setInterval(set, 1000);
}

set();
