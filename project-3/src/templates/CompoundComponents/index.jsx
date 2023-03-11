// Compound Components - padrão
import { Children, cloneElement, useState } from 'react';

const s = {
  style: {
    fontSize: '60px',
  },
};

const TurnOnOff = ({ children }) => {
  const [isOn, setIsOn] = useState(false);
  const onTurn = () => setIsOn((s) => !s);

  return Children.map(children, (child) => {
    const newChild = cloneElement(child, {
      isOn,
      onTurn,
    });
    return newChild;
  });
};

const TurnedOn = ({ isOn, children }) => (isOn ? children : null);

const TurnedOff = ({ isOn, children }) => (isOn ? null : children);

const TurnButton = ({ isOn, onTurn, ...props }) => {
  return (
    <button onClick={onTurn} {...props}>
      Turn {isOn ? 'OFF' : 'ON'}
    </button>
  );
};

const P = ({ children }) => <p {...s}>{children}</p>;

export const ReactChildrenReactClone = () => {
  return (
    <TurnOnOff>
      <TurnedOn>
        <P>Aqui as coisas que vão acontecer quando estiver ON.</P>
      </TurnedOn>
      <TurnedOff>
        <P>Aqui vem as coisas do OFF.</P>
      </TurnedOff>
      <TurnButton {...s} />
    </TurnOnOff>
  );
};

/* React Children + React component element

const Parent = ({ children }) => {
  return Children.map(children, (child) => {
    const newChild = cloneElement(child, { ...s });
    return newChild;
  });
};

export const ReactChildrenReactClone = () => {
  return (
    <Parent>
      <p>Oi</p>
      <p>Oi 2</p>
      <span>Olá</span>
    </Parent>
  );
}; */
