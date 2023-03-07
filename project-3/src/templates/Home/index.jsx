// criando meu segundo hook
import { useEffect, useState } from 'react';
import './style.css';

const useFetch = (url, options) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      await new Promise((r) => setTimeout(r, 3000));

      try {
        const response = await fetch(url, options);
        const jsonResult = await response.json();
        setResult(jsonResult);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        console.error('ops deu erro!' + e);
      }
    };

    fetchData();
  }, [url, options]);

  return [result, loading];
};

export const Home = () => {
  const [result, loading] = useFetch(
    'https://jsonplaceholder.typicode.com/posts',
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!loading && result) {
    console.log(result);
  }

  return <h1>Oi</h1>;
};
