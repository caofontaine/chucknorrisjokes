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

		return (
				<div className='container'>
					<h1>Chuck Norris Jokes</h1>
					<button onClick={changeJoke}>New Joke</button>
					<ErrorBoundary>
						{isPending ?
						<p className='loading animate__animated animate__zoomIn'>LOADING</p> :
						<p className='animate__animated animate__rotateIn'>{joke}</p>}
					</ErrorBoundary>
				</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
