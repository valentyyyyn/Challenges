function aVeryBigSum(ar: number[]): number {
    const finalSum = ar.reduce((acc: number, num: number): number => {
        return acc += num;
    })

    return finalSum;
}