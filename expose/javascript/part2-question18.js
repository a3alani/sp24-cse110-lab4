function timez() {
  let d = new Date();
  let time = d.toLocaleDateString();
  console.log(time);
}

setInterval(timez, 1000);