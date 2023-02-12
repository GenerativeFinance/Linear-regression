function linearRegression(data) {
    let sumX = 0;
    let sumY = 0;
    let sumXY = 0;
    let sumX2 = 0;
    let n = data.length;
    for (let i = 0; i < n; i++) {
        sumX += data[i][0];
        sumY += data[i][1];
        sumXY += data[i][0] * data[i][1];
        sumX2 += data[i][0] * data[i][0];
    }
    let a = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    let b = (sumY - a * sumX) / n;
    return [a, b];
}

if (require.main === module) {
    let data = [[1, 2], [2, 3], [3, 4], [4, 5]];
    let result = linearRegression(data);
    console.log(`y = ${result[0]}x + ${result[1]}`);
}

/*
In this implementation, linearRegression takes an array of arrays as input, where each inner array represents a single data point with the x-value and y-value. The function returns an array with two elements, representing the slope and the intercept of the regression line. The if (require.main === module) block shows an example usage of the linearRegression function by creating an array of data points and calling the function.
*/
