// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers){
    return drivers.slice(0,2);
}
const returnLastTwoDrivers = function (drivers){
    return drivers.slice(2,4);
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(){
    return function(amount){
        return amount*amount;
    }
}

const fareDoubler = (amount) => amount*2;

const fareTripler = (amount) => amount*3;

function selectDifferentDrivers(names, selectedDrivers) {
    if (selectedDrivers === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(names);
    } else if (selectedDrivers === returnLastTwoDrivers) {
        return returnLastTwoDrivers(names);
    }
}