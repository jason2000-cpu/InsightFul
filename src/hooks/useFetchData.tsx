/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';

export function useFetchData<T>(url: string, interval = 10000) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [ error, setError ] = useState('');

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          headers: {
            'X-API-Key': 'd0802fb0',
          },
        });
        const json = await response.json();
        if (isMounted) {
          setData(json);
          setLoading(false);
        }
      } catch (error: any) {
        setError(error.message)
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    const timer = setInterval(fetchData, interval);

    return () => {
      isMounted = false;
      clearInterval(timer);
    };
  }, [url, interval]);

  return { data, loading, error };
}
