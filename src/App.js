import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header__main-head">
          {/* <img src={logo} className="main-head__logo" alt="logo" /> */}
          <form className="main-head__form">
            <input />
          </form>
        </div>
        <div className="header__sub-head">
          <h1>Welcome to IMDb</h1>
          <h3>Where you can keep track of everything you want to watch.</h3>
        </div>
      </header>
      <main>{/* <Display /> */}</main>
    </div>
  );
}

export default App;
