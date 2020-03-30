import React, {Component} from 'react';

import {CardList} from './components/card-list/card-list.component';

import {SearchBox} from './components/searchbox/search-box.component.jsx';

import './App.css';


class App extends Component {
  constructor(){
    super();
    
    this.state = {
      monsters : [],
      searchField : ''
    };
  }

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({monsters: users}));
}

  render(){
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
      <h1>Monsters Rolodex</h1>
      <p className="credit-given">Originally created by <a href="https://github.com/ZhangMYihua">Yihua Zhang</a> for <a href="udemy.com">Udemy</a></p>
        <SearchBox
          placeholder='search monsters'
          handleChange={e =>this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
