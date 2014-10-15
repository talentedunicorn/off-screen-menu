$(function() {
	function init()
	{
		toggleMenu('menu', 'site-wrap', 'nav');
	}

	// Toggle menu
	function toggleMenu(menuId, siteWrapClass, navId) {
		var menu = $('#' + menuId),
			menuIcon = menu.find('.icon*'),
			nav = $('#' + navId),
			bodyWrap = $('.' + siteWrapClass);

		// On click of menu
		menu.click(function() {
			nav.toggle(300);
			menuIcon.toggleClass('icon-close icon-menu'); // Change menu icon
		});
	}

	// Run stuff
	init();

});