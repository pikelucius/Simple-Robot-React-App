import React, { Component } from 'react';
import './App.css';

import Cardlist from '../components/Cardlist';
import Searchbox from '../components/Searchbox';
import Scroll from "../components/Scroll";

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    async componentDidMount(){
       try {
            const response = await fetch('http://jsonplaceholder.typicode.com/users');
            const json = await response.json()
            this.setState({ robots: json })
       } catch (err) {
           console.log(err.message);
       }

    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        
    }
    render() {
        const { robots, searchfield } = this.state
        const filteredRobots = robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchfield.toLowerCase())
        });
        return !robots.length ? 
        (
            <div className='tc'>
                <h1 className='f2'>LOADING...</h1>
            </div>
        ) : 

        (
            <div className='tc'>
                <h1 className='f2'>ROBOTS</h1>
                <Searchbox searchChange={this.onSearchChange} />
                <Scroll>
                    <Cardlist robots={filteredRobots} />
                </Scroll>
                
            </div>
        )
    }
}

export default App;