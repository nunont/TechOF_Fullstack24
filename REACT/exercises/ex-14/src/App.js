import React, {useRef} from 'react';

function App() {

  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.value = '';
    inputRef.current.focus();
  }


  return <>
    <input ref={inputRef} type="text" />
    <button onClick={handleClick}>Clear</button>
  </>;
}

export default App;
