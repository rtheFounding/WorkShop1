"use strict"
function refreshPage(){
  window.location.reload("Refresh")
}
function onCalculateMortageBtnClicked() {
  const loanAmount = document.getElementById("loanAmount");
  const apr = document.getElementById("apr");
  const term = document.getElementById("term");
  let loanNum = Number(loanAmount.value)
  let aprNum = Number(apr.value);
  let termNum = Number(term.value);
  aprNum /= 1200;
  termNum *= 12;
  let monthlyPay = loanNum*(aprNum * Math.pow((1 + aprNum), termNum))/(Math.pow((1 + aprNum), termNum) - 1);
  const pmt = document.getElementById("pmt");
  pmt.value = "$" + monthlyPay.toFixed(2);

}
function init() {
  const calBtn = document.getElementById("calBtn");
  calBtn.addEventListener("click", onCalculateMortageBtnClicked);
  const refreshBtn = document.getElementById("refreshBtn");
  refreshBtn.addEventListener("click", refreshPage);
}

window.onload = init;
