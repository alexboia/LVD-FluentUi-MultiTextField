const MultiTextFieldDefaults = {
	minItemCount: 1,
	maxItemCount: Number.MAX_SAFE_INTEGER,
	initialItemCount: 1,

	label: '',

	inputItem: {
		label: null,
		placeholder: 'Please enter a value',
		description: null,

		messages: {
			empty: 'You must fill in a value'
		}
	},

	addInputItemAction: {
		label: null,
		iconName: 'Add'
	},

	removeInputItemAction: {
		label: null,
		iconName: 'RemoveFilter'
	}
};

export default MultiTextFieldDefaults;