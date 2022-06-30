const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
const meterEL = document.getElementById("meter-el");
const literEL = document.getElementById("liter-el");
const kgEL = document.getElementById("kg-el");

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const MTR_FT = 3.281;
const LTR_GA = 0.264;
const KG_PD = 2.204;

convertBtn.addEventListener("click", () => {
  let baseValue = parseInt(inputEl.value);
  inputEl.value = ''
  if (baseValue > 0) {
    meterEL.textContent = `${baseValue} meter = ${(baseValue * MTR_FT).toFixed(
      3
    )} feet |  ${baseValue} feet =${(baseValue / MTR_FT).toFixed(3)} meter`;

    literEL.textContent = `${baseValue} liter = ${(baseValue * LTR_GA).toFixed(
      3
    )} gallon | ${baseValue} gallon = ${(baseValue / LTR_GA).toFixed(3)} liter`;
    kgEL.textContent = `${baseValue} kilogram = ${(baseValue * KG_PD).toFixed(
      3
    )} pound | ${baseValue} pound = ${(baseValue / KG_PD).toFixed(3)} kilogram`;
  }
  else{
    alert(
        `Enter a Positive Number`
    )
  }
});
