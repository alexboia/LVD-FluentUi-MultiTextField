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
	}

	_handleValuesChanged(values) {
		console.log('Values changed. New values are:');
		console.table(values);

		this.setState({
			values: values
		});
	}

	render() {
		return (
			<div className="lvd-multitextfield-demo-container">
				<MultiTextField  
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
					onChange={this._handleValuesChanged}
				/>
			</div>
		);
	}
}