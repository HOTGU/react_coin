import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getCoins } from "../api";
import Coin from "./Coin";
import Fail from "./Fail";
import Loader from "./Loader";

const CoinList = () => {
  const { data, isError, isLoading } = useQuery("getCoins", getCoins);
  if (isError) return <Fail />;

  const coins = data?.slice(0, 300);

  return (
    <div className="w-fit">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {/* <Loader /> */}
          {coins.map((coin) => {
            return (
              <div key={coin.id}>
                <Coin coin={coin} />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default CoinList;
