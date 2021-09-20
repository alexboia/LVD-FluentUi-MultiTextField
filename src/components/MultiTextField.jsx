import React from 'react';
import PropTypes, { func } from 'prop-types';

import { Label } from '@fluentui/react';

import MultiTextFieldDefaults from './MultiTextFieldDefaults.js';
import MultiTextFieldInputItem from './MultiTextFieldInputItem.jsx';

function _getMinItemCount(props) {
	return props.hasOwnProperty('minItemCount')
		? Math.max(props.minItemCount, 1)
		: MultiTextFieldDefaults.minItemCount;
}

function _getMaxItemCount(props) {
	return props.hasOwnProperty('maxItemCount')
		? Math.max(props.maxItemCount, _getMinItemCount(props))
		: MultiTextFieldDefaults.maxItemCount;
}

function _getInitialItemCount(props) {
	return props.hasOwnProperty('initialItemCount')
		? Math.max(Math.min(props.initialItemCount, _getMaxItemCount(props)), _getMinItemCount(props))
		: MultiTextFieldDefaults.initialItemCount;
}

function _getDefaultValueForInputeItemAtIndex(props, itemIndex) {
	return props.onGetDefaultInputItemValue != null
		? props.onGetDefaultInputItemValue(itemIndex)
		: '';
}

function _normalizeValues(props) {
	const normalizedValues = [];
	const rawValues = props.values || [];

	const valueCount = _determineNormalizedValueCount(rawValues, 
		props);

	for (let iVal = 0; iVal < valueCount; iVal ++) {
		if (rawValues[iVal] != undefined) {
			normalizedValues.push(rawValues[iVal]);
		} else {
			normalizedValues.push(_getDefaultValueForInputeItemAtIndex(props, iVal));
		}
	}

	return normalizedValues;
}

function _determineNormalizedValueCount(rawValues, props) {
	return rawValues.length > 0
		? Math.max(rawValues.length, _getMinItemCount(props))
		: _getInitialItemCount(props);
}

function _normalizeProps(props) {
	const normalizedProps = { 
		minItemCount: _getMinItemCount(props),
		maxItemCount: _getMaxItemCount(props),
		initialItemCount: _getInitialItemCount(props),
		values: _normalizeValues(props) 
	};

	return Object.assign({}, 
		props, 
		normalizedProps);
}

function _withNormalizedProps(MultiTextFieldComponent) {
	return class extends React.Component {
		constructor(props) {
			super(props);
		}

		render() {
			const props = _normalizeProps(this.props);
			return <MultiTextFieldComponent 
				{...props} 
			/>
		}
	};
}

class MultiTextField extends React.Component {
	constructor(props) {
		super(props);
	}

	_getDefaultValueForInputeItemAtIndex(itemIndex) {
		return _getDefaultValueForInputeItemAtIndex(this.props, itemIndex);
	}

	_getMinItemCount() {
		return this.props.minItemCount;
	}

	_getMaxItemCount() {
		return this.props.maxItemCount;
	}

	_getInitialItemCount() {
		return this.props.initialItemCount;
	}

	render() {
		return (
			<div className={this._getContainerCssClassName()} style={this._getContainerStyle()}>
				{this._renderLabel()}
				{this._renderInputList()}
			</div>
		);
	};

	_getContainerCssClassName() {
		const containerCssClass = ['lvd-multitextfied-input-container'];

		const className = this._getClassName();
		if (!!className) {
			containerCssClass.push(className);
		}

		return containerCssClass.join(' ');
	}

	_getClassName() {
		return this.props.className || null;
	}

	_getContainerStyle() {
		return this.props.style || {};
	}

	_renderLabel() {
		const label = this._getLabel();
		return !!label 
			? (<Label>{label}</Label>) 
			: null;
	}

	_getLabel() {
		return this.props.label || '';
	}

	_getInputItemErrorMessage(itemValue, itemIndex) {
		return this.props.onGetInputItemErrorMessage != null
			? this.props.onGetInputItemErrorMessage(itemValue, itemIndex)
			: undefined;
	}

	_handleInputItemFocused(itemEvent, itemIndex) {
		if (this.props.onInputItemFocus != null) {
			this.props.onInputItemFocus(itemIndex);
		}
	}

	_handleInputItemBlured(itemEvent, itemIndex) {
		if (this.props.onInputItemBlur != null) {
			this.props.onInputItemBlur(itemIndex);
		}
	}

	_handleInputItemChanged(itemEvent, itemIndex) {
		const newItemValue = itemEvent.target.value;
		const newValues = [...this.props.values];
		newValues[itemIndex] = newItemValue;
		this._raiseValueChanged(newValues);
	}

	_raiseValueChanged(values) {
		if (this.props.onChange != null) {
			this.props.onChange(values);
		}
	}

	_handleAddInputItemRequested(itemEvent, itemIndex) {
		itemEvent.preventDefault();

		const newValues = [...this.props.values];
		const newItemValue = this._getDefaultValueForInputeItemAtIndex(itemIndex + 1);
		
		newValues.splice(itemIndex + 1, 0, newItemValue);

		this._raiseInputItemAdded(newItemValue, itemIndex);
		this._raiseValueChanged(newValues)
	}

