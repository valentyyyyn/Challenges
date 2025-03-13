function plusMinus(arr: number[]): void {
    let negatives = 0;
    let positives = 0;
    let zeros = 0;

    for (let x = 0; x < arr.length; x++) {

        if (arr[x] < 0) {
            negatives++
        } 

        else if (arr[x] > 0) {
            positives++
        } 

        else {
            zeros++
        }
    }

    const positiveRatio = positives / arr.length;
    console.log(positiveRatio.toFixed(6));
    
    const negativeRatio = negatives / arr.length;
    console.log(negativeRatio.toFixed(6)); 
    
    const zeroRatio = zeros / arr.length;
    console.log(zeroRatio.toFixed(6));
}