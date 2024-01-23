// main function
function calculateAndDisplay(){
    //get input values from html
    let bill = parseFloat(document.getElementById('totalBill').value)
    let numOfPpl = parseInt(document.getElementById('numOfPeople').value)
    let serviceQuality = document.getElementById('serviceQuality').value

// calculate tip, total bill and amount per person
    let tip = calculateTip(bill, serviceQuality)
    let totalBill = calculateTotalBill(bill, tip)
    let amtPerPers = calculateAmtPerPers(totalBill, numOfPpl)

  // Display the results in the HTML document
  document.getElementById('tipResult').innerText = 'Tip: $' + tip.toFixed(2)
  document.getElementById('totalBillResult').innerText =
    'Total Bill: $' + totalBill.toFixed(2) //.toFixed(2) is fixing the digit yto only 2 decimal places
  document.getElementById('amtPerPersonResult').innerText =
    'Amount per person: $' + amtPerPers.toFixed(2)
}

// helper function to calc tip based on bill and service
function calculateTip(bill, quality){ // quality does not need to be 'serviceQuality it is an placeholder does not actually assign values pass through value
    if(quality === 'Great'){
        return bill * .2
    } else if (quality === 'Good'){
        return bill * 0.15
    } else if (quality === 'poor'){
        return bill * 0.10
    } else {
        return 0
    }
}


// helper function to calc total bill with tip and bill
function calculateTotalBill(bill, tip){
    return bill + tip

}

// helper function to calc total per person

function calculateAmtPerPers(totalBill, numOfPpl){
    return totalBill/ numOfPpl
}












/* let bill = 120
let numberOfPeople = 5
let serviceQuality = 'Great'

function calculateTip(quality) {
    if(quality === 'Great'){
        return bill * .2
    } else if (quality === 'Good'){
        return bill * 0.15
    } else if (quality === 'poor'){
        return bill * 0.10
    } else {
        //alert{'Please select a vaild value. Please try again'}
    }
}

let tip = calculateTip(serviceQuality)

function calculateTotalBill(bill, tip){
    return bill + tip
}

let totalBill = calculateTotalBill(bill, tip)

function calculateAmtPerPrs(totalBill, numberOfPeople){
    return totalBill / numberOfPeople
}

let amtPerPrs = calculateAmtPerPrs(totalBill, numberOfPeople)

console.log('Tip $' + tip)
console.log('Total Bill: $' + totalBill)
console.log('Amount Per Person: $' + amtPerPrs)
 */