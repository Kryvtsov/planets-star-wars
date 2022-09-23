const calculateRange = (dataLength: number, rowsPerPage: number): number[] => {
    const range = [];
    const num = Math.ceil(dataLength / rowsPerPage);
    for (let i = 1; i <= num; i++) {
        range.push(i);
    }
    return range;
};

export default calculateRange;