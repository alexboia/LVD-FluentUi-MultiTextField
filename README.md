# LVD-FluentUi-MultiTextField

A multiple text field input component, built using the [FluentUI library](https://github.com/microsoft/fluentui), with the following features:
- specify optional minimum, maximum and initial value count;
- controls for adding and removing input items;
- fine-grained control over input item configuration.

## Installation
<a name="c-installation"></a>

`npm install --save lvd-fluentui-multitextfield`

## Demo
<a name="c-demo"></a>

The `demo` directory contains [a compiled and ready-to-run example](https://github.com/alexboia/LVD-FluentUi-MultiTextField/tree/main/demo). Just open up the `index.html` file.

## Basic Usage
<a name="c-basic-usage"></a>

```javascript
import React from 'react';
import { MultiTextField } from 'lvd-fluentui-multitextfield';

class MultiTextFieldSamplePage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			values: []
		};

		this._handleValuesChanged = 
			this._handleValuesChanged.bind(this);
	}

	_handleValuesChanged(values) {
		// Do something with the values
		this.setState({
			values: values
		});
	}

	render() {
		return (
			<MultiTextField 
				values={this.state.values}
				onChange={this._handleValuesChanged}
			/>
		);
	}
}
```

You can find a full working example [here](https://github.com/alexboia/LVD-FluentUi-MultiTextField/blob/main/src/App.jsx).

## Styling
<a name="c-styling"></a>

You can either directly include the `dist/style.css` into your `html` web page or use the `@import` directive inside your stylesheet if building using webpack:

```css
@import '~lvd-fluentui-multitextfield/dist/style.css';
```

Also see [the component itself]().


## Building
<a name="c-building"></a>

To build the demo application: 

```
npm run build-app
```

To build the library: 

```
npm run build-dist
```

To build both in one sitting: 

```
npm run build
```

## Customization Options
<a name="c-customization"></a>

| What | Prop Name | Type | Notes |
| --- | --- | --- | --- |
| Set additional master container css class name | `className` | `string` | Defaults to `null`. |
| Set additional master inline css style properties | `style` | `object` | Key-value plain javascript object. Defaults to `{}`. |
| Set input label | `label` | `string` | Defaults to empty string. |
| Configure all input items | `inputProps` | `Input Items Configuration Object` | See below. |
| Configure the add input item action | `addInputItemActionProps` | `Add Input Action Configuration Object` | See below. |
| Configure the remove input item action | `removeInputItemActionProps` | `Remove Input Action Configuration Object` | See below. |
| Set minimum input item count | `minItemCount` | `Number` | Defaults to `1`. |
| Set maximum input item count | `maxItemCount` | `Number` | Defaults to `Number.MAX_SAFE_INTEGER`. |
| Set initial input item count | `initialItemCount` | `Number` | Defaults to `1`. Must be within specified minimum and maximum input item counts. |
| Set values | `values` | `string[]` | Defaults to an array of empty string values with the length equal to the specified initial item count. |
| Configure specific input item | `onGetInputProps` | (`itemValue`:`string`, `itemIndex`:`number`) => `Input Items Configuration Object` | See below. |
| Get error message for specific input item | `onGetInputItemErrorMessage` | (`itemValue`:`string`, `itemIndex`:`number`) => `string` | Return empty string if no error. |
| Get default value for specific input item | `onGetDefaultInputItemValue` | (`itemIndex`:`number`) => `string` | Default value defaults to an empty string. |

## Events
<a name="c-events"></a>

| Event | Prop Name | Arguments | Notes |
| --- | --- | --- | --- |
| Value added at index | `onInputItemAdded` | (`newValue`:`string`, `itemIndex`:`number`) | - |
| Value removed at index | `onInputItemRemoved` | (`removedValue`:`string`, `itemIndex`:`number`) | - |
| Input item focused | `onInputItemFocus` | (`itemIndex`:`number`) | Triggered when one of the underlying `TextField`s gains focus. |
| Input item lost focus | `onInputItemBlur` | (`itemIndex`:`number`) | Triggered when one of the underlying `TextField`s loses focus. |
| Value changed | `onChange` | (`values`:`string[]`,) | Triggered when: a new input item is added, an existing input item is removed or the value of an existing input item is changed. |

## Changelog
<a name="c-changelog"></a>

### Version 0.0.1

- First tracked version.

## Donate
<a name="c-donate"></a>

I put some of my free time into developing and maintaining this plugin.
If helped you in your projects and you are happy with it, you can...

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/Q5Q01KGLM)