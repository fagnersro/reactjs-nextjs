import './styles.css';

function App() {
  return (
    <div>
      <h1>Oi</h1>
    </div>
  );
}

// EXEMPLO CRIANDO PRÓPIO HOOK
/* import { useEffect, useRef, useState } from 'react';

const useMyHook = (callback, delay = 1000) => {
  const savedCb = useRef();

  useEffect(() => {
    savedCb.current = callback;
  }, [callback]);

  useEffect(() => {
    const interval = setInterval(() => {
      savedCb.current();
    }, delay);

    return () => clearInterval(interval);
  }, [delay]);
};

function App() {
  const [counter, setCounter] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [incrementor, setIncrementor] = useState(100);

  useMyHook(() => setCounter((c) => c + 1), delay);

  return (
    <div>
      <h1>Counter {counter}</h1>
      <h3>Delay: {delay}ms</h3>
      <input
        type="number"
        value={incrementor}
        onChange={(e) => setIncrementor(Number(e.target.value))}
      />
      <div>
        <button
          onClick={() => {
            setDelay((d) => d + incrementor);
          }}
        >
          +{incrementor}
        </button>
        <button
          onClick={() => {
            setDelay((d) => d - incrementor);
          }}
        >
          -{incrementor}
        </button>
      </div>
    </div>
  );
} */

// EXEMPLO USECONTEXT COM REDUCER
/* import P from 'prop-types';
import { createContext, useContext, useReducer, useRef } from 'react';
import './App.css';

export const actions = {
  CHANGE_TITLE: 'CHANGE_TITLE',
};

// data.js
const globalState = {
  title: 'O título do contexto',
  body: 'O body do contexto',
  counter: 0,
};

// reducer.js
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.CHANGE_TITLE: {
      console.log('Mudar título');
      return { ...state, title: action.payload };
    }
  }
  return { ...state };
};

//AppContext.jsx
export const Context = createContext();
export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);

  const changeTile = (payload) => {
    dispatch({ type: actions.CHANGE_TITLE, payload });
  };

  return (
    <Context.Provider value={{ state, changeTile }}>
      {children}
    </Context.Provider>
  );
};

AppContext.propTypes = {
  children: P.node,
};

//H1/ indedex.jsx
export const H1 = () => {
  const context = useContext(Context);
  const inputRef = useRef();

  return (
    <>
      <h1 onClick={() => context.changeTile(inputRef.current.value)}>
        {context.state.title}
      </h1>
      <input type="text" ref={inputRef} />
    </>
  );
};

// App.jsx
function App() {
  return (
    <AppContext>
      <div>
        <H1 />
      </div>
    </AppContext>
  );
}
 */
// EXEMPLO USE REDUCER
/* import { useReducer } from 'react';

import './App.css';

const globalState = {
  title: 'O titulo do contexto',
  body: 'O body do contexto',
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'muda': {
      console.log('Chamou muda', action.payloud);
      return { ...state, title: action.payloud };
    }

    case 'inverter': {
      console.log('Chamou inverter');
      const { title } = state;
      return { ...state, title: title.split('').reverse().join('') };
    }
  }
  return { ...state };
};

function App() {
  const [state, dispatch] = useReducer(reducer, globalState);
  const { counter, title, body } = state;

  return (
    <div>
      <h1>
        {title}
        {counter}
      </h1>
      <button
        onClick={() =>
          dispatch({
            type: 'muda',
            payloud: new Date().toLocaleString('pt-BR'),
          })
        }
      >
        Click
      </button>
      <button onClick={() => dispatch({ type: 'inverter' })}>inverter</button>
    </div>
  );
} */

// EXEMPLO USECONTEXT
// import './App.css';
// import { Div } from './components/Div';
// import { AppContext } from './components/contexts/AppContext';

// function App() {
//   return (
//     <AppContext>
//       <Div />
//     </AppContext>
//   );
// }

//EXEMPLO DE USEREF
// import P from 'prop-types';
// import { useEffect, useMemo, useRef, useState } from 'react';
// import './App.css';

// const Post = ({ post, handleClick }) => {
//   console.log('filho redenrizou');
//   return (
//     <div key={post.id} className="post">
//       <h1 onClick={() => handleClick(post.title)}>{post.title}</h1>
//       <p>{post.body}</p>
//     </div>
//   );
// };

// Post.propTypes = {
//   post: P.shape({
//     id: P.number,
//     title: P.string,
//     body: P.string,
//   }),
//   handleClick: P.func,
// };

// function App() {
//   const [posts, setPosts] = useState([]);
//   const [value, setValue] = useState('');
//   const input = useRef(null);
//   const contador = useRef(0);

//   console.log('pai renderizou');
//   // component did mount
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then((r) => r.json())
//       .then((r) => setPosts(r));
//   }, []);

//   useEffect(() => {
//     input.current.focus();
//     console.log(input.current);
//   }, [value]);

//   useEffect(() => {
//     contador.current++;
//   });

//   const handleClick = (value) => {
//     setValue(value);
//   };

//   return (
//     <div className="App">
//       <h1>Renderizou: {contador.current}</h1>

