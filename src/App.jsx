import "./App.scss";
import React, { useEffect, useState } from "react";
import Quote from "./Quote/Quote";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState({
    text: "",
    author: "",
  });

  const randomNumberHandler = () => {
    if (!quotes.length) {
      return;
    }

    const maxRandomNumber = quotes.length;
    const randomNumber = Math.floor(Math.random() * maxRandomNumber);

    setQuote(quotes[randomNumber]);
  };

  useEffect(() => {
    randomNumberHandler();
  }, [quotes]);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((results) => results.json())
      .then((quotes) => {
        setQuotes(quotes);
      });
  }, []);

  return (
    <div className="App container-fluid d-flex justify-content-center align-content-center vh-100">
      <Quote
        quote={quote}
        randomNumberHandler={randomNumberHandler}
      />
    </div>
  );
}

export default App;
