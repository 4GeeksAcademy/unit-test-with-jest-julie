// one euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromDollarToYen = (dolares) => {   
    return (dolares/oneEuroIs.USD)*oneEuroIs.JPY;
}

const fromEuroToDolar = (euro) => {
    return euro*oneEuroIs.USD;
}

const fromYenToPound = (yen) => {
    return (yen/oneEuroIs.USD)*oneEuroIs.GBP;
}

console.log(fromYenToPound(1.07))


