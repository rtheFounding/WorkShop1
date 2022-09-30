"use strict"
function refreshPage(){
  window.location.reload("Refresh")
}
function onCalculateAnnuityBtnClicked() {
  const payAmount = document.getElementById("payAmount");
  const apr = document.getElementById("apr");
  const numOfPeriods = document.getElementById("numOfPeriods");
  let userAmount = Number(payAmount.value)
  let userInterest = Number(apr.value);
  let userInterestRate = userInterest / 100;
  let userLoanAmount = Number(numOfPeriods.value);
  let usersPVA = userAmount / userInterestRate * (1 - (1 / Math.pow(1 + userInterestRate, userLoanAmount)));
  const pmt = document.getElementById("pmt");
  pmt.value = "You would need to invest $" + usersPVA.toFixed(2) + " today.";

}
function init() {
  const calBtn = document.getElementById("calBtn");
  calBtn.addEventListener("click", onCalculateAnnuityBtnClicked);
  const refreshBtn = document.getElementById("refreshBtn");
  refreshBtn.addEventListener("click", refreshPage);
}

window.onload = init;
