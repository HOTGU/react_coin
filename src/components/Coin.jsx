import React from "react";
import { Link } from "react-router-dom";

const Coin = ({ coin }) => {
  return (
    <Link to={`/${coin.id}`}>
      <h1 className="coinBtn mb-2">{coin.symbol}</h1>
    </Link>
  );
};

export default Coin;
