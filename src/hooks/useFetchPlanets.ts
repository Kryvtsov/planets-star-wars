import { useState, useEffect } from 'react';
import { Planet } from "../types";
import { planets } from '../data/planets';

const useFetchPlanets = (): {data: Planet[], loading: boolean} => {
    const [data, setData] = useState<Planet[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setData(planets.results);
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [data]);

    return { data, loading };
};

export default useFetchPlanets;
