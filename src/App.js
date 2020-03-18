import React from 'react';
import SearchForm from './SearchForm';
import Display from './Display';

export default class App extends React.Component {
  state = {
    searchValue: null,
  };

  setSearchValue = newValue => this.setState({ searchValue: newValue });

  render() {
    return (
      <div className="App">
        <header className="header">
          <div className="header__sub-head">
            <h1>Welcome to IMDb</h1>
            <h3>Where you can keep track of everything you want to watch.</h3>
          </div>
          <div className="header__main-head">
            <SearchForm SearchMovie={this.setSearchValue} />
          </div>
        </header>
        <main>
          <Display value={this.state.searchValue} />
        </main>
      </div>
    );
  }
}
