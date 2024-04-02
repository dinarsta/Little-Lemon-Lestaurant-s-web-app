import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [randomQuote, setRandomQuote] = useState('');

    useEffect(() => {
        fetchRandomQuote();
    }, []);

    const fetchRandomQuote = async() => {
        try {
            const response = await fetch('https://api.quotable.io/random');
            const data = await response.json();
            setRandomQuote(`${data.content} - ${data.author}`);
        } catch (error) {
            console.error('Error fetching random quote:', error);
        }
    };

    const generateRandomQuote = () => {
        fetchRandomQuote();
    };

    return ( <
        div className = "App" >
        <
        header className = "App-header" >
        <
        h1 > Random Quotes Generator < /h1> <
        div className = "quote-container" > {
            randomQuote && ( <
                blockquote >
                <
                p > { randomQuote } < /p> <
                /blockquote>
            )
        } <
        button onClick = { generateRandomQuote } > Generate Random Quote < /button> <
        /div> <
        /header> <
        /div>
    );
}

export default App;