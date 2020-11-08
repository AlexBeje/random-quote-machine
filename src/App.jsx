import React, { useEffect, useState } from "react";

// Style
import "./App.scss";

// Icons
import { AiFillGithub, AiOutlineCopyrightCircle } from "react-icons/ai";
import { FiFigma } from "react-icons/fi";

// Components
import Quote from "./Quote/Quote";

export default function App() {
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
    <div className="app flex flex-col h-screen">
      <div className="m-auto w-8/12 lg:w-6/12">
        <Quote quote={quote} randomNumberHandler={randomNumberHandler} />
        <div className="flex justify-between mt-4">
          <div className="flex items-center">
            <a href="https://github.com/AlexBeje/random-quote-machine">
              <AiFillGithub className="mr-2" />
            </a>
            <a href="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F1lLwlLr8TfMnZtU2nYM4P1%2Fvirtual-piano%3Fnode-id%3D0%253A1">
              <FiFigma className="" />
            </a>
          </div>
          <a href="https://www.alexbejenaru.dev">
            <div className="app_author flex items-center">
              <AiOutlineCopyrightCircle
                style={{ color: "#17c6fe" }}
                className="mr-1"
              />
              <span style={{ color: "#17c6fe" }}>Alexandru Bejenaru</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
