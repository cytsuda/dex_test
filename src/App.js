import React, { Component } from 'react';
import './App.css';
// import Login from "./Login/Login";
import List from "./Lista/List";
import Navi from "./Lista/Navi";

class App extends Component {
	constructor(props) {
		super(props);
  
		this.state = {
		  list: [],
		  isLoading: false,
		};
	 }
  
	//  componentDidMount() {
	// 	this.setState({ isLoading: true });
  
	// 	fetch("http://localhost:1337/places")
	// 	  .then(response => response.json())
	// 	  .then(data => this.setState({ list: data, isLoading: false }));
	//  }

	 componentDidMount() {
		this.setState({ isLoading: true });
  
		fetch("http://localhost:1337/foods")
		  .then(response => response.json())
		  .then(data => this.setState({ list: data, isLoading: false }));
	 }
  
	render() {
		if(!this.state.isLoading){
			console.log(this.state.list);
		}
		const name = "Food";
		const list = this.state.list;
		return (
			<div className="App">
				<Navi></Navi>
				<List listName={name} list={list}></List>
			</div>
		);
	}

}
export default App;
