import React from 'react';

function Home() {
    return (
        <div>
            <h1 className="welcome-h1">
                Edit <code>src/App.jsx</code> and Save.
            </h1>
            <h2 className="welcome-h2">You don't have to refresh browser!</h2>
            <button className="react-button" onClick={() => window.open('https://reactjs.org/')}>
                React
            </button>
            <button className="tailwind-button" onClick={() => window.open('https://tailwindcss.com/')}>
                Tailwind
            </button>
            <button className="snowpack-button" onClick={() => window.open('https://www.snowpack.dev/')}>
                Snowpack
            </button>
        </div>
    );
}

export default Home;
