import React, { useState, useEffect } from "react";
import refreshIcon from "./assets/icon-refresh.svg";

function QuotesGenerator() {
    const [quotes, setQuotes] = useState();
    const [author, setAuthor] = useState();

    useEffect(() => {
        fetchQuotes()
    }, [])

    const fetchQuotes = async () => {
        const results = await fetch("https://api.quotable.io/random").catch((err) => console.log(err))
        const data = await results.json();
        setQuotes(data.content);
        setAuthor(data.author);
        console.log(data);
    };

    return (
        <div>
            <div className="quotes-container">
                <p className="quotes">"{quotes}"</p>
                <p className="author">{author}</p>
            </div>
            <div className="refresh" onClick={fetchQuotes}>
                <img src={refreshIcon} alt="refresh" />
            </div>
        </div>
    )
}

export default QuotesGenerator;