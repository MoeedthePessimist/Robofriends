import React from 'react';
// import {Robots} from './robots';
import SearchBox from '../Components/SearchBox';
import Cardlist from '../Components/CardList';
import './App.css'
import ScrollPane from '../Components/Scrollpane'

class App extends React.Component {

    constructor() { 
        super();  
        this.state = {
            robots: [],
            searchfield: ''
        } 
    };

    componentDidMount() {
        // this.setState({ robots : Robots });
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            // console.log(users);
            this.setState({robots : users});
        });
        console.log(this.state.robots);
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    };

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        });

        if(filteredRobots.length === 0){
            return(
                <div className='notLoad'>
                    <h1>Can't Load</h1>
                </div>
            )
        }else {
            return(
                <div className = "app tc "> 
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange = {this.onSearchChange}/>
                    <ScrollPane>
                        <Cardlist robots={filteredRobots}/> 
                    </ScrollPane>
                </div>
            )
        }
    };
};

export default App;
