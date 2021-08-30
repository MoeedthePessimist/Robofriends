import React from 'react';
// import CardList from './CardList';
import { Robots } from './robots';
import SearchBox from './SearchBox';
import Cardlist from './CardList';

class App extends React.Component {

    constructor() {
        super();  
        this.state = {
            robots: Robots,
            searchfield: ''
        }
    };

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const filteredRobots = this.state.robots.filter(Robots => {
            return Robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        });
        return(
        <div className = "app tc "> 
            <h1>RoboFriends</h1>
            <SearchBox searchChange = {this.onSearchChange}/>
            <Cardlist robots={filteredRobots}/> 
        </div>
        )
    };
};

export default App;
