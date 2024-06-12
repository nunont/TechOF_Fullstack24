import logo from './logo.svg';
import './App.css';
import Seconds from './components/Seconds';
import CounterTitle from './components/CounterTitle';

import UserContext from './contexts/UserContext';

function App() {
  const user = {
    name: 'John Doe',
    email: 'john.doe@gmail.com',
    age: 25
  };
  return <>
    <UserContext.Provider value={user}>
      <Seconds />
      <CounterTitle />
    </UserContext.Provider>
  </>;
}

export default App;
