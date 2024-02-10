import React, { useState } from "react";
import {v1 as uuid} from "uuid";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import useAxios from "./hooks/useAxios";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const [cards, setCards] = useState([]);
  const [response] = useAxios(
    "https://deckofcardsapi.com/api/deck/new/draw/"
  );

  const addCard = async () => {
    if (response) {
    setCards(cards => [...cards, { ...response.data, id: uuid() }]);
    } else {
      console.log('No more cards in deck!')
    }
  };
  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={addCard}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;