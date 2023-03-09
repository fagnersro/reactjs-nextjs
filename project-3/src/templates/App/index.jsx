import { MediaQuery } from '../useMediaQuery-customHook';

function App() {
  return <MediaQuery />;
}

export default App;

// EXEMPLO-2 PROVIDER + REDUCER
/* import './style.css';
import { PostsProvider } from '../../components/context/PostsProvider';
import { Posts } from '../../components/Posts';
import { CounterProvider } from '../../components/context/CounterProvider';

function App() {
  return (
    <CounterProvider>
      <PostsProvider>
        <div>
          <Posts />
        </div>
      </PostsProvider>
    </CounterProvider>
  );
}

export default App; */
