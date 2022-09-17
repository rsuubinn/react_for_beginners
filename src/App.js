import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [coinPrice, setCoinPrice] = useState(1);
  const [dollars, setDollars] = useState(1);
  const [showing, setShowing] = useState(false);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const onChange = (event) => {
    setCoinPrice(event.target.value);
  };
  const onNeed = (event) => {
    setDollars(event.target.value);
    setShowing(true);
  };
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`} </h1>
      {loading ? (
        <h3>Loading ...</h3>
      ) : (
        <div>
          <select onChange={onChange}>
            <option>Select coin :)</option>
            {coins.map((coin) => (
              <option key={coin.id} value={coin.quotes.USD.price}>
                {coin.name} ({coin.symbol}): ${coin.quotes.USD.price}USD
              </option>
            ))}
          </select>
          <h3>내가 가지고 있는 달러</h3>
          <input onChange={onNeed} placeholder="입력하세요..." type="number" />
          {showing ? (
            <h3>구매 가능한 코인 개수: {Math.floor(dollars / coinPrice)}개</h3>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default App;
