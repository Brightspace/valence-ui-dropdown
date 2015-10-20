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
				expect( document ).toHaveCssSelector( '.vui-dropdown-dropdown-primary-active' );
			});

		});


	});
})();
