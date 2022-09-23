import { FC } from "react";
import {FilterSortFunc, Planet} from "../../types";
import TableHead from "./TableHead";

import "./index.css";

interface TProps extends FilterSortFunc {
    slice: Planet[];
}

const TableContainer: FC<TProps> = ({slice, filter, sort}) => {

    return (<div className="tableContainer">
        <table className="table">
            <TableHead filter={filter} sort={sort} />
            {slice.length ? <tbody>
            {slice.map((planet) => {
                const {
                    name, terrain, climate, population, residents
                } = planet;
                return (<tr key={name} className="tableRowItems">
                    <td className="tableCell">{name}</td>
                    <td className="tableCell">{terrain}</td>
                    <td className="tableCell">{climate}</td>
                    <td className="tableCell">{population}</td>
                    <td className="tableCell">{residents.length}</td>
                </tr>);
            })}</tbody> : <tbody className="noData"><tr><td>NO PLANETS FOUND</td></tr></tbody>}

        </table>
    </div>)
};

export default TableContainer;