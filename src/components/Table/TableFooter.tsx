import { FC, useEffect } from "react";
import { Planet } from "../../types";

import "./index.css"

interface TProps {
    range: number[];
    setPage: (page: number) => void;
    page: number;
    slice: Planet[]
}
const TableFooter:FC<TProps> = ({ range, setPage, page, slice }) => {
    useEffect(() => {
        if (slice.length < 1 && page !== 1) {
            setPage(page - 1);
        }
    }, [slice, page, setPage]);

    return (
        <div className="tableFooter">
            {range.map((el, index) => (
                <button
                    key={index}
                    className={`button ${
                        page === el ? 'activeButton' : 'inactiveButton'
                    }`}
                    onClick={() => setPage(el)}
                >
                    {el}
                </button>
            ))}
        </div>
    );
};

export default TableFooter;