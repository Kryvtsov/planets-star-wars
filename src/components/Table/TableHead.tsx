import {FC, ChangeEvent, useState} from "react";
import {CLIMATE} from "../../data/climate";
import {TERRAIN} from "../../data/terrain";
import {FilterSortFunc, SortValues, Values} from "../../types";
import MultiSelect from "../MultiSelect";

import "./index.css"

const initialFilterValues = {
    name: '',
    climate: 'All',
    terrain: 'All',
}
const initialSortValues = {
    name: 'default',
    population: 'default',
    residents: 'default',
}
const TableHead:FC<FilterSortFunc> = ({filter, sort}) => {
    const [values, setValues] = useState<Values>(initialFilterValues);
    const [sortValues, setSortValues] = useState<SortValues>(initialSortValues);
    const [selected, setSelected] = useState<string[]>([]);

    const handleFilterParam = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>, name: string) => {
        const value = event.target.value;
        const parameters = {name, value};
        setValues({...initialFilterValues, [name]: value});
        setSelected([]);
        setSortValues({...initialSortValues});
        filter(parameters);
    }

    const toggleOption = (id: string) => {
        if (id === 'All') {
            setSelected([]);
            setValues({...initialFilterValues, terrain: 'All'});
            filter({name: 'terrain', value: []});
        } else {
            let newArray = [...selected];
            if (newArray.includes(id)) {
                newArray = newArray.filter(item => item !== id)
            } else {
                newArray.push(id)
            }
            setSelected(newArray);
            setValues({...initialFilterValues, terrain: newArray});
            filter({name: 'terrain', value: newArray});
        }
        setSortValues({...initialSortValues});
    }

    const handleSort = (name: string) => {
        const currentValue = sortValues[name];
        const isAsc = currentValue === 'default' || currentValue === 'desc';
        setSortValues({...initialSortValues, [name]: isAsc ? 'asc' : 'desc'});
        sort({name, isAsc});
    }

    const showSortValues = (name: string) => {
        const currentValue = sortValues[name];
        return <>
            {(currentValue === 'default' || currentValue === 'asc') && <span>&#9650;</span>}
            {(currentValue === 'default' || currentValue === 'desc') && <span>&#9660;</span>}
        </>;
    }

    return (
        <thead className="tableRowHeader">
            <tr>
                <th className="tableHeader">
                    <div onClick={() => handleSort('name')} className="sortButton">
                        <span>Name </span>
                        {showSortValues('name')}
                    </div>
                    <input
                        className="tableInput"
                        type="text"
                        value={values.name}
                        onChange={e => handleFilterParam(e, 'name')}
                    />
                </th>
                <th className="tableHeader">
                    <span>Terrain</span>
                    <br />
                    <MultiSelect options={TERRAIN} selected={selected} toggleOption={toggleOption} />
                </th>
                <th className="tableHeader">
                    <span>Climate</span>
                    <br/>
                    <select
                        className="tableSelect"
                        onChange={e => handleFilterParam(e, 'climate')}
                        value={values.climate}
                        aria-label="Filter Planets By Climate">
                        {CLIMATE.map((item:string, key: number) => {
                            return <option value={item} key={key} className="optionSelect">{item.toUpperCase()}</option>
                        })}
                    </select>
                </th>
                <th className="tableHeader sorting">
                    <div onClick={() => handleSort('population')} className="sortButton">
                        <span>Population </span>
                        {showSortValues('population')}
                    </div>
                </th>
                <th className="tableHeader sorting">
                    <div onClick={() => handleSort('residents')} className="sortButton">
                        <span>Residents </span>
                        {showSortValues('residents')}
                    </div>
                </th>
            </tr>
        </thead>
    );
};

export default TableHead;