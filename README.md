# valence-ui-dropdown

[![Build status][ci-image]][ci-url]

Mixins and CSS for styling drop down menus

This component contains Sass mixins and CSS that can be used to create a loading spinner.

## Usage
### Menu Buttons

```js
//HTML for creating a primary menu button
<div class='primary-menu' />

//CSS or SASS
.primary-menu {
	@include vui-dropdown-primary; //Will use default style
}

OR

//HTML for creating a secondary menu button
<div class='secondary-menu' />

.secondary-menu {
	@include vui-dropdown-secondary;
}

```

### Menu List
The menu list should contain list items
```js

//CSS or SASS
// showing the menu list
.menu-list {
	@include vui-dropdown-list-show
}
// hiding the menu
.menu-list-hide {
	@include vui-dropdown-list
}
```

### Menu Items
```js
// typical menu item
.menu-item {
	@include vui-dropdwon-item;
}
// disabled menu item
.menu-item-disabled {
	@include vui-dropdown-item-disabled;
}
```


For further information on this component and other VUI components, see the docs at [ui.valence.d2l.com](http://ui.valence.d2l.com/).

#### Coding styles
See the [VUI Best Practices & Style Guide](https://github.com/Brightspace/valence-ui-docs/wiki/Best-Practices-&-Style-Guide) for information on VUI naming conventions, plus information about the [EditorConfig](http://editorconfig.org) rules used in this repo.


[ci-url]: https://travis-ci.org/Brightspace/valence-ui-dropdown
[ci-image]: https://travis-ci.org/Brightspace/valence-ui-dropdown.svg?branch=master
