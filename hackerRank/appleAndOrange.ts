function countApplesAndOranges(s: number, t: number, a: number, b: number, apples: number[], oranges: number[]): void {

    let applesInRange = 0;
    let orangesInRange = 0;

    for (let apple of apples) {

        apple = apple + a;

        if (apple >= s && apple <= t) {
            applesInRange++
        }

    }

    for (let orange of oranges) {

        orange = orange + b;

        if (orange >= s && orange <= t) {
            orangesInRange++
        }
        
    }

    console.log(applesInRange);
    console.log(orangesInRange);
}

/* s = 7, t = 11  
a = 5, b = 15  
apples = [-2, 2, 1]  
oranges = [5, -6] */

console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]));
