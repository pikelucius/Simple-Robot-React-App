import React, { Component } from 'react';
import { connect } from 'react-redux';


import Cardlist from '../components/Cardlist';
import Searchbox from '../components/Searchbox';
import ErrorBoundary from '../components/ErrorBoundary'
import Scroll from "../components/Scroll";
import './App.css';

import { setSearchField, requestRobots } from '../actions'

const mapStateToProps = state => {
    return {
        searchfield: state.searchRobots.searchfield,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {

 componentDidMount(){
    this.props.onRequestRobots()
    }


    render() {
        const { searchfield, onSearchChange, robots, isPending } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        });
        return isPending ? 
        (
            <div className='tc'>
                <h1 className='f2'>LOADING...</h1>
            </div>
        ) : 

        (
            <div className='tc'>
                <h1 className='f2'>ROBOTS</h1>
                <Searchbox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundary>   
                        <Cardlist robots={filteredRobots} />
                    </ErrorBoundary>
                </Scroll>
                
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);