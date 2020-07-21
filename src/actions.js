import {
  REQUEST_JOKE_PENDING,
  REQUEST_JOKE_SUCCESS,
  REQUEST_JOKE_FAILED
} from './constants.js';


// Higher order function. A function that returns a function.
// Redux doesn't understand a function that returns a function, since it's looking for an object.
// Redux thunk is listening for actions that return functions, so the actions can be dispatched.
export const getJoke = () => (dispatch) => {
	dispatch({ type: REQUEST_JOKE_PENDING });

	fetch('https://api.chucknorris.io/jokes/random')
	.then(response => response.json())
	.then(data => dispatch({ type: REQUEST_JOKE_SUCCESS, payload: data }))
	.catch(error => dispatch({type: REQUEST_JOKE_FAILED, payload: error }));
}
