import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {CardList} from './component/card-list/card-list.jsx'
import {SearchBox} from './component/search-box/search-box';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters : [],
      searchField : ''
    };
    //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(user => this.setState({ monsters : user }));

  }

  handleChange = (e) => {
    this.setState({searchField : e.target.value})
  }

  render(){
    const {monsters,searchField} = this.state;
    const filterMonsters = monsters.filter( monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return(
      
      <div >
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder = "search monsters" handleChange = {this.handleChange} />
        <CardList monsters = {filterMonsters} />
      </div>
    );
  }
}

export default App;
