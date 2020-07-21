import React, { Component } from 'react';
import { connect } from 'react-redux';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

import { getJoke } from '../actions';

const mapStateToProps = (state) => {
	return {
		joke: state.joke,
		isPending: state.isPending,
		error: state.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		changeJoke: () => dispatch(getJoke())
	}
}

class App extends Component {
	componentDidMount() {
		this.props.changeJoke();
	}

	render() {
		const { joke, isPending, changeJoke } = this.props;

		return isPending ?
			<h1>LOADING</h1> :
			(
				<div className='container'>
					<h1>Chuck Norris Jokes</h1>
					<button onClick={changeJoke}>New Joke</button>
					<ErrorBoundary>
						<p>{joke}</p>
					</ErrorBoundary>
				</div>
			)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
