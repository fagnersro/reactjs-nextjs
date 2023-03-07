import { useContext, useEffect, useRef } from 'react';
import { loadPosts } from '../context/PostsProvider/actions';
import { PostsContext } from '../context/PostsProvider/context';
import { CounterContext } from '../context/CounterProvider/context';
import {
  incrementCounter,
  decrementCounter,
} from '../context/CounterProvider/actions';

export const Posts = () => {
  const isMounted = useRef(true);

  const postsContext = useContext(PostsContext);
  const { postsState, postsDispatch } = postsContext;

  const counterContext = useContext(CounterContext);
  const { counterState, counterDispatch } = counterContext;

  useEffect(() => {
    loadPosts(postsDispatch).then((dispatch) => {
      if (isMounted.current) {
        dispatch();
      }
    });

    return () => {
      isMounted.current = false;
    };
  }, [postsDispatch]);

  return (
    <div>
      <button onClick={() => incrementCounter(counterDispatch)}>
        Counter {counterState.counter}+
      </button>
      <button onClick={() => decrementCounter(counterDispatch)}>
        Counter {counterState.counter}-
      </button>
      <h1>POSTS</h1>
      {postsState.loading && (
        <p>
          <strong>Carregando posts...</strong>
        </p>
      )}
      {postsState.posts.map((posts) => (
        <p key={posts.id}>{posts.title}</p>
      ))}
    </div>
  );
};
