import { useContext } from 'react';
import { GlobalContext } from '../context/AppContext';
// eslint-disable-next-line
export const H1 = () => {
  const theContext = useContext(GlobalContext);
  const {
    state: { title, counter },
  } = theContext;
  return (
    <h1>
      {title} {counter}
    </h1>
  );
};
