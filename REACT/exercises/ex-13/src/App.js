import React, { useReducer } from "react";

function App() {
  const initialResult = { result: 0, show: true };
  const [result, dispatch] = useReducer(doMath, initialResult);

  return (
    <>
      <h3>{result.show ? result.result : "Hidden"}</h3>
      <div>
        <button onClick={() => dispatch({ type: "addAndSub", value: 1 })}>
          +1
        </button>
        <button onClick={() => dispatch({ type: "addAndSub", value: 5 })}>
          +5
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        <button onClick={() => dispatch({ type: "addAndSub", value: -1 })}>
          -1
        </button>
        <button onClick={() => dispatch({ type: "addAndSub", value: -5 })}>
          -5
        </button>
        <button onClick={() => dispatch({ type: "divide", value: 2 })}>
          /2
        </button>
        <button onClick={() => dispatch({ type: "divide", value: 5 })}>
          /5
        </button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "show" })}>
          {result.show ? "Hide" : "Show"}
        </button>

      </div>
    </>
  );

  function doMath(state, action) {
    var newResult = { ...state };
    switch (action.type) {
      case "addAndSub":
        newResult.result += action.value;
        break;
      case "divide":
        newResult.result = newResult.result / action.value;
        break;
      case "reset":
        newResult.result = 0;
        break;
      case "show":
        newResult.show = !newResult.show;
        break;
      default:
        break;
    }
    return newResult;
  }
}

export default App;
