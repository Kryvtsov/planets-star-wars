interface Planet {
    name: string;
    terrain: string;
    climate: string;
    population: string;
    residents: Array<string>;
    [key: string]: any;
}

interface FilterSortFunc {
    filter: (parameters:{name: string, value: string | string[]}) => void;
    sort: (parameters:{name: string, isAsc: boolean}) => void;
}

interface Values {
    name: string;
    climate: string;
    terrain: string | string[];
}

interface SortValues {
    name: string;
    population: string;
    residents: string;
    [key: string]: any;
}

interface UTableReturn {
    slice: Planet[];
    range: number[];
    filter: (parameters:{name: string, value: string | string[]}) => void;
    sort: (parameters:{name: string, isAsc: boolean}) => void;
}

export type { Planet, FilterSortFunc, Values, SortValues, UTableReturn };