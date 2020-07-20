import React, { Component } from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
			cnJoke: ''
		}
	}

	componentDidMount() {
		this.getJoke();
	}

	getJoke = () => {
		fetch('https://api.chucknorris.io/jokes/random').then(response => {
			return response.json();
		})
		.then(joke => {
			this.setState({ cnJoke: joke.value });
		});
	}

	onClickChangeJoke = () => {
		this.getJoke();
	}

	render() {
		const { cnJoke } = this.state;

		return (
			<div className='container'>
				<h1>Chuck Norris Jokes</h1>
				<button onClick={this.getJoke}>New Joke</button>
				<ErrorBoundary>
					<p>{cnJoke}</p>
				</ErrorBoundary>
			</div>
		)
	}
}

export default App;
