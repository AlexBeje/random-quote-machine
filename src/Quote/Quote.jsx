import React from "react";
import "./Quote.scss";

export default function Quote({quote: {text: newlyDefinedText, author: newlyDefinedAuthor}, randomNumberHandler}) {
  return (
    <div className="quote m-auto">
      <div className="quote__share"></div>
      <div className="quote__header">
        <div className="quote__text">{newlyDefinedText}</div>
      </div>
      <div className="quote__body">
        <button className="quote__button btn btn-primary" onClick={randomNumberHandler}>New quote</button>
        <div className="quote__author">{newlyDefinedAuthor}</div>
      </div>
    </div>
  );
}
