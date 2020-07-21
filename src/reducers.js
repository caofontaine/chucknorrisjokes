import {
  REQUEST_JOKE_PENDING,
  REQUEST_JOKE_SUCCESS,
  REQUEST_JOKE_FAILED
} from './constants.js';

const initialStateJoke = {
  joke: '',
  isPending: false,
  error: ''
};

export const getJoke = (state=initialStateJoke, action={}) => {
	switch(action.type) {
		case REQUEST_JOKE_PENDING:
			return Object.assign({}, state, { isPending: true });
		case REQUEST_JOKE_SUCCESS:
			return Object.assign({}, state, { joke: action.payload.value, isPending: false });
		case REQUEST_JOKE_FAILED:
			return Object.assign({}, state, { error: action.payload, isPending: false });
		default:
			return state;
	}
}
