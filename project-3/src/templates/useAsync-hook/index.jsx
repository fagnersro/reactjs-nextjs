import { useCallback, useEffect, useState } from 'react';

const useAsync = (asyncFunction, shouldRum) => {
  const [state, setState] = useState({
    result: null,
    error: null,
    status: 'idle',
  });

  const run = useCallback(async () => {
    setState({
      result: null,
      error: null,
      status: 'pending',
    });

    return asyncFunction()
      .then((res) => {
        setState({
          result: res,
          error: null,
          status: 'settled',
        });
      })
      .catch((err) => {
        setState({
          result: null,
          error: err,
          status: 'error',
        });
      });
  }, [asyncFunction]);

  useEffect(() => {
    if (shouldRum) {
      run();
    }
  }, [run, shouldRum]);

  return [run, state.result, state.error, state.status];
};

const fetchData = async () => {
  // throw new Error('Que chato');

  const data = await fetch('https://jsonplaceholder.typicode.com/posts/');
  const json = await data.json();

  return json;
};

export const Homee = () => {
  const [posts, setPosts] = useState(null);
  const [reFetchData, result, error, status] = useAsync(fetchData, true);

  if (status === 'idle') {
    return <p>idle: Não a nada executando...</p>;
  }

  if (status === 'pending') {
    return <p>pending: Loading...</p>;
  }

  if (status === 'error') {
    return <pre>error: {error.message}</pre>;
  }

  if (status === 'settled') {
    return <pre>{JSON.stringify(result, null, 2)}</pre>;
  }
};
