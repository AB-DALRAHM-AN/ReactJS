import reactImg from "../assets/react-core-concepts.png";
import './Header.css';

const randomReactDescription = ["Fundamentals", "Core", "Crucial"];
function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export function Header() {
  const randomDes = randomReactDescription[getRandomInt(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {randomDes} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}