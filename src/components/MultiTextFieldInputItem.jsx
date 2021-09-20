import React from 'react';
import PropTypes from 'prop-types';

import { TextField } from '@fluentui/react';
import { ActionButton } from '@fluentui/react';

import MultiTextFieldDefaults from './MultiTextFieldDefaults';

export default class MultiTextFieldInputItem extends React.Component {
	constructor(props) {
		super(props);

		this._handleChanged = 
			this._handleChanged.bind(this);
		this._handleFocused = 
			this._handleFocused.bind(this);
		this._handleBlured =
			this._handleBlured.bind(this);
		this._getInputErrorMessage =
			this._getInputErrorMessage.bind(this);

		this._handleAddActionButtonClicked = 
			this._handleAddActionButtonClicked.bind(this);
		this._handleRemoveActionButtonClicked = 
			this._handleRemoveActionButtonClicked.bind(this);
	}

	_handleChanged(event) {
		if (this.props.onChange != null) {
			this.props.onChange(event);
		}
	}

	_handleFocused(event) {
		if (this.props.onFocus != null) {
			this.props.onFocus(event);
		}
	}

	_handleBlured(event) {
		if (this.props.onBlur != null) {
			this.props.onBlur(event);
		}
	}

	_getInputErrorMessage(value) {
		let errorMessage = null;

		if (this.props.onGetErrorMessage != null) {
			errorMessage = this.props.onGetErrorMessage(value);
		} 

		if (errorMessage === undefined && !value) {
			errorMessage = this._isRequired()
				? MultiTextFieldDefaults.inputItem.messages.empty 
				: '';
		}

		return errorMessage;
	}

	_isRequired() {
		const inputProps = this._getInputProps();
		return inputProps.required;
	}

	_handleAddActionButtonClicked(event) {
		if (this.props.onAddRequested != null) {
			this.props.onAddRequested(event);
		}
	}

	_handleRemoveActionButtonClicked(event) {
		if (this.props.onRemoveRequested != null) {
			this.props.onRemoveRequested(event);
		}
	}

	render() {
		return (
			<div className="lvd-multitextfield-item">
				<div className="lvd-multitextfield-input-container">
					{this._renderInputField()}
				</div>
				<div className="lvd-multitextfield-ctrl-container">
					{this._renderControls()}
				</div>
				<div className="lvd-multitextfield-clear"></div>
			</div>
		);
	}

	_renderInputField() {
		const inputProps = this._getInputProps();
		return (
			<TextField 
				{...inputProps} 
				className={this._getInputClassName()}
				onGetErrorMessage={this._getInputErrorMessage}
				onChange={this._handleChanged}
				onFocus={this._handleFocused}
				onBlur={this._handleBlured}
			/>
		);
	}

	_getInputClassName() {
		const inputClassName = ['lvd-multitextfield-input'];

		const inputProps = this.props.inputProps || {};
		if (!!inputProps.className) {
			inputClassName.push(inputProps.className);
		}

		return inputClassName.join(' ');
	}

	_getInputProps() {
		const inputProps = this.props.inputProps || {};
		return {
			style: inputProps.style || {},
			label: inputProps.label 
				|| MultiTextFieldDefaults.inputItem.label,
			placeholder: inputProps.placeholder 
				|| MultiTextFieldDefaults.inputItem.placeholder,
			description: inputProps.description 
				|| MultiTextFieldDefaults.inputItem.description,
			required: !!inputProps.required,
			underlined: !!inputProps.underlined,
			readOnly: !!inputProps.readOnly,
			disabled: !!inputProps.disabled,
			borderless: !!inputProps.borderless,
			value: inputProps.value || ''
		};
	}

	_renderControls() {
		const addActionProps = this._getAddActionProps();
		const removeActionProps = this._getRemoveActionProps();

		return (
			<React.Fragment>
				{addActionProps.allowAdd && (
					<ActionButton 
						iconProps={addActionProps.iconProps}
						label={addActionProps.label}
						onClick={this._handleAddActionButtonClicked}
					/>
				)}
				{removeActionProps.allowRemove && (
					<ActionButton 
						iconProps={removeActionProps.iconProps}
						label={removeActionProps.label}
						onClick={this._handleRemoveActionButtonClicked}
					/>
				)}
			</React.Fragment>
		);
	}

	_getAddActionClassName() {
		const addActionClassName = ['lvd-multitextfield-action-add'];
		const addInputItemActionProps = this.props.addInputItemActionProps || {};

		if (!!addInputItemActionProps.className) {
			addActionClassName.push(addInputItemActionProps.className);
		}

		return addActionClassName.join(' ');
	}

	_getAddActionProps() {
		const addInputItemActionProps = this.props.addInputItemActionProps || {};
		return {
			allowAdd: addInputItemActionProps.hasOwnProperty('allowAdd')
				? !!addInputItemActionProps.allowAdd
				: true,
			iconProps: addInputItemActionProps.iconProps 
				|| { 
					iconName: MultiTextFieldDefaults.addInputItemAction.iconName 
				},
			label: addInputItemActionProps.label 
				|| MultiTextFieldDefaults.addInputItemAction.label,
		};
	}

	_getRemoveActionClassName() {
		const removeActionClassName = ['lvd-multitextfield-action-remove'];
		const removeInputItemActionProps = this.props.removeInputItemActionProps || {};

		if (!!removeInputItemActionProps.className) {
			removeActionClassName.push(removeInputItemActionProps.className);
		}

		return removeActionClassName.join(' ');
	}

	_getRemoveActionProps() {
		const removeInputItemActionProps = this.props.removeInputItemActionProps || {};
		return {
			allowRemove: removeInputItemActionProps.hasOwnProperty('allowRemove')
				? !!removeInputItemActionProps.allowRemove
				: true,
			iconProps: removeInputItemActionProps.iconProps 
				|| { 
					iconName: MultiTextFieldDefaults.removeInputItemAction.iconName 
				},
			label: removeInputItemActionProps.label 
				|| MultiTextFieldDefaults.removeInputItemAction.label,
		};
	}
}

MultiTextFieldInputItem.propTypes = {
	inputProps: PropTypes.object,

	addInputItemActionProps: PropTypes.object,
	removeInputItemActionProps: PropTypes.object,

	onGetErrorMessage: PropTypes.func,
	onChange: PropTypes.func,
	onFocus: PropTypes.func,
	onBlur: PropTypes.func,

	onAddRequested: PropTypes.func,
	onRemoveRequested: PropTypes.func
};