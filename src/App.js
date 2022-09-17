import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  const [dollars, setDollars] = useState(0);
  const onChange = (event) => {
    setDollars(event.target.value);
    console.log(dollars);
  };
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>The Coins! {loading ? null : `(${coins.length})`} </h1>
      {loading ? (
        <h3>Loading ...</h3>
      ) : (
        <div>
          <select>
            {coins.map((coin) => (
              <option key={coin.id}>
                {coin.name} ({coin.symbol}): ${coin.quotes.USD.price}USD
              </option>
            ))}
          </select>
          <h3>내가 가지고 있는 달러</h3>
          <input
            value={dollars}
            onChange={onChange}
            placeholder="입력하세요..."
            type="number"
          />
          <button>계산하기</button>
          <h3>살 수 있는 코인 개수: {counter}개</h3>
        </div>
      )}
    </div>
  );
}

export default App;
