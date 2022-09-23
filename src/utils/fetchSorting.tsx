import {Planet} from "../types";

const fetchSorting = (parameters: {name: string, isAsc: boolean}, data: Planet[]) => {
    const { name, isAsc } = parameters;
    return [...data.sort((a: any, b: any) => {
        const firstValue = isAsc ? a : b;
        const secondValue = isAsc ? b : a;
        if (name === 'name') {
            if ( firstValue.name < secondValue.name ){
                return -1;
            }
            if ( firstValue.name > secondValue.name ){
                return 1;
            }
            return 0;
        } else if (name === 'residents') {
            return firstValue.residents.length - secondValue.residents.length;
        } else {
            if (firstValue[name] === 'unknown') return 0 - secondValue[name];
            if (secondValue[name] === 'unknown') return firstValue[name];
            return firstValue[name] - secondValue[name];
        }
    })];
};

export default fetchSorting;