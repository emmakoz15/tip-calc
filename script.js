let bill = 120
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
