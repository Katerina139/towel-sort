
// You should implement your task here.

module.exports = function towelSort (matrix) {

    let newArr = [];

    if(!matrix || matrix.length === 0) {
    return newArr;
}
    for (let i = 0; i < matrix.length; i++) {
    if (i % 2 !== 0) {
        matrix[i] = matrix[i].reverse();
    }
    newArr = newArr.concat(matrix[i])
    }

    return newArr;
}
