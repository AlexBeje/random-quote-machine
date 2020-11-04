import React from "react";
import "./Quote.scss";

export default function Quote({
  quote: { text: newlyDefinedText, author: newlyDefinedAuthor },
  randomNumberHandler,
}) {
  return (
    <div className="quote m-auto p-5">
      <div className="quote__share"></div>
      <div className="quote__text">{newlyDefinedText}</div>
      {newlyDefinedAuthor && (
        <div className="quote__author">-{newlyDefinedAuthor}</div>
      )}
      <button
        className="quote__button btn btn-tertiary"
        onClick={randomNumberHandler}
      >
        New quote
      </button>
    </div>
  );
}
