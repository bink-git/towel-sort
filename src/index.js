// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    }
    matrix.map((item, i) => {
        if (i % 2 !== 0) {
            return item.reverse();
        }
    });

    return matrix.flat();
};
