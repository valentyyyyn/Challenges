function gradingStudents(grades: number[]): number[] {

    let finalNotes: number[] = [];

    for (let x = 0; x < grades.length; x++) {

        let actualNote: number = grades[x];

        if (actualNote >= 38 && (actualNote + 1) % 5 === 0) {

            finalNotes.push(actualNote + 1);

        } else if (actualNote >= 38 && (actualNote + 2) % 5 === 0) {

            finalNotes.push(actualNote + 2);

        } else {

            finalNotes.push(actualNote);

        }
    }

    return finalNotes;
}