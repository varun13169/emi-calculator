const numMonthsInYear = 12;

const sliderLoanAmt = document.querySelector("#slider-loan-amt");
const sliderIntRate = document.querySelector("#slider-int-rate");
const sliderTenure = document.querySelector("#slider-tenure");

const txtDispAreaLoanAmt = document.querySelector("#txt-disp-area-loan-amt");
const txtDispAreaIntRate = document.querySelector("#txt-disp-area-int-rate");
const txtDispAreaTenure = document.querySelector("#txt-disp-area-tenure");
const txtDispAreaEmi = document.querySelector("#txt-disp-area-emi");

const btnCalc = document.querySelector("#btn-cal");

const getEMI = (P, r, n) => {
    const monthlyRate = r / numMonthsInYear;
    const intermCalc = ((1 + monthlyRate) * n)
    const emi = ( ( (P * r) * intermCalc ) / ( (numMonthsInYear * intermCalc) -1 ) * 10 ).toFixed(2);
    
    return emi;
}

const onChangeHandler = e => {
    const sliderTargetId = e.target.id;
    const sliderTarget = e.target;
    let textAreaTarget = null;

    switch (sliderTargetId) {
        case "slider-loan-amt":
            textAreaTarget = txtDispAreaLoanAmt;
            break;
        case "slider-int-rate":
            textAreaTarget = txtDispAreaIntRate;
            break;
        case "slider-tenure":
            textAreaTarget = txtDispAreaTenure;
            break;
        default:
            console.log("Bummer need to trouble shoot :(")
    }
    textAreaTarget.innerText = sliderTarget.value;
}

const onClickHandler = e => {
    const loanAmt = sliderLoanAmt.value;
    const intRatePerAnnum = sliderIntRate.value / 100;
    const tenureInMonths = sliderTenure.value * 12;

    const emi = getEMI(loanAmt, intRatePerAnnum, tenureInMonths);
    // For Debug
    // emi = getEMI(50000, 3.5/100, 120);

    console.log(emi);
    txtDispAreaEmi.innerHTML = emi;

}



sliderLoanAmt.addEventListener("change", onChangeHandler);
sliderIntRate.addEventListener("change", onChangeHandler);
sliderTenure.addEventListener("change", onChangeHandler);

btnCalc.addEventListener("click", onClickHandler)
