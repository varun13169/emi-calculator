const numMonthsInYear = 12;

var sliderLoanAmt = document.querySelector("#slider-loan-amt");
var sliderIntRate = document.querySelector("#slider-int-rate");
var sliderTenure = document.querySelector("#slider-tenure");

var txtDispAreaLoanAmt = document.querySelector("#txt-disp-area-loan-amt");
var txtDispAreaIntRate = document.querySelector("#txt-disp-area-int-rate");
var txtDispAreaTenure = document.querySelector("#txt-disp-area-tenure");
var txtDispAreaEmi = document.querySelector("#txt-disp-area-emi");

var btnCalc = document.querySelector("#btn-cal");

sliderLoanAmt.addEventListener("change", onChangeHandler);
sliderIntRate.addEventListener("change", onChangeHandler);
sliderTenure.addEventListener("change", onChangeHandler);

btnCalc.addEventListener("click", onClickHandler)

function onChangeHandler(e) {
    var sliderTargetId = e.target.id;
    var sliderTarget = e.target;
    var textAreaTarget = null;

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

function onClickHandler(e) {
    var loanAmt = sliderLoanAmt.value;
    var intRatePerAnnum = sliderIntRate.value / 100;
    var tenureInMonths = sliderTenure.value * 12;

    var emi = getEMI(loanAmt, intRatePerAnnum, tenureInMonths);
    // For Debug
    // emi = getEMI(50000, 3.5/100, 120);

    console.log(emi);
    txtDispAreaEmi.innerHTML = emi;

}

function getEMI(P, r, n) {
    var emi = P;

    var monthlyRate = r / numMonthsInYear;
    var intermCalc = ((1 + monthlyRate) * n)
    var emi = ( (P * r) * intermCalc ) / ( (numMonthsInYear * intermCalc) -1 );
    emi = emi * 10;
    emi = emi.toFixed(2);
    
    return emi;
}