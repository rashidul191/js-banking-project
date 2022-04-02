// set deposit and withdraw amount value use function
function getInputAmount(inputId) {
  const inputAmount = document.getElementById(inputId);
  const inputAmountText = inputAmount.value;
  const inputAmountNumber = parseFloat(inputAmountText);
  // clear amount field
  inputAmount.value = "";
  return inputAmountNumber;
}
// update  withdraw and deposit amount value
function updateAmountValue(amountId, userAmount) {
  const currentAmount = document.getElementById(amountId);
  const currentAmountText = currentAmount.innerText;
  const currentAmountNumber = parseFloat(currentAmountText);
  currentAmount.innerText = currentAmountNumber + userAmount;
}
// set balance use function
function getAmountBalance() {
  const currentBalance = document.getElementById("current-balance");
  const currentBalanceText = currentBalance.innerText;
  const currentBalanceNumber = parseFloat(currentBalanceText);
  return currentBalanceNumber;
}
// update balance amount value
function updateBalance(amountNumber, isAdd) {
  const currentBalance = document.getElementById("current-balance");
  const currentBalanceNumber = getAmountBalance();
  // set total balance amount
  if (isAdd == true) {
    currentBalance.innerText = currentBalanceNumber + amountNumber;
  } else {
    currentBalance.innerText = currentBalanceNumber - amountNumber;
  }
}

// Deposit Button event handle
document.getElementById("btn-deposit").addEventListener("click", function () {
  const inputDepositNumber = getInputAmount("input-deposit");

  if (inputDepositNumber > 0) {
    updateAmountValue("current-deposit", inputDepositNumber);
    updateBalance(inputDepositNumber, true);
  } else {
    alert("please a positive amount");
  }
});

document.getElementById("btn-withdraw").addEventListener("click", function () {
  const inputWithdrawNumber = getInputAmount("input-withdraw");
const currentBalanceNumber = getAmountBalance();
  if (inputWithdrawNumber > 0 && inputWithdrawNumber < currentBalanceNumber) {
    updateAmountValue("current-withdraw", inputWithdrawNumber);
    updateBalance(inputWithdrawNumber, false);
  } else if (inputWithdrawNumber > currentBalanceNumber) {
    alert("Don't enough money on your account.");
  } else {
    alert("please a positive amount");
  }
});
