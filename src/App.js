import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list";
import { SearchBox } from "./components/search-box/search-box";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(user => this.setState({ monster: user }))
      .catch(err => console.log("error found, url not working ", err));
  }

  handleChange = e => this.setState({ searchField: e.target.value });

  render() {
    const { monster, searchField } = this.state;
    const filteredMonster = monster.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1 className="h1"> Monster Rolodex </h1>
        <SearchBox
          placeholder="search monster"
          handleChange={this.handleChange}
        />
        <CardList monster={filteredMonster} />
      </div>
    );
  }
}

export default App;
