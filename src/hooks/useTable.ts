import { useState, useEffect } from "react";
import {Planet, UTableReturn} from "../types";
import {fetchSorting, fetchFilter, calculateRange, sliceData} from "../utils"


const useTable = (data: Planet[], page: number, rowsPerPage: number):UTableReturn => {
    const [tableRange, setTableRange] = useState<number[]>([]);
    const [slice, setSlice] = useState<Planet[]>([]);
    const [currentData, setCurrentData] = useState<Planet[]>(data);

    const filter = (parameters: {name: string, value: string | string[]}) => {
        const filteredData = fetchFilter(parameters, data)
        setCurrentData(filteredData);
    }

    const sort = (parameters: {name: string, isAsc: boolean}) => {
        const sortedData = fetchSorting(parameters, currentData)
        setCurrentData(sortedData);
    }

    useEffect(() => {
        const range = calculateRange(currentData.length, rowsPerPage);
        setTableRange([...range]);

        const slice = sliceData(currentData, page, rowsPerPage);
        setSlice([...slice]);
    }, [currentData, setTableRange, page, setSlice]);

    return { slice, range: tableRange, filter, sort };
};

export default useTable;