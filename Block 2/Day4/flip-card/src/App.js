import { useEffect, useState } from "react";
import Card from "./components/Card.jsx";
import "./App.css";
const App = () => {
  const CardsArray = [
    {
      type: "Pikachu",
      image: require("./Images/Pickachu.png"),
    },
    {
      type: "ButterFree",
      image: require("./Images/ButterFree.png"),
    },
    {
      type: "Charmander",
      image: require("./Images/Charmander.png"),
    },
    {
      type: "Squirtle",
      image: require("./Images/Squirtle.jpeg"),
    },
    {
      type: "Pidgetto",
      image: require("./Images/Pidgetto.png"),
    },
    {
      type: "Bulbasaur",
      image: require("./Images/Bulbasaur.png"),
    },
  ];
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState(new Array(12).fill(true));
  const generate = () => {
    let newCards = [...CardsArray, ...CardsArray].sort(
      () => 0.5 - Math.random()
    );
    setCards(newCards);
  };
  console.log(flipped);
  const check = () => {};
  useEffect(() => {
    generate();
  }, []);
  return (
    <div className="App">
      <div className="container">
        {cards.map((card, index) => {
          return (
            <Card
              key={index}
              card={card}
              index={index}
              flipped={flipped[index]}
              flip={() => {
                setFlipped(
                  flipped.map((flip, ind) => (ind === index ? !flip : flip))
                );
                check();
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
export default App;
