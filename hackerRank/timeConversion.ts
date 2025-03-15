function timeConversion(initialTime: string): string {

    let FINAL_TIME = initialTime;

    if (initialTime.includes("PM")) {
        const INITIAL_TIME_ARRAY = initialTime.split(/[:APM\s]/);
        if (parseFloat(INITIAL_TIME_ARRAY[0]) === 12) {
            return `${INITIAL_TIME_ARRAY[0]}:${INITIAL_TIME_ARRAY[1]}:${INITIAL_TIME_ARRAY[2]}`
        }
        const NUMBER_TO_MODIFICATE = parseFloat(INITIAL_TIME_ARRAY[0]) + 12;
        FINAL_TIME = `${NUMBER_TO_MODIFICATE}:${INITIAL_TIME_ARRAY[1]}:${INITIAL_TIME_ARRAY[2]}`
    } 
    else {
        const INITIAL_TIME_ARRAY = initialTime.split(/[:APM\s]/);
        if (parseFloat(INITIAL_TIME_ARRAY[0]) === 12) {
            return FINAL_TIME = `00:${INITIAL_TIME_ARRAY[1]}:${INITIAL_TIME_ARRAY[2]}`
        }
        FINAL_TIME = `${INITIAL_TIME_ARRAY[0]}:${INITIAL_TIME_ARRAY[1]}:${INITIAL_TIME_ARRAY[2]}`
    }

    return FINAL_TIME; 
}