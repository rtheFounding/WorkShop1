"use strict"
function refreshPage(){
  window.location.reload("Refresh")
}
function onFutureValueBtnClicked() {
  const presentValue = document.getElementById("presentValue");
  const interestValue = document.getElementById("interestValue");
  const numOfYears = document.getElementById("numOfYears");
  let userValue = Number(presentValue.value)
  let userInterest = Number(interestValue.value);
  let userYears = Number(numOfYears.value);
  let userInterestRate = userInterest/100;
  let fValue = userValue * Math.pow(1 + userInterestRate, userYears);
  const futureValue = document.getElementById("futureValue");
  let increaseOf = fValue - userValue;
  futureValue.value = "$" + fValue.toFixed(2) + " and have earned $" + increaseOf.toFixed(2) + " in interest.";

}
function init() {
  const calBtn = document.getElementById("calBtn");
  calBtn.addEventListener("click", onFutureValueBtnClicked);
  const refreshBtn = document.getElementById("refreshBtn");
  refreshBtn.addEventListener("click", refreshPage);
}

window.onload = init;
