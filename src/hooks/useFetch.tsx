import { useEffect, useState } from 'react';
import axiosInstance from '../utils/axiosInstance';


const useFetch = (url: string, method: string): { data: any, isLoading: boolean, error: boolean } => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchdata = async () => {
            setIsLoading(true);

            try {
                if (method === 'GET') {
                    const res = await axiosInstance.get(url);
                    setData(res.data);
                    setIsLoading(false);
                }
                if (method === 'DELETE') {
                    const res = await axiosInstance.delete(url);
                    setData(res.data);
                    setIsLoading(false);
                }
            } catch (err) {
                console.log(err);
                if (err) {
                    setError(true);
                    setIsLoading(false);
                }
            }
        };
        fetchdata();
    }, [url, method]);

    return { data, isLoading, error };
};

export default useFetch;
