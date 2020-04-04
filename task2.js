const data = [
    {
        principal: 2500,
        time: 1.8
    },
    {
        principal: 1000,
        time: 5
    },
    {
        principal: 3000,
        time: 1
    },
    {
        principal: 2000,
        time: 3
    }
];
const interestData = [];
const interestCalculator = arr => {
    for (let b = 0; b<arr.length; b++) {
        interestData.push(arr[b]);
    };

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].principal >= 2500 && arr[i].time > 1 && arr[i].time < 3) {
            interestData[i].rate = 3;
        } else if (arr[i].principal >= 2500 && arr[i].time >= 3) {
            interestData[i].rate = 4;
        } else if (arr[i].principal < 2500 || arr[i].time <= 1) {
            interestData[i].rate = 2;
        } else {
            interestData[i].rate = 1;
        }
    };
    
    for (let a = 0; a < arr.length; a++) {
        interestData[a].interest = (interestData[a].principal * interestData[a].rate * interestData[a].time) / 100;
    };

    console.log(interestData);
    return interestData;
};

console.log(interestCalculator(data));
