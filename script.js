const amountEl = document.querySelector(".amount");
const intrestRateEl = document.querySelector(".intrest-rate");
const tenureEl = document.querySelector(".total-tenure");
const emiEl = document.querySelector(".emi");
const totalInterestEl = document.querySelector(".total-interst");
const totalAmountEl = document.querySelector(".total-amount");

const calBtnEl = document.querySelector(".cal-btn");

calBtnEl.addEventListener("click", () => {
  const amount = +amountEl.value;
  const months = +tenureEl.value;
  const rate = parseFloat(intrestRateEl.value / 12 / 100);

  if (!amount || !months || !rate) return;

  console.log("click");

  const emiMonth =
    (amount * rate * Math.pow(1 + rate, months)) /
    (Math.pow(1 + rate, months) - 1);
  const totalAmount = emiMonth * months;
  const totalInterest = totalAmount - amount;

  emiEl.innerText = `Monthly Emi : ₹ ${Math.round(emiMonth)} `;

  totalInterestEl.innerText = `Total interest : ₹ ${Math.round(
    totalInterest
  )} `;

  totalAmountEl.innerText = `Total payble amount : ₹ ${Math.round(
    totalAmount
  )} `;
});
