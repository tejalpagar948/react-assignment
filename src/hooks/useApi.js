import { useEffect, useState } from 'react';

export function useApi(apiFn, deps = []) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        setLoading(true);
        const res = await apiFn();

        // flexible response handling
        const result = res?.data?.banners || res?.data || res || [];

        if (isMounted) {
          setData(Array.isArray(result) ? result : []);
        }
      } catch (err) {
        console.log('API Error:', err);
        if (isMounted) {
          setError(err);
          setData([]);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, deps);

  return { data, loading, error };
}
