function getpin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";
  if (pinString.length == 4) {
    return pin;
  } else {
    return getpin();
  }
}

function generatepin() {
  const pin = getpin();
  document.getElementById("display-pin").value = pin;
}
