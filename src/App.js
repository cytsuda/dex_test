import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from "./Components/Login/Login";
import CtrList from "./Components/CtrList/CtrList";
import './App.css';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
			<div className="App">
				<Route path="/" exact render={() => <Login />} />
				<Route exact path="/:id" component={CtrList} />
			</div>
			</BrowserRouter>
		);
	}
}

export default App;
