import {Planet} from "../types";

const filterByName = (data: Planet[], filterValue: string): Planet[] | [] => {
    return data.filter(item => item.name.toLowerCase().includes(filterValue.toLowerCase()))
}

const filterByClimate = (data: Planet[], filterValue: string): Planet[] | [] => {
    if (filterValue === 'All') return data;
    return data.filter(item => {
        const itemArr = item.climate.trim().split(', ');
        return itemArr.includes(filterValue);
    })
}

const filterByTerrain = (data: Planet[], selected: string[]): Planet[] | [] => {
    if (!selected.length) return data;
    return data.filter(item => {
        const itemArr = item.terrain.trim().split(', ');
        return itemArr.some(r => selected.includes(r))
    })
}

const fetchFilter = (parameters: {name: string, value: string | string[]}, data: Planet[]) => {
    let filteredData: Planet[] = [];
    const { name, value } = parameters;
    if (name === 'name' && typeof value === 'string') {
        filteredData = filterByName(data, value);
    }
    if (name === 'climate' && typeof value === 'string') {
        filteredData = filterByClimate(data, value);
    }
    if (name === 'terrain' && Array.isArray(value)) {
        filteredData = filterByTerrain(data, value);
    }
    return filteredData;
}

export default fetchFilter;