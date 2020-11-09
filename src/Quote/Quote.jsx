import React from "react";
import "./Quote.scss";

export default function Quote({
  quote: { text: newlyDefinedText, author: newlyDefinedAuthor },
  randomNumberHandler,
}) {
  return (
    <div className="quote m-auto p-2 lg:p-5 flex flex-col justify-between">
      <div className="quote__share"></div>
      <div className="quote__text">{newlyDefinedText}</div>
      {newlyDefinedAuthor && (
        <div className="quote__author mt-3">-{newlyDefinedAuthor}</div>
      )}
      <button
        className="quote__button mt-3 ml-auto mr-auto"
        onClick={randomNumberHandler}
      >
        New
      </button>
    </div>
  );
}
