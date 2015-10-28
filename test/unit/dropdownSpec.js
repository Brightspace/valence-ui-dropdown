( function() {
	'use strict';

	describe( 'vui-dropdown', function() {

		beforeEach( function () {
			jasmine.addMatchers( vui.jasmine.dom.matchers );
		});

		describe( 'selectors', function() {
			it( 'defines a .vui-dropdown-primary selector', function() {
				expect( document ).toHaveCssSelector( '.vui-dropdown-primary' );
			});
			it( 'defines a .vui-dropdown-dropdown-primary-active selector', function() {
				expect( document ).toHaveCssSelector( '.vui-dropdown-primary-active' );
			});
			it( 'defines a .vui-dropdown-secondary selector', function() {
				expect( document ).toHaveCssSelector( '.vui-dropdown-secondary' );
			});
			it( 'defines a .vui-dropdown-secondary-active selector', function() {
				expect( document ).toHaveCssSelector( '.vui-dropdown-secondary-active' );
			});
			it( 'defines a .vui-dropdown-list selector', function() {
				expect( document ).toHaveCssSelector( '.vui-dropdown-list' );
			});
			it( 'defines a .vui-dropdown-list-show selector', function() {
				expect( document ).toHaveCssSelector( '.vui-dropdown-list-show' );
			});
			it( 'defines a .vui-dropdown-item selector', function() {
				expect( document ).toHaveCssSelector( '.vui-dropdown-item' );
			});
			it( 'defines a .vui-dropdown-item-disabled selector', function() {
				expect( document ).toHaveCssSelector( '.vui-dropdown-item-disabled' );
			});
			it( 'defines a .vui-dropdown-arrow-icon selector', function() {
				expect( document ).toHaveCssSelector( '.vui-dropdown-arrow-icon::before' );
			});
		});

		describe( 'menu list container', function() {
			var node;

			beforeEach( function() {
				node = document.body.appendChild( document.createElement( 'div' ));
				node.className = 'vui-dropdown-list-show';
			});

			afterEach( function() {
				document.body.removeChild( node );
			});

			it( 'has border radius of 8px', function() {
				expect( node ).toHaveBorderRadius( '8px' );
			});
			it( 'has text align center', function() {
				expect( node ).toHaveTextAlign( 'center' );
			});
			it( 'has list style type of none', function() {
				expect( node ).toHaveListStyleType( 'none' );
			});

		});


	});
})();
