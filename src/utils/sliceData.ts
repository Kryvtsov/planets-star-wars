import {Planet} from "../types";

const sliceData = (data: Planet[], page: number, rowsPerPage: number): Planet[] => {
    return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
};

export default sliceData;