import { useState } from "react";

export const Player = ({ name, symbol, isActive, nameChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  // this state beca. I wanna set the new name after change it
  const [playerName, setPlayerName] = useState(name);

  function handleEditClick() {
    
    setIsEditing((editing) => !editing);
    if (isEditing) {
      nameChange(symbol, pName);
    }
  }

  function handleChange(e) {
    setPlayerName(e.target.value);
  }

  let newPlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    // here defualtvalue give me the access to change the value as i want
    newPlayerName = (
      <input
        type="text"
        required
        defaultValue={playerName}
        onChange={handleChange}
      />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {/* this var is from the if condition for make the input field if isEditing */}
        {newPlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};