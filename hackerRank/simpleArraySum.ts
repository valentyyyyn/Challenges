function simpleArraySum(ar: number[]): number {
    const finalSum = ar.reduce((acc: number, n: number): number => {
       return acc += n;
    });

    return finalSum;
}