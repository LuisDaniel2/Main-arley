import { useState } from "react"


export const Dados = () => {
    const [dice1, setDice1] = useState(Math.floor(Math.random() * 6) + 1);
    const [dice2, setDice2] = useState(Math.floor(Math.random() * 6) + 1);

    const rollDice = () => {
        setDice1(Math.floor(Math.random() * 6) + 1);
        setDice2(Math.floor(Math.random() * 6) + 1);
    };


    return (
        <div className="container">
      <h1> Dice Game </h1>
      <div>
        <img src={"public\\dice.jpg"} alt="Dice 1" />
        <h2>Jugador 1: {dice1}</h2>
      </div>

      <div>
        <h2>Jugador 2: {dice2}</h2>
      </div>

      <div>
        <h2>
          {dice1 === dice2
            ? "Empatados"
            : dice1 > dice2
            ? "Gano Jugador 1"
            : "Gano Jugador 2"}
        </h2>
      </div>

      <button onClick={rollDice}> Roll Dice </button>
    </div>  

    )
};
