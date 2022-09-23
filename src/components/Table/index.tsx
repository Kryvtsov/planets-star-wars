import { FC, useState } from "react";
import { Planet } from "../../types";
import TableContainer from "./TableContainer";
import useTable from "../../hooks/useTable";
import TableFooter from "./TableFooter";

import "./index.css";

interface TProps {
    data: Planet[],
    rowsPerPage: number
}

const Table: FC<TProps> = ({data, rowsPerPage}) => {
    const [page, setPage] = useState<number>(1);
    const { slice, range, filter, sort } = useTable(data, page, rowsPerPage);
    return <>
        <TableContainer slice={slice} filter={filter} sort={sort} />
        <TableFooter range={range} setPage={setPage} page={page} slice={slice}/>
    </>;
};

export default Table;