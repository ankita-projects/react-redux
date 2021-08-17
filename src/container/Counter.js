import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../actions/actions";

class Counter extends Component {
	render() {
		return (
			<div>
				<h1>Counter: {this.props.ctr}</h1>
				<div>
					<button onClick={this.props.onIncCounter}>Add</button>
					<button onClick={this.props.onDecCounter}>Remove</button>
					<button onClick={this.props.onResetCounter}>Reset</button>
					<button onClick={this.props.onAddFive}>Add five</button>
					<button onClick={this.props.onRemoveFive}>Remove five</button>
					
				</div>
				<button onClick={this.props.onStoreResult}>Store the result</button>
				<div>
					<h2>Store results</h2>
					<ul>
						{this.props.storeResults.map((result) => (
							<li
								key={result.id}
								onClick={() => this.props.onDeleteResult(result.id)}
							>
								{result.value}
							</li>
						))}
					</ul>
				</div>
			</div>
		);
	}
}

const mapStatetoProps = (state) => {
	return {
		ctr: state.counter,
		storeResults: state.results,
	};
};

const mapDispateToProps = (dispatch) => {
	return {
		onIncCounter: () => dispatch({ type: actionTypes.INCREMENT }),
		onDecCounter: () => dispatch({ type: actionTypes.DECREMENT }),
		onResetCounter: () => dispatch({ type: actionTypes.RESET }),
		onAddFive: () => dispatch({ type: actionTypes.ADD}),
		onRemoveFive:() => dispatch({type:actionTypes.REMOVE}),
		onStoreResult: () => dispatch({type:actionTypes.STORE_RESULT}),
		onDeleteResult: (payload) =>
			dispatch({ type: actionTypes.DELETE, payload }),
	};
};

export default connect(mapStatetoProps, mapDispateToProps)(Counter);