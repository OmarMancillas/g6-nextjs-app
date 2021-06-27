import { useEffect, useState  } from "react";
import Card from './../card'
import './deck.module.scss'

const Deck = (props) => {
  // const [cards, setCards] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     let cards = await (
  //       await fetch(`http://localhost:3000/api/${props.path}`)
  //     ).json();
  //     setCards(cards);
  //   })();
  // }, [props.path]);

  // return <> Hola mundo </>
  return (
    <div>
      {props.cards.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h3>{props.title}</h3>
          <div className="deck">
            {" "}
            {props.cards.map((card, index) => {
              // const number = card.slice(0, -1);
              // const symbol = card.slice(-1);
              const {number, symbol} = card
              const flip = index < props.flipped;
              return (
                <Card
                  symbol={symbol}
                  number={number}
                  key={index}
                  flipped={flip}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export {
  Deck
}