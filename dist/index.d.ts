import { IIconProps } from '@fluentui/react';
import * as React from 'react';

export interface IMultiTextFieldItemProps {
	className?: string;
	style?: React.CSSProperties;
	label?:string;
	placeholder?: string;
	description?: string;
	required?: boolean;
	underlined?: boolean;
	readOnly?: boolean;
	disabled?: boolean;
	borderless?: boolean;
}

export interface IMultiTextFieldAddInputItemActionProps {
	allowAdd?: boolean;
	iconProps?: IIconProps;
	label?: string;
	className?: string;
}

export interface IMultiTextFieldRemoveInputItemActionProps {
	allowRemove?: boolean;
	iconProps?: IIconProps;
	label?: string;
	className?: string;
}

export interface IMultiTextFieldProps {
	className?: string;
	style?: React.CSSProperties;
	label?:string;
	inputProps?: IMultiTextFieldItemProps;

	addInputItemActionProps?: IMultiTextFieldAddInputItemActionProps;
	removeInputItemActionProps?: IMultiTextFieldRemoveInputItemActionProps;

	minItemCount?: number;
	initialItemCount?: number;
	maxItemCount?: number;

	values: string[],

	onGetInputProps?: (itemValue: string, itemIndex: number) => IMultiTextFieldItemProps;

	onGetDefaultInputItemValue?: (itemIndex: number) => string;
	onGetInputItemErrorMessage?: (itemValue: string, itemIndex: number) => string;
	
	onInputItemAdded?: (newValue: string, itemIndex: number) => void;
	onInputItemRemoved?: (removedValue: string, itemIndex: number) => void;

	onInputItemFocus?: (itemIndex: number) => void;
	onInputItemBlur?: (itemIndex: number) => void;
	
	onChange?: (values:string[]) => void;
}

export declare class MultiTextField extends React.Component<IMultiTextFieldProps, {}> {
	constructor(props: IMultiTextFieldProps);
	render(): JSX.Element;
}