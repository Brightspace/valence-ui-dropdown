# valence-ui-dropdown

[![Build status][ci-image]][ci-url]

Mixins and CSS for styling drop down menus

This component contains Sass mixins and CSS that can be used to create a loading spinner.

## Usage

```js
//HTML
<div class='primary-menu' />

//CSS or SASS
.primary-menu {
	@include vui-dropdown-primary; //Will use default style
}

OR

//HTML
<div class='secondary-menu' />

.secondary-menu {
	@include vui-dropdown-secondary;
}

```

For further information on this component and other VUI components, see the docs at [ui.valence.d2l.com](http://ui.valence.d2l.com/).

#### Coding styles
See the [VUI Best Practices & Style Guide](https://github.com/Brightspace/valence-ui-docs/wiki/Best-Practices-&-Style-Guide) for information on VUI naming conventions, plus information about the [EditorConfig](http://editorconfig.org) rules used in this repo.


[ci-url]: https://travis-ci.org/Brightspace/valence-ui-dropdown
[ci-image]: https://travis-ci.org/Brightspace/valence-ui-dropdown.svg?token=ZYvPKniByWFPuyqz8hm5&branch=master
