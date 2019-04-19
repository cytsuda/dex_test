import React, { Component } from 'react';
import './App.css';
import Login from "./Components/Login/Login";
import CtrList from "./Components/CtrList/CtrList";
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
	
  
	render() {
		return (
			<BrowserRouter>
			<div className="App">
				<Route path="/" exact render={() => <Login />} />
				{/* <Route path="/:list" exact render={() => <List />} /> */}
				<Route exact path="/:id" component={CtrList} />
			</div>
			</BrowserRouter>
		);
	}

}
export default App;
