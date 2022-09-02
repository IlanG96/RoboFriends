import React,{Component} from "react";
import CardList from "../components/CardList";
import { robots } from '../robots';
import SearchBox from '../components/SearchBox.js';
import './App.css'
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";

class App extends Component{
    constructor(){
        super();
        this.state={
            robots: robots, //robots is the name of the arr we want to use in case of alot of arr we change it. and load it 
            searchfield:''
        }
    }

    // componentDidMount() { //the link in fetch is if i want a diffrent source to my arr
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //       .then(response=> response.json())
    //       .then(users => {this.setState({ robots: users})});
    //   }

    onSearchChange=(event)=>{
        this.setState({searchfield: event.target.value})
    } 

    render(){
        const {robots, searchfield}=this.state;
        const filterdRobots=robots.filter(robot =>{
            return(robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase()));
        })
        return !robots.length ? //if
        <h1>Loading</h1> : //else
        (
        <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
            <ErrorBoundry>
                <CardList robots={filterdRobots} />
            </ErrorBoundry>
            </Scroll>
        </div>
    );
    }
}

export default App;