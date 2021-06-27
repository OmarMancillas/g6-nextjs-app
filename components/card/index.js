import React, { useEffect, useState } from "react";
import styles from './card.module.scss'

const Card = ({ symbol, number, flipped }) => {
  const isNumber = !isNaN(number);
  const [isFlipped, setIsFlipped] = useState(flipped);
  return (
    <div
      symbol={symbol}
      number={number}
      className={[styles.card, isFlipped ? styles.flipped : ""].filter(Boolean).join(" ")}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={styles.container}>
        <div
          className={styles.front}
          data-before={`${number}\n${symbol}`}
          data-after={`${number}\n${symbol}`}
        >
          <div className={styles.symbols}>
            {number === "A" && <div className={styles.symbol}>{symbol}</div>}
            {["J", "Q", "K"].includes(number) && <div className={styles.image}></div>}
            {isNumber &&
              new Array(parseInt(number))
                .fill(symbol)
                .map((_, key) => <div key={key}>{symbol}</div>)}
          </div>
        </div>
        <div className={styles.back}></div>
      </div>
    </div>
  );
};

export default Card