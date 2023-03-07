import { useContext, useEffect, useRef } from 'react';
import { loadPosts } from '../context/PostsProvider/actions';
import { PostsContext } from '../context/PostsProvider/context';

export const Posts = () => {
  const isMounted = useRef(true);
  const postsContext = useContext(PostsContext);
  const { postsState, postsDispatch } = postsContext;

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
