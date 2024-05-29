
function App() {

  var person = {
    firstName : "Ibraima",
    lastName : "Marques",
    age: 67
  }

  function getName(){
    return person.firstName + " " + person.lastName;
  }

  return (
    <div>Hello {getName()}! Tu tens {person.age} anos!</div>
  );
}

export default App;
