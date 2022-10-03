import React,{Component} from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox.js';
import './App.css'
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import NavBar from "../components/NavBar";
import Register from "../components/Register";
import ParticlesInit from "./ParticlesInit";

class App extends Component{
    constructor(){
        super();
        this.state={
            robots: [], //robots is the name of the arr we want to use in case of alot of arr we change it. and load it 
            searchfield:'',
            isShowAdd: true
        }
    };

    handleAddClick = () => {
        const {isShowAdd}=this.state;
        if(isShowAdd){
            this.setState({isShowAdd : false})
        }
        else{
            this.setState({isShowAdd : true})
        }
          };


    componentDidMount() { //the link in fetch is if i want a diffrent source to my arr
        fetch("https://robofriends-server.herokuapp.com/getrobots",{
            method : 'post',
            headers: {'Content-Type': 'application/json'},
        })
          .then(response=> response.json())
          .then(users => {
            this.setState({ robots: users})
        });
      }

    onRobotsChange=(newrobots)=>{
        this.setState({robots:newrobots});
    }  

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
            <NavBar handleAddClick={this.handleAddClick} />
            <Register isShowAdd={this.state.isShowAdd} onRobotsChange={this.onRobotsChange} />
            <h1 className="f1">RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <ParticlesInit />
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