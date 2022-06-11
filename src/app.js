import React, { useState, useEffect } from "react";
import "../src/css/styles.css";

const colorList = [
  "#8338ec",
  "#cdb4db",
  "#a2d2ff",
  "#e63946",
  "#2b2d42",
  "#5e548e",
  "#495057",
  "#38a3a5",
  "#22577a",
  "#5fa8d3",
  "#735d78",
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857",
];

export default () => {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);
  const [color, setColor] = useState(colorList[0]);

  const getRandomIndex = (n) => Math.floor(Math.random() * n);

  const getQuotes = async () => {
    try {
      const url = "https://type.fit/api/quotes";
      const response = await fetch(url);
      const data = await response.json();
      setQuotes(data);
    } catch (err) {}
  };

  const updateQuote = () => {
    setQuote(quotes[getRandomIndex(quotes.length)]);
    setColor(colorList[getRandomIndex(colorList.length)]);
  };

  useEffect(() => {
    getQuotes();
  }, []);

  useEffect(() => {
    if (quotes.length) setQuote(quotes[getRandomIndex(quotes.length)]);
  }, [quotes]);

  return (
    <div id="wrapper" style={{ background: color }}>
      <div id="quote-box">
        <div className="quote-text">
          <i className="bi bi-quote icons" style={{ color: color }}>
            <span id="text" style={{ color: color }}>
              {quote?.text}
            </span>
          </i>
        </div>
        <div className="quote-author">
          <i className="bi bi-dash">
            <span id="author" style={{ color: color }}>
              {quote?.author}
            </span>
          </i>
        </div>
        <div className="button">
          <button
            id="new-quote"
            onClick={updateQuote}
            style={{ background: color }}
          >
            New Quote
          </button>
        </div>

        <div className="link">
          <a href="twitter.com/intent/tweet" id="tweet-quote" target="_blank">
            <i className="bi bi-twitter icons" style={{ color: color }}></i>
          </a>
        </div>
      </div>
    </div>
  );
};
