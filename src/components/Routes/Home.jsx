import React from "react";
import CoinList from "../CoinList";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-4 ">
      <h1 className="px-3 py-2 text-zinc-800 font-bold text-3xl rounded-md">
        코인 파프리카
      </h1>
      <CoinList />
    </div>
  );
};

export default Home;
