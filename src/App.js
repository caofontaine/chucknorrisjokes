import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
			cnJoke: ''
		}
	}
	
	componentDidMount() {
		fetch('https://api.chucknorris.io/jokes/random').then(response => {
			return response.json();
		})
		.then(joke => {
			this.setState({ cnJoke: joke.value });
		});
	}
	
	onClickChangeJoke = () => {
		fetch('https://api.chucknorris.io/jokes/random').then(response => {
			return response.json();
		})
		.then(joke => {
			this.setState({ cnJoke: joke.value });
		});
	}
	
	render() {
		const { cnJoke } = this.state;
		
		return (
			<div className='container'>
				<h1>Chuck Norris Jokes</h1>
				<button onClick={this.onClickChangeJoke}>New Joke</button>
				<p>{cnJoke}</p>
			</div>
		)
	}
}

export default App;
