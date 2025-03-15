function breakingRecords(scores: number[]): number[] {
    
    let highestRecord = scores[0];
    let lowerRecord = scores[0];
    let highestRecordBreaked = 0;
    let lowerRecordBreaked = 0;

    for (const game of scores) { 

        if (game > highestRecord) {
            highestRecordBreaked++
            highestRecord = game;
        }
        else if (game < lowerRecord) {
            lowerRecordBreaked++
            lowerRecord = game;
        }

    }

    return [highestRecordBreaked, lowerRecordBreaked];
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])); // => [2, 4]
