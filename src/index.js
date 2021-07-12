function searchZero(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            const value = array[i][j];
            if (value === 0) {
                const pos = {
                    row: i,
                    col: j,
                };
                return pos;
            }
        }
    }
    return null;
}
function checkNum(num, position, array) {
    const { row, col } = position;
    for (let i = 0; i < array.length; i++) {
        const value = array[row][i];
        if (value === num && i !== col) {
            return false;
        }
    }
    for (let j = 0; j < array.length; j++) {
        const value = array[j][col];
        if (value === num && j !== row) {
            return false;
        }
    }
    const len = array.length;
    const rowStart = 3 * Math.floor(row / 3);
    const colStart = 3 * Math.floor(col / 3);
    for (let k = rowStart; k < rowStart + 3; k++) {
        for (let l = colStart; l < colStart + 3; l++) {
            const value = array[k][l];
            if (value === num && k !== row && l !== col) {
                return false;
            }
        }
    }
    return true;
}
function recursion(array) {
    const len = array.length;
    const position = searchZero(array);
    if (position === null) {
        return true;
    }
    for (let i = 1; i <= len; i++) {
        const isValid = checkNum(i, position, array);
        if (isValid) {
            const { row, col } = position;
            array[row][col] = i;
            if (recursion(array)) {
                return true;
            }
            array[row][col] = 0;
        }
    }
    return false;
}

module.exports = function solveSudoku(matrix) {
    const copyMatrix = matrix.map(arr => [...arr]);
    recursion(copyMatrix);
    return copyMatrix;
};
