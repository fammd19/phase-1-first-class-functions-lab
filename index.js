// Code your solution in this file!
let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

let returnFirstTwoDrivers = function (drivers) {
    return [drivers[0],drivers[1]];
}

let returnLastTwoDrivers = function (drivers) {
    let x = drivers.length;
    return [drivers[(x-2)],drivers[(x-1)]];
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

let createFareMultiplier = (multiplier) => {
    const fareMultiplier = (fare) => fare*multiplier;
    return fareMultiplier;
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

//returns the first two drivers when passed returnFirstTwoDrivers() as the second argument
//Returns the last two drivers when passed returnLastTwoDrivers() as the second argument
function selectDifferentDrivers (drivers, selectingDrivers) {
    return selectingDrivers (drivers);
} 

