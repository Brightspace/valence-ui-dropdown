# valence-ui-dropdown
[![Bower version][bower-image]][bower-url]
[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][dependencies-image]][dependencies-url]

This component contains Sass mixins and CSS that you can use to style dropdown menus.

## Installation

Install from NPM:
```shell
npm install vui-dropdown
```

Install from Bower:
```shell
bower install vui-dropdown
```

## Usage

This module does not provide any specific styling for the button itself, since this may be accomplished with [vui-button](https://github.com/Brightspace/valence-ui-button) depending on your implementation.

**Import the mixins:**

```scss
@import 'bower_components/vui-dropdown/dropdown.scss'; // or...

@import "node_modules/vui-dropdown/dropdown.scss";
```

**Icons:**

Use the correct icon based on the type of opener. For example:

* Primary buttons: `$vui-dropdown-icon-primary`
* Secondary buttons: `$vui-dropdown-icon-secondary`
* Context menu:
	* Normal: `$vui-dropdown-icon-secondary`
	* Focus: `$vui-dropdown-icon-secondary-focus`
	* Open: `$vui-dropdown-icon-secondary-open`

**Button Menu:**

Styling for a button menu with mark-up such as:

```html
<button>
	<span>
		<span>Some Text</span>
	</span>
</button>
```

```scss
button {

	@include vui-dropdown-button-menu; // or...
	@include vui-dropdown-button-menu-primary;

	& > span {
		@include vui-dropdown-button-menu-content;
	}

}
```

**Context Menu:**

Styling for a button to be a simple context-menu with with mark-up such as:

```html
<button>
	<span>Some Text</span>
</button>
```

```scss
button {

	@include vui-dropdown-context-menu;

}
button.open {

	@include vui-dropdown-context-menu-open;

}
```

**Important:** text should always be provided to make the button accessible. The mixin will create styles to position the text (contained with the `span`) offscreen.

**Menu:**

The menu contains the list of items. A simple implementation to position the menu underneath a button would be:

```scss
.vui-dropdown-menu {

	@include vui-dropdown-menu;

	display: none;
	left: 0;
	position: absolute;
	top: 2.1rem;
	margin-top: 0.5rem;
	z-index: 1001;

	[dir="rtl"] & {
		left: auto;
		right: 0;
	}

}

.vui-dropdown-menu-visible {
	display: inline-block;
}
```

**Menu Items:**

```scss
// typical item link
.vui-dropdown-menu-item > a {
	@include vui-dropdown-menu-item-link;
}

// item link that has focus
.vui-dropdown-menu-item.vui-dropdown-menu-item-focus {
	@include vui-dropdown-menu-item-focus;
}

// item link that is disabled
.vui-dropdown-menu-item-disabled > a {
	@include vui-dropdown-menu-item-link-disabled;
}
```

For further information on this component and other VUI components, see the docs at [ui.valence.d2l.com](http://ui.valence.d2l.com/).

#### Coding styles

See the [VUI Best Practices & Style Guide](https://github.com/Brightspace/valence-ui-docs/wiki/Best-Practices-&-Style-Guide) for information on VUI naming conventions, plus information about the [EditorConfig](http://editorconfig.org) rules used in this repo.

[bower-url]: http://bower.io/search/?q=vui-dropdown
[bower-image]: https://img.shields.io/bower/v/vui-dropdown.svg
[npm-url]: https://www.npmjs.org/vui-dropdown
[npm-image]: https://img.shields.io/npm/v/vui-dropdown.svg
[ci-url]: https://travis-ci.org/Brightspace/valence-ui-dropdown
[ci-image]: https://travis-ci.org/Brightspace/valence-ui-dropdown.svg?branch=master
[dependencies-url]: https://david-dm.org/Brightspace/valence-ui-dropdown
[dependencies-image]: https://img.shields.io/david/Brightspace/valence-ui-dropdown.svg