//       <p>
//         <input
//           ref={input}
//           type="search"
//           value={value}
//           onChange={(e) => setValue(e.target.value)}
//         />
//       </p>

//       {useMemo(() => {
//         return (
//           posts.length > 0 &&
//           posts.map((post) => {
//             return <Post key={post.id} post={post} handleClick={handleClick} />;
//           })
//         );
//       }, [posts])}
//       {posts.length <= 0 && <p>Ainda não exitem posts.</p>}
//     </div>
//   );
// }

// EXEMPLO USEMEMO
// import P from 'prop-types';
// import { useEffect, useMemo, useState } from 'react';
// import './App.css';

// const Post = ({ post }) => {
//   console.log('filho redenrizou');
//   return (
//     <div key={post.id} className="post">
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//     </div>
//   );
// };

// Post.propTypes = {
//   post: P.shape({
//     id: P.number,
//     title: P.string,
//     body: P.string,
//   }),
// };

// function App() {
//   const [posts, setPosts] = useState([]);
//   const [value, setValue] = useState('');

//   console.log('pai renderizou');
//   // component did mount
//   useEffect(() => {
//     setTimeout(() => {
//       fetch('https://jsonplaceholder.typicode.com/posts')
//         .then((r) => r.json())
//         .then((r) => setPosts(r));
//     }, 5000);
//   }, []);

//   return (
//     <div className="App">
//       <p>
//         <input
//           type="search"
//           value={value}
//           onChange={(e) => setValue(e.target.value)}
//         />
//       </p>
//       {useMemo(() => {
//         return (
//           posts.length > 0 &&
//           posts.map((post) => {
//             return <Post key={post.id} post={post} />;
//           })
//         );
//       }, [posts])}
//       {posts.length <= 0 && <p>Ainda não exitem posts.</p>}
//     </div>
//   );
// }

//  EXEMPLO DE CALLBACK
// import React, { useState, useEffect, useCallback } from 'react';

// const Button = React.memo(function Button({ incrementButton }) {
//   console.log('filho redenrizou ');
//   return <button onClick={() => incrementButton(10)}>Comp</button>;
// });

// Button.propTypes = {
//   incrementButton: P.func,
// };

// function App() {
//   const [counter, setCounter] = useState(0);

//   const incrementCounter = useCallback((num) => {
//     setCounter((c) => c + num);
//   }, []);

//   console.log('pai redenrizou');

//   return (
//     <div className="App">
//       <p>Teste 3</p>
//       <h1>C1: {counter}</h1>
//       <Button incrementButton={incrementCounter} />
//     </div>
//   );
// }

// COMPONENT EXAMPLE USEEFFECT
// const eventFn = () => console.log('h1-clicado');
// function App() {
// const [counter, setCounter] = useState(0);
// const [counter2, setCounter2] = useState(0);

// componentDidUpdate - executa toda vez que o componet atualiza
// useEffect(() => {
//   console.log('componentDidUpdate');
// });

// componentDidMount - executa 1x
// useEffect(() => {
// console.log('componentDidMount');
// document.querySelector('h1')?.addEventListener('click', eventFn);

// COMPONENT WILL UMOUNT - LIMPEZA
//   return () => {
//     document.querySelector('h1')?.removeEventListener('click', eventFn);
//   };
// }, []);

// com dependência - executa toda vez que a depedência mudar
// useEffect(() => {
//   console.log(`C1, ${counter} C2: ${counter2}`);
// }, [counter, counter2]);

// return (
//   <div className="App">
//     <p>Teste 1</p>
//     <h1>
//       C1: {counter} C2: {counter2}
//     </h1>
//     <button onClick={() => setCounter(counter + 1)}>+</button>
//     <button onClick={() => setCounter2(counter2 + 1)}>+(2)</button>
//   </div>
// );
// }

//COMPONENT EXAMPLE USESTATE
// function App() {
//   const [reverse, setReverse] = useState(false);
//   const [counter, setCounter] = useState(0);
//   const reverseClass = reverse ? 'reverse' : '';

//   const handleClick = () => {
//     setReverse((preventReverse) => !preventReverse);
//   };

//   const handleIncrement = () => {
//     setCounter((preventCounter) => preventCounter + 1);
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />

//         <h1>Contador: {counter}</h1>

//         <p>
//           <button type="button" onClick={handleClick}>
//             Reverse {reverseClass}
//           </button>
//         </p>

//         <p>
//           <button type="button" onClick={handleIncrement}>
//             Increment {counter}
//           </button>
//         </p>
//       </header>
//     </div>
//   );
// }

//COMPONENT EXAMPLE CLASS

// class App extends Component {
//   state = {
//     reverse: false,
//   };

//   handleClick = () => {
//     const { reverse } = this.state;
//     this.setState({ reverse: !reverse });
//   };

//   render() {
//     const { reverse } = this.state;
//     const reverseClass = reverse ? 'reverse' : '';

//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
//           <button type="button" onClick={this.handleClick}>
//             Reverse {reverseClass}
//           </button>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