	_raiseInputItemAdded(itemValue, itemIndex) {
		if (this.props.onInputItemAdded != null) {
			this.props.onInputItemAdded(itemValue, itemIndex);
		}
	}

	_handleRemoveItemRequested(itemEvent, itemIndex) {
		itemEvent.preventDefault();

		const newValues = [...this.props.values];
		const removedValues = newValues.splice(itemIndex, 1);

		this._raiseInputItemRemoved(removedValues[0], itemIndex);
		this._raiseValueChanged(newValues)
	}

	_raiseInputItemRemoved(itemValue, itemIndex) {
		if (this.props.onInputItemRemoved != null) {
			this.props.onInputItemRemoved(itemValue, itemIndex);
		}
	}

	_renderInputList() {
		const values = this._getValues();
		console.log(values);
		return (
			<React.Fragment>
				{values.map((itemValue, itemIndex) => this._renderInputItem(itemValue, itemIndex))}
			</React.Fragment>
		);
	}

	_getValues() {
		return this.props.values;
	}

	_renderInputItem(itemValue, itemIndex) {
		return (
			<MultiTextFieldInputItem 
				{...this._getTextFieldItemProps(itemValue, itemIndex)}

				key={itemIndex} 
				onChange={(itemEvent) => this._handleInputItemChanged(itemEvent, itemIndex)}
				onGetErrorMessage={(itemValue) => this._getInputItemErrorMessage(itemValue, itemIndex)}

				onAddRequested={(itemEvent) => this._handleAddInputItemRequested(itemEvent, itemIndex)}
				onRemoveRequested={(itemEvent) => this._handleRemoveItemRequested(itemEvent, itemIndex)}

				onFocus={(itemEvent) => this._handleInputItemFocused(itemEvent, itemIndex)}
				onBlur={(itemEvent) => this._handleInputItemBlured(itemEvent, itemIndex)}
			/>
		);
	}

	_getTextFieldItemProps(itemValue, itemIndex) {
		return {
			inputProps: 
				this._getMergedInputProps(itemValue, itemIndex),
			addInputItemActionProps: 
				this._getMergedAddInputItemActionProps(itemValue, itemIndex),
			removeInputItemActionProps: 
				this._getMergedRemoveInputItemActionProps(itemValue, itemIndex)
		};
	}

	_getMergedInputProps(itemValue, itemIndex) {
		let inputProps = this._getBasicInputProps();
		const customInputProps = this._getCustomInputProps(itemValue, itemIndex);

		if (customInputProps != null) {
			inputProps = Object.assign({}, 
				inputProps, 
				customInputProps);
		}

		return Object.assign({}, 
			inputProps, 
			{ value: itemValue });
	}

	_getBasicInputProps() {
		return this.props.inputProps || {};
	}

	_getCustomInputProps(itemValue, itemIndex) {
		return this.props.onGetInputProps != null
			? this.props.onGetInputProps(itemValue, itemIndex)
			: null;
	}

	_getMergedAddInputItemActionProps(itemValue, itemIndex) {
		let allowAdd = this._canAddAnotherInputItem(itemIndex);
		const addInputItemActionProps = this._getBasicAddInputItemActionProps();
		
		if (addInputItemActionProps.hasOwnProperty('allowAdd')) {
			allowAdd = allowAdd && !!addInputItemActionProps.allowAdd;
		}

		return Object.assign({}, 
			addInputItemActionProps, 
			{ allowAdd: allowAdd });
	}

	_getBasicAddInputItemActionProps() {
		return this.props.addInputItemActionProps || {};
	}

	_canAddAnotherInputItem(itemIndex) {
		return this._getValueCount() < this._getMaxItemCount();
	}

	_getValueCount() {
		return this._getValues().length;
	}

	_getMergedRemoveInputItemActionProps(itemValue, itemIndex) {
		let allowRemove = this._canRemoveAnotherInputItem(itemIndex);
		const removeInputItemActionProps = this._getBasicRemoveInputItemActionprops();

		if (removeInputItemActionProps.hasOwnProperty('allowRemove')) {
			allowRemove = allowRemove && !!removeInputItemActionProps.allowRemove;
		}

		return Object.assign({}, 
			removeInputItemActionProps, 
			{ allowRemove: allowRemove });
	}

	_getBasicRemoveInputItemActionprops() {
		return this.props.removeInputItemActionProps || {};
	}

	_canRemoveAnotherInputItem(itemIndex) {
		return this._getValueCount() > this._getMinItemCount();
	}
}

MultiTextField.propTypes = {
	className: PropTypes.string,
	style: PropTypes.object,
	label: PropTypes.string,
	inputProps: PropTypes.object,

	addInputItemActionProps: PropTypes.object,
	removeInputItemActionProps: PropTypes.object,

	minItemCount: PropTypes.number,
	initialItemCount: PropTypes.number,
	maxItemCount: PropTypes.number,

	onGetInputProps: PropTypes.func,

	onGetDefaultInputItemValue: PropTypes.func,
	onGetInputItemErrorMessage: PropTypes.func,
	
	onInputItemAdded: PropTypes.func,
	onInputItemRemoved: PropTypes.func,

	onInputItemFocus: PropTypes.func,
	onInputItemBlur: PropTypes.func,
	
	onChange: PropTypes.func
};

export default _withNormalizedProps(MultiTextField);