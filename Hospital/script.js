let insuranceForm = document.getElementById("insuranceForm");
let formBtn = document.getElementById("formBtn");
let patient = document.getElementById("name");
let lawyer = document.getElementById("lawyer");
let state = document.getElementById("state");
let treatment = document.getElementById("treatment");
let insurance = document.getElementById("insurance");
let modal = document.getElementById("myModal");
let modalCloseBtn = document.getElementById("modalCloseBtn");
let form = document.getElementById("patientForm");

modalCloseBtn.addEventListener("click", () => {
    modal.style.display = "none";
})

formBtn.addEventListener("click", (event) => {
    event.preventDefault();
    let insuranceValue = parseInt(insurance.value);
    let treatmentValue = parseInt(treatment.value);
    let patientName = patient.value;
    let patientState = state.value;
    let patientLawyer = lawyer.value;
    let totalCost = payment(insuranceValue, treatmentValue); 
    createBill(patientName, patientState, patientLawyer, treatmentValue, insuranceValue, totalCost);
})

function payment(insurance, treatment) {
    let bill = 0;
    let tax = 0;
    let lawyers = 0;
    let total = 0; 

    switch(insurance) {
        case 1:
            bill = treatment * 1000;
            break;
        case 2:
            bill = treatment * 2000;
            break;
        case 3:
            bill = treatment * 3000;
            break;
        case 4:
            bill = treatment * 4000;
            break;
    }

    tax = bill * 0.1;
    lawyers = bill * 0.1;
    total = bill + tax + lawyers;
    
    return total;

    console.log(`Bill: ${bill}`);
    console.log(`Tax: ${tax}`);
    console.log(`Lawyers: ${lawyers}`);
    console.log(`Total: ${total}`);
}

function createBill(name, state, lawyer, treatment, insurance, total) {
    form.style.display = "none";
    modal.style.display = "block";

    modal.innerHTML = `<div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Bill</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>${name}</p>
        <p>${state}</p>
        <p>${lawyer}</p>
        <p>${total}</p>
        
      </div>
      <div class="modal-footer">
      </div>
    </div>
  </div>`

}












// formBtn.addEventListener("click", (event) => {
//     event.preventDefault();
//     console.log(event);
//     console.log(insurance.value);
//     console.log(treatment.value);

//     payment(insurance.value, treatment.value);
    
// })

// function payment(insurance, treatment) {

//     let bill = 0;
//     let tax = 0 ;
//     let lawyers = 0;
//     let total = 0;

//     switch(insurance) {
//         case 1:
//             bill = treatment.value * 1000;
//             tax = bill * 0.1;
//             lawyers = bill * 0.1;
//             total = bill + tax + lawyers;
//         break;
//         case 2:
//             bill = treatment.value * 2000;
//             tax = bill * 0.1;
//             lawyers = bill * 0.1;
//             total = bill + tax + lawyers;
//         break;
//         case 3:
//             bill = treatment.value * 3000;
//             tax = bill * 0.1;
//             lawyers = bill * 0.1;
//             total = bill + tax + lawyers;
//         break;
//         case 4:
//             bill = treatment.value * 4000;
//             tax = bill * 0.1;
//             lawyers = bill * 0.1;
//             total = bill + tax + lawyers;
//         break;

//     }

//     console.log(bill)
//     console.log(tax)
//     console.log(lawyers)
//     console.log(total)

// }