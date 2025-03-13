function kangaroo(x1: number, v1: number, x2: number, v2: number): string {

    if ((v1 > v2 && x1 < x2) || (v2 > v1 && x2 < x1)) {

        if ((x2 - x1) % (v1 - v2) == 0) {
            return "YES";
        }

    }

    return "NO";
}