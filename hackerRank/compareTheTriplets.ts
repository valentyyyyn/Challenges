function compareTriplets(a: number[], b: number[]): number[] {

    let finalArray: number[] = [0, 0];

    for (let x = 0; x < a.length; x++) {

        if (a[x] > b[x]) { 
            finalArray[0]++;
        } else if (a[x] < b[x]) {
            finalArray[1]++;
        }
        
    }

    return finalArray;
}
