function breakingRecords(scores: number[]): number[] {
    
    let highestRecord = scores[0];
    let lowerRecord = scores[0];
    let highestRecordBreaked = 0;
    let lowerRecordBreaked = 0;

    for (const GAME of scores) { 

        if (GAME > highestRecord) {
            highestRecordBreaked++
            highestRecord = GAME;
        }
        else if (GAME < lowerRecord) {
            lowerRecordBreaked++
            lowerRecord = GAME;
        }

    }

    return [highestRecordBreaked, lowerRecordBreaked];
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])); // => [2, 4]
