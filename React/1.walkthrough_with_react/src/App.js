import "./App.css";
import Button from "./Components/Button";
import Header from "./Components/Header";
import Person from "./Components/Person";
import List from "./List";

function App() {
  const personData = {
    name: "Kartik Chandra Sahu",
    age: 26,
  };

  const onClickHandle = () => {
    return console.log("Clicked Me");
  };

  const items = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
  ];
  return (
    <div className="App">
      <h2>Answer: 1</h2>
      <Person name={personData.name} age={personData.age} />
      <h2>Answer: 2</h2>
      <Button text="Click me" onClick={onClickHandle} />
      <h2>Answer: 3</h2>
      <Header title="Walkthrough with React" />
      <h2>Answer: 4</h2>
      <List items={items} />
    </div>
  );
}

export default App;
