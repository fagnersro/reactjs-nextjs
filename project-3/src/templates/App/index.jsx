import './style.css';
import { PostsProvider } from '../../components/context/PostsProvider';
import { Posts } from '../../components/Posts';

function App() {
  return (
    <PostsProvider>
      <div>
        <Posts />
      </div>
    </PostsProvider>
  );
}

export default App;
