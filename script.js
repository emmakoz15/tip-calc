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
    'Total Bill: $' + totalBill.toFixed(2)
  document.getElementById('amtPerPersonResult').innerText =
    'Amount per person: $' + amtPerPers.toFixed(2)
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