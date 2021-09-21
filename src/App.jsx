import React from 'react';
import MultiTextField from './components/MultiTextField.jsx';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			values: []
		};

		this._handleValuesChanged = 
			this._handleValuesChanged.bind(this);

		this._handleInputItemAdded = 
			this._handleInputItemAdded.bind(this);
		this._handleInputItemRemoved = 
			this._handleInputItemRemoved.bind(this);

		this._handleInputItemFocused = 
			this._handleInputItemFocused.bind(this);
		this._handleInputItemBlured =
			this._handleInputItemBlured.bind(this);
	}

	_handleValuesChanged(values) {
		this._log('Values changed. New values are:');
		this._log(values);

		this.setState({
			values: values
		});
	}

	_handleInputItemAdded(newValue, itemIndex) {
		this._log(`New item added. Values is ${newValue ? newValue : '[empty]'} at index ${itemIndex}.`);
	}

	_handleInputItemRemoved(removedValue, itemIndex) {
		this._log(`Existing item removed. Removed values is ${removedValue ? removedValue : '[empty]'} at index ${itemIndex}.`);
	}

	_handleInputItemFocused(itemIndex) {
		this._log(`Item at index ${itemIndex} gained focus.`);
	}

	_handleInputItemBlured(itemIndex) {
		this._log(`Item at index ${itemIndex} lost focus.`);
	}

	_log(text) {
		if (typeof text != 'object') {
			console.log(text);
		} else {
			console.table(text);
		}
	}

	render() {
		return (
			<div className="lvd-multitextfield-demo-container">
				<MultiTextField  
					label="Society codes:"
					inputProps={{
						required: true,
						underlined: true
					}}
					onGetInputProps={(itemValue, itemIndex) => {
						return {
							required: itemIndex % 2 == 0,
							underlined: itemIndex % 2 == 1
						};
					}}
					onGetInputItemErrorMessage={(itemValue, itemIndex) => {
						if (!itemValue) {
							return itemIndex % 2 == 0
								? 'Please fill in this'
								: 'Please fill in that';
						} else {
							return '';
						}
					}}
					values={this.state.values}
					minItemCount={3}
					initialItemCount={4}
					maxItemCount={10}

					onInputItemAdded={this._handleInputItemAdded}
					onInputItemRemoved={this._handleInputItemRemoved}

					onInputItemFocus={this._handleInputItemFocused}
					onInputItemBlur={this._handleInputItemBlured}

					onChange={this._handleValuesChanged}
				/>
			</div>
		);
	}
}